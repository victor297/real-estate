import { useState } from "react";
import axios from "axios";
import { url } from "../utils/api";
import { useNavigate } from "react-router-dom";

const PayButton = ({ products, totalAmount, email, user }) => {
  const [loading, setLoading] = useState(false);

  const initializePayment = async () => {
    setLoading(true);
    try {
      // Send a POST request to your server to create a Paystack checkout session
      const response = await axios.post(
        `${url}/paystack/create-checkout-session`,
        {
          products: products,
          user: user,
          amount: totalAmount,
          email: email,
        }
      );

      const { authorizationUrl } = response.data;

      // Open Paystack payment page in a new tab
      // const paymentWindow = window.open(authorizationUrl);

      if (authorizationUrl) {
        window.location.href = authorizationUrl;
      } else {
        console.error("Error initializing payment try again");
      }

      // if (paymentWindow) {
      //   const interval = setInterval(() => {
      //     if (paymentWindow.closed) {
      //       window.location.href = "/checkout-success";
      //       clearInterval(interval);
      //     }
      //   }, 1000);
      // } else {
      //   console.error("Failed to open payment window.");
      // }
    } catch (error) {
      console.error("Error initializing payment:", error);
      // Handle the error, e.g., show a user-friendly error message to the user.
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-yellow-500 text-white rounded-lg uppercase hover:opacity-95 p-3"
      onClick={initializePayment}
    >
      {loading ? <p>Loading</p> : "PAY NOW"}
    </button>
  );
};

export default PayButton;
