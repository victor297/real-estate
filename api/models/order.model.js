import mongoose from "mongoose";
import { listingSchema } from "./listing.model.js";

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    email: {
      type: String,
      required: true,
    },
    payment_status: String,
    referenceId: String,
    product: listingSchema,
  },
  { timestamps: true }
);
const Order = mongoose.model("Order", OrderSchema);

export default Order;
