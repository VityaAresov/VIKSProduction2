# VIKS Production - Digital Marketing Agency

A modern Next.js website for VIKS Production, featuring video production, social media management, web development, and digital marketing services.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Fast loading with Next.js optimization
- **Interactive Components**: Portfolio gallery, testimonials, contact forms
- **SEO Friendly**: Optimized for search engines

## Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript
- **Styling**: CSS Modules + Tailwind CSS
- **UI Components**: Custom components with Swiper.js
- **Icons**: React Icons, Heroicons
- **Deployment**: Vercel

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/VityaAresov/VIKSProduction2.git
   cd VIKSProduction2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
viks_media-main/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── agency/         # About us page
│   │   ├── cases/          # Portfolio/cases page
│   │   ├── contact-us/     # Contact form page
│   │   ├── services/       # Services pages
│   │   ├── privacy/        # Privacy policy
│   │   └── terms/          # Terms of service
│   ├── components/         # Reusable components
│   │   ├── common/         # Header, Footer, etc.
│   │   ├── hero/           # Hero section components
│   │   ├── Portfolio/      # Portfolio components
│   │   ├── Service/        # Services components
│   │   └── ...
│   └── data/              # Static data and configurations
├── public/                # Static assets
│   └── images/           # Image assets
└── api/                  # Serverless functions
```

## Key Components

- **Hero Section**: Dynamic hero with animated statistics
- **Services**: Comprehensive service showcase
- **Portfolio**: Interactive portfolio grid with modal views
- **Team**: Team member carousel
- **Contact Form**: Integrated contact form with Telegram notifications
- **Blog**: Blog section with featured articles

## Deployment

The project is configured for deployment on Vercel:

```bash
npm run build
```

## Environment Variables

For the contact form to work, set up these environment variables:

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary to VIKS Production.

## Contact

VIKS Production - info@viksproduction.com

Project Link: [https://github.com/VityaAresov/VIKSProduction2](https://github.com/VityaAresov/VIKSProduction2)