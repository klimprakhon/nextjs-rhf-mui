# React Hook Form + MUI POC (Next.js + TS)

This is a proof-of-concept project demonstrating how to integrate react-hook-form
with Material UI components inside a Next.js + TypeScript setup.

The focus is on form handling with controlled MUI inputs and a container-driven UI structure.

## Project Structure

app/
├── accounting/
│ └── page.tsx # Demo page entry point
│
├── components/
│ ├── features/
│ │ └── accounting/
│ │ ├── amountSection.tsx # Accordion section for amount inputs
│ │ └── priceSection.tsx # Accordion section for price inputs
│ │
│ └── ui/
│ ├── input/
│ │ └── numberInput/
│ │ ├── numberInput.tsx # RHF Controller wrapper
│ │ └── numberInputBase.tsx # Pure MUI input rendering
│ │
│ └── accordion/
│ └── accordion.tsx # Base Accordion container that use RHF adapter
│
└── README.md

## Installation

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Project will be available at http://localhost:3000

## Key Concepts

### 1. Accordion

I use a reusable `Accordion` component as the base container for grouping related sections:

- AmountSection → wraps inputs related to amounts

- PriceSection → wraps inputs related to prices

This structure makes the form modular and easy to extend.

### 2. Number Input

We separate the form logic from the UI rendering:

- NumberInput.tsx
  Uses `Controller` from `react-hook-form` to connect form state with the UI.

- NumberInputBase.tsx
  A pure presentational component that renders an MUI <TextField />.
