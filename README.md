# Bulsoft UI - Next.js Application

A modern Next.js application for Bulsoft's enterprise quality assurance solutions.

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn (or npm)

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
yarn build
yarn start
```

## Contact Form Email Setup

The contact form sends emails to `info@bulsoft.com` using the Resend API.

### Setup Instructions

1. **Create a Resend account** at [https://resend.com](https://resend.com)

2. **Get your API key** from the Resend dashboard

3. **Create a `.env.local` file** in the root directory:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Bulsoft Contact Form <noreply@yourdomain.com>
```

4. **Verify your domain** (optional but recommended):
   - Go to Resend dashboard → Domains
   - Add and verify your domain
   - Update `RESEND_FROM_EMAIL` to use your verified domain

### Testing Without API Key

If `RESEND_API_KEY` is not set, the form will still work but emails won't be sent. The submission will be logged to the console in development mode.

### Alternative Email Services

To use a different email service (SendGrid, Mailgun, etc.), modify `/app/api/contact/route.js` to use your preferred service's API.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── testing/            # Testing services page
│   ├── industries/         # Industries page
│   ├── case-studies/      # Case studies page
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # UI components (shadcn/ui)
│   │   ├── Header.jsx     # Site header
│   │   └── Footer.jsx     # Site footer
│   ├── lib/               # Utilities
│   └── mock.js            # Mock data
└── public/                # Static assets
```

## Technologies

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Resend** - Email service
- **Sonner** - Toast notifications

## License

Private - All rights reserved
