# Kapture Finance Voice Agent

## Overview

This project is a Voice AI Collections Agent built using Vapi AI and a Node.js mock server.

The assistant can:
- Authenticate customers using their phone number
- Fetch customer loan details
- Share outstanding balance and EMI due date
- Record Promise to Pay (PTP)
- Send payment links
- Escalate calls to a human agent

## Tech Stack

- Vapi AI
- OpenAI GPT-4o
- Deepgram STT
- ElevenLabs / Cartesia TTS
- Node.js
- Express.js
- Ngrok

## API Endpoints

- POST /customer
- POST /promise-to-pay
- POST /payment-link
- POST /escalate
- POST /disposition

## Running the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

Start ngrok:

```bash
ngrok http 3000
```

## Demo

The assistant successfully:

- Authenticates customer
- Retrieves loan details
- Shares outstanding amount
- Provides EMI due date
- Handles Promise to Pay
- Sends payment link
- Escalates to human agent

## Author

Vishnu Vardhan