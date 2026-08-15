const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

/* -----------------------------
   Sample Customer Database
------------------------------*/

const customers = [
  {
    phoneNumber: "9392592907",
    customerName: "Rahul Sharma",
    loanId: "LN10001",
    outstandingAmount: 25000,
    emiDueDate: "2026-08-25",
    status: "Overdue"
  },
  {
    phoneNumber: "9876543210",
    customerName: "Priya Verma",
    loanId: "LN10002",
    outstandingAmount: 18000,
    emiDueDate: "2026-08-20",
    status: "Pending"
  }
];

/* -----------------------------
   Health Check
------------------------------*/

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Kapture Finance Mock Server Running"
  });
});

/* -----------------------------
   Customer Lookup
------------------------------*/

app.post("/customer", (req, res) => {

  console.log("\n========== CUSTOMER REQUEST ==========");
  console.log(req.body);
  console.log("======================================\n");

  const phone = req.body.phoneNumber;

  const customer = customers.find(
    c => c.phoneNumber === phone
  );

  if (!customer) {
    return res.json({
      success: false,
      message: "Customer not found"
    });
  }

  res.json({
    success: true,
    customerName: customer.customerName,
    loanId: customer.loanId,
    outstandingAmount: customer.outstandingAmount,
    emiDueDate: customer.emiDueDate,
    status: customer.status
  });

});

/* -----------------------------
   Promise To Pay
------------------------------*/

app.post("/promise-to-pay", (req, res) => {

  console.log(req.body);

  res.json({
    success: true,
    promiseId: "PTP-" + Math.floor(Math.random() * 9000 + 1000),
    message: "Promise to Pay recorded successfully."
  });

});

/* -----------------------------
   Payment Link
------------------------------*/

app.post("/payment-link", (req, res) => {

  console.log(req.body);

  res.json({
    success: true,
    paymentLink:
      "https://payments.example.com/pay/LN10001"
  });

});

/* -----------------------------
   Escalate
------------------------------*/

app.post("/escalate", (req, res) => {

  console.log(req.body);

  res.json({
    success: true,
    ticketId:
      "ESC-" + Math.floor(Math.random() * 9000 + 1000),
    message: "Customer transferred to human agent."
  });

});

/* -----------------------------
   Call Disposition
------------------------------*/

app.post("/disposition", (req, res) => {

  console.log(req.body);

  res.json({
    success: true,
    message: "Disposition saved."
  });

});

/* -----------------------------
   Start Server
------------------------------*/

app.listen(PORT, () => {

  console.log("");
  console.log("======================================");
  console.log(" Kapture Finance Mock Server Running");
  console.log(" http://localhost:" + PORT);
  console.log("======================================");

});