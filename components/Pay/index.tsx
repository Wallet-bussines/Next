"use client";
import {
  MiniKit,
  tokenToDecimals,
  Tokens,
  PayCommandInput,
} from "@worldcoin/minikit-js";
import { useState } from "react";

const sendPayment = async (wldAmount: number, setStatus: Function) => {
  try {
    const res = await fetch(`/api/initiate-payment`, { method: "POST" });
    const { id } = await res.json();

    const payload: PayCommandInput = {
      reference: id,
      to: "0x512e4a7dda6b13f917d89fa782bdd7666dab1599", // Test address
      tokens: [
        {
          symbol: Tokens.WLD,
          token_amount: tokenToDecimals(wldAmount, Tokens.WLD).toString(),
        },
      ],
      description: "Orbita-x",
    };

    if (MiniKit.isInstalled()) {
      setStatus("Processing payment...");
      return await MiniKit.commandsAsync.pay(payload);
    }
    throw new Error("MiniKit is not installed");
  } catch (error) {
    setStatus("Error sending payment");
    console.error("Error sending payment", error);
    return null;
  }
};

const confirmPayment = async (response: any, setStatus: Function) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/confirm-payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload: response }),
    });

    const payment = await res.json();
    if (payment.success) {
      setStatus("Payment successful!");
      console.log("Payment successful!");
    } else {
      setStatus("Payment failed");
      console.log("Payment failed");
    }
  } catch (error) {
    setStatus("Error confirming payment");
    console.error("Error confirming payment", error);
  }
};

export const PayBlock = () => {
  const [wldAmount, setWldAmount] = useState(0);
  const [status, setStatus] = useState("");

  const handlePay = async () => {
    if (!MiniKit.isInstalled()) {
      setStatus("MiniKit is not installed");
      console.error("MiniKit is not installed");
      return;
    }

    if (wldAmount <= 0) {
      setStatus("Please enter a valid amount for payment");
      return;
    }

    const sendPaymentResponse = await sendPayment(wldAmount, setStatus);
    const response = sendPaymentResponse?.finalPayload;

    if (response?.status === "success") {
      await confirmPayment(response, setStatus);
    } else {
      setStatus("Payment process failed");
    }
  };

  return (
    <div className="text-center space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      {/* Logo */}
      <img
        src="https://wallet-bussines.github.io/orbita.png"
        alt="Orbita-x Logo"
        className="mx-auto mb-6"
        style={{ width: "150px", height: "auto" }}
      />

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Payment</h2>

      {/* WLD Amount Input */}
      <div className="space-y-4">
        <div>
          <label htmlFor="wldAmount" className="block text-sm font-medium text-gray-600">
            WLD Amount:
          </label>
          <input
            type="number"
            id="wldAmount"
            value={wldAmount}
            onChange={(e) => setWldAmount(parseFloat(e.target.value))}
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
            min="0"
            step="0.01"
          />
        </div>
      </div>

      {/* Pay Button */}
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200"
        onClick={handlePay}
      >
        Pay Now
      </button>

      {/* Status Message */}
      {status && (
        <p className={`mt-4 text-sm ${status.includes("Error") ? "text-red-600" : "text-green-600"}`}>
          {status}
        </p>
      )}
    </div>
  );
};
                                       
