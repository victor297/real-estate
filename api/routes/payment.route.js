import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import crypto from "crypto";
import mongoose from "mongoose";
import Order from "../models/order.model.js";
const router = express.Router();
const jsonParserForProducts = express.json();
const ObjectId = mongoose.Types.ObjectId;

router.post(
  "/create-checkout-session",
  jsonParserForProducts,
  async function (req, res) {
    try {
      const { user, email, amount, products } = req.body;

      const response = await axios.post(
        "https://api.paystack.co/transaction/initialize",
        {
          email: email,
          amount: amount * 100,
          metadata: {
            products: products,
            user: user,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          },
        }
      );
      //   console.log("response", response);
      const authorizationUrl = response.data.data.authorization_url;

      res.json({ authorizationUrl });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.post(
  "/webhook",

  async function (req, res) {
    try {
      const hash = crypto
        .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
        .update(JSON.stringify(req.body))
        .digest("hex");
      if (hash == req.headers["x-paystack-signature"]) {
        // const event = jsonData.event;
        const body = req.body;
        // console.log("data", body.data);
        // Handle different Paystack events based on the `event` field
        if (body.event === "charge.success") {
          const newOrder = new Order({
            referenceId: body.data.reference,
            product: body.data.metadata.products,
            user: body.data.metadata.user,
            payment_status: body.data.gateway_response,
            email: body.data.customer.email,
          });

          console.log("newOrder", newOrder);

          await newOrder.save();

          res.status(200).send("Success");
          console.log("Order saved to database");
        } else {
          // Handle other Paystack events if needed
          console.log("Received Paystack event:", event);
          res.status(200).send("Event not handled");
        }
      } else {
        // Invalid signature, ignore the webhook event
        console.log("Invalid Paystack signature");
        res.status(400).send("Invalid signature");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ message: "Error fetching orders" });
    }
  }
);

router.get("/orders", async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});
router.get("/orders/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;

    // Validate if the userId is a valid ObjectId
    if (!ObjectId.isValid(userId)) {
      return next(errorHandler(400, "Invalid user ID"));
    }

    const orders = await Order.find({ user: new ObjectId(userId) });

    if (!orders || orders.length === 0) {
      return next(errorHandler(404, "Orders not found for the user"));
    }

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
});

export default router;
