const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("."));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/payment", (req, res) => {
  res.json({
    success: true,
    status: "APPROVED",
    message: "Demo backend connected successfully",
    receivedData: req.body
  });
});

app.post("/api/helcimpay/initialize", (req, res) => {
  res.json({
    success: true,
    checkoutToken: "demo_token_123",
    message: "Mock HelcimPay.js session created"
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});