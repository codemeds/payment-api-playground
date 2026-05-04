const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/payment", async (req, res) => {
  try {
    const { amount, currency, card, billingAddress } = req.body;

    const idempotencyKey = crypto.randomUUID();

    const helcimPayload = {
  ipAddress: "192.168.1.1",
  terminalId: 68535,
  currency: currency,
  amount: Number(amount),
  billingAddress: {
    name: billingAddress.name,
    street1: billingAddress.street1,
    city: billingAddress.city,
    province: billingAddress.province,
    country: billingAddress.country,
    postalCode: billingAddress.postalCode
  },
  cardData: {
    cardNumber: card,
    cardExpiry: "0128",
    cardCVV: "100"
  }
    };

    const response = await fetch("https://api.helcim.com/v2/payment/purchase", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-token": process.env.HELCIM_API_KEY,
        "idempotency-key": idempotencyKey
      },
      body: JSON.stringify(helcimPayload)
    });

    const data = await response.json();

    res.status(response.status).json({
      success: response.ok,
      status: response.status,
      idempotencyKey,
      requestSentToHelcim: helcimPayload,
      helcimResponse: data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Payment API request failed.",
      error: error.message
    });
  }
});

app.post("/api/helcimpay/initialize", async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const response = await fetch("https://api.helcim.com/v2/helcim-pay/initialize", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-token": process.env.HELCIM_API_KEY
      },
      body: JSON.stringify({
        paymentType: "purchase",
        amount: Number(amount) || 25,
        currency: currency || "CAD"
      })
    });

    const data = await response.json();

    res.status(response.status).json(data);

  } catch (error) {
    res.status(500).json({
      error: "Failed to initialize HelcimPay session",
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});