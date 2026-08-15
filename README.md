# Kapture Finance Voice Agent

## Overview

This project is an AI-powered finance collections voice assistant built using Vapi AI and Node.js. It verifies customers, retrieves loan details, records Promise-to-Pay (PTP), generates payment links, escalates calls to human agents, and logs call dispositions using REST APIs.

---

## Features

- Customer verification
- Loan details lookup
- Promise-to-Pay (PTP) recording
- Payment link generation
- Human agent escalation
- Call disposition logging
- Mock REST APIs

---

## Tech Stack

- Vapi AI
- OpenAI GPT-4o
- Node.js
- Express.js
- ngrok

---

## Project Structure

```
mock-server/
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .env (ignored)
```

---

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| POST /customer | Retrieve customer details |
| POST /promise-to-pay | Save Promise-to-Pay |
| POST /payment-link | Generate payment link |
| POST /escalate | Escalate to human agent |
| POST /disposition | Save call disposition |

---

## Run Locally

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server runs on:

```
http://localhost:3000
```

Expose it publicly using ngrok:

```bash
ngrok http 3000
```

---

## Sample Conversation Flow

1. Verify customer
2. Retrieve loan information
3. Record Promise-to-Pay
4. Generate payment link
5. Log call disposition
6. End or escalate the call

---

## Deliverables

- High-Level Design (HLD)
- Architecture Diagram
- Mock Backend APIs
- GitHub Repository
- Demo Video

---

## Author

**Vishnu Vardhan**







