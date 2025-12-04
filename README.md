# BrandShift - React + Vite Project

This project has been converted to use React with Vite and JSX files.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── assets/          # Static assets (logo, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useTheme.jsx  # Theme management hook
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── styles.css       # Global styles
├── index.html           # HTML template
├── package.json
└── vite.config.js
```

## Features

- ✅ React 18 with JSX
- ✅ Vite for fast development and building
- ✅ Dark/Light theme toggle
- ✅ Responsive design
- ✅ EmailJS integration for contact form
- ✅ Smooth scrolling navigation
- ✅ Mobile menu

## EmailJS Setup

To enable the contact form, update the EmailJS configuration in `src/components/Contact.jsx`:

1. Get your Public Key from EmailJS dashboard
2. Create an email template and get the Template ID
3. Update the constants in `Contact.jsx`:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_TEMPLATE_ID`

See `QUICK_SETUP_GUIDE.md` for detailed instructions.

