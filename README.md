# Payment API Scenario Playground

A sandbox tool designed to demonstrate different payment API options, payment endpoints, request parameters, responses, and troubleshooting workflows.

## Overview

This project is a scenario-based API playground built to help users understand how different payment API options and workflows can be used in real-world merchant scenarios.

The goal is to bridge the gap between API documentation, merchant understanding, and support troubleshooting.

## Project Purpose

This tool is designed to:

* Showcase different payment integration options
* Demonstrate common payment API endpoints
* Display request parameters based on user input
* Show sample or live API responses
* Help users understand when to use each API option
* Support troubleshooting and merchant education

## Project Phases

### Phase 1: Payment API Options

The first phase focuses on showcasing different payment API options, including:

* HelcimPay.js
* Helcim.js
* Payment API with full card details

Each option will explain:

* What the integration method is used for
* When a merchant might choose it
* Key benefits and considerations
* Basic example flow

### Phase 2: Payment API Endpoints

The second phase focuses on showcasing different payment API endpoints, parameters, and responses based on user form input.

Planned payment flows include:

* Purchase / Payment
* Pre-Authorization
* Capture Pre-Authorization
* Refund
* Void / Reverse Transaction
* Verify Card

Each scenario will include:

* Endpoint
* Method
* Required parameters
* Optional parameters
* Sample request payload
* Sample or live response
* Plain-English explanation
* Support or merchant notes

The tool may also include a popup or copyable panel where users can copy and paste generated request examples.

### Phase 3: Additional API Scenarios

The third phase will expand the tool beyond basic payment flows.

Planned scenarios include:

* Recurring API workflows
* Device API workflows
* Additional merchant or transaction-related API use cases

This phase will focus on helping users understand broader API capabilities beyond one-time payment processing.

## Key Features

### Scenario-Based Learning

Users can select a payment scenario and view the relevant endpoint, payload structure, parameters, and response examples.

### Developer Console View

The interface includes a console-style area for:

* Request payload
* API response
* Explanation
* Support notes

### Copyable Request Examples

The tool is planned to generate request examples that users can copy and paste for testing, documentation, or learning purposes.

### Response Explanation Layer

Raw API responses can be translated into clearer explanations, including:

* Result
* Reason
* Merchant action
* Support action
* Suggested next step

### Guided Troubleshooting

The tool can suggest next actions based on the selected scenario or API response.

Examples include:

* Retry payment
* Use a different card
* Verify merchant configuration
* Check transaction status
* Escalate if needed

## Tech Stack

Frontend:

* HTML
* CSS
* JavaScript

Backend:

* Node.js
* Express

API:

* Helcim Payment API sandbox

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/payment-api-scenario-playground.git
cd payment-api-scenario-playground
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create environment file

Create a `.env` file in the root directory:

```env
HELCIM_API_KEY=your_sandbox_api_key
HELCIM_API_URL=https://api.helcim.com/v2/payment/purchase
```

### 4. Run the server

```bash
node server.js
```

### 5. Open the app

```text
http://localhost:3000
```

## Demo Notes

The current version is intended as a proof of concept.

The first version may include:

* A working purchase/payment scenario
* Simulated examples for other payment flows
* Static explanations for different integration options
* Sample payloads for learning and demonstration

## Security Note

This project is for demonstration and sandbox use only.

Important considerations:

* Use sandbox credentials only
* Do not process real payments
* Do not store card data
* Do not expose API keys in frontend code
* Production implementations should use secure, compliant payment handling methods

## Future Improvements

Planned improvements include:

* Full API integration for all payment scenarios
* Tokenized card support
* Expanded endpoint library
* Copyable code snippets
* Better response interpretation
* Recurring API examples
* Device API examples
* Merchant-facing and support-facing views
* Improved UI for guided troubleshooting

## Project Context

This project was built to explore how payment API workflows can be made easier to understand, test, and explain.

It is intended to support:

* Merchant education
* Support troubleshooting
* API learning
* Internal training
* Faster issue resolution

## Summary

The Payment API Scenario Playground is a workflow-driven demo tool that combines API education, request generation, response interpretation, and troubleshooting guidance into one interactive experience.
