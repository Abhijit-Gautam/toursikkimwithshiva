# 🏔️ Tour Sikkim With Shiva

> A modern, responsive travel website for exploring the mystical beauty of Sikkim — from majestic Himalayan peaks and ancient Buddhist monasteries to vibrant local cuisine and rich cultural heritage.

---

## 🌐 Live Preview

<!-- Add your deployed URL here once live -->
> _Coming soon..._

---

## ✨ Features

- 🏠 **Home** — Full-bleed hero section with featured experiences
- 📍 **Places** — Curated destinations across East, West, and North Sikkim
- 🎭 **Culture** — Monasteries, festivals, mask dances, and Tibetan heritage
- 🍜 **Food** — Authentic Himalayan cuisine guide (momos, thukpa, gundruk & more)
- 🌿 **Nature** — Alpine lakes, national parks, mountain passes, and waterfalls
- ℹ️ **Travel Info** — Permits, best season, transport, and packing tips
- 📞 **Contact** — Easy enquiry form with WhatsApp integration
- 🌗 **Dark / Light Mode** — Persistent theme toggle with system preference detection
- 📱 **Fully Responsive** — Optimised for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vite.dev) | Build tool & dev server |
| [React Router v7](https://reactrouter.com) | Client-side routing |
| [Lucide React](https://lucide.dev) | Icon library |
| Vanilla CSS | Styling & design system |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Fast JavaScript/JSX linter |

---

## 📁 Project Structure

```
tour/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── heroes/         # Full-bleed hero backgrounds (1920×1080px)
│       ├── home/           # Featured experience cards
│       ├── places/         # Destination thumbnails
│       ├── culture/        # Culture section images
│       ├── food/           # Food section images
│       └── nature/         # Nature section images
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation & theme toggle
│   │   ├── Footer.jsx      # Site footer
│   │   ├── Layout.jsx      # Shared page layout wrapper
│   │   ├── HeroSection.jsx # Reusable full-bleed hero
│   │   ├── Card.jsx        # Destination / experience card
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp CTA
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Places.jsx
│   │   ├── Culture.jsx
│   │   ├── Food.jsx
│   │   ├── Nature.jsx
│   │   ├── TravelInfo.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Route definitions
│   ├── main.jsx            # React entry point
│   ├── index.css           # Global design system & tokens
│   └── App.css
├── index.html
├── vite.config.js
├── package.json
├── IMAGE_GUIDE.md          # Full image specs & folder guide
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Abhijit-Gautam/toursikkimwithshiva.git
cd toursikkimwithshiva

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173** by default.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with HMR |
| `npm run build` | Build optimised production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint code quality checks |

---

## 🖼️ Adding Your Photos

All images are served as static assets from the `public/images/` directory.

Refer to [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for a complete list of:
- Exact file paths and filenames
- Recommended dimensions and aspect ratios
- Subfolder organisation for heroes, places, culture, food, and nature images

**Quick summary:**

| Folder | Contents | Recommended Size |
|---|---|---|
| `public/images/heroes/` | Page hero backgrounds | 1920 × 1080 px |
| `public/images/places/` | Destination cards | 800 × 600 px |
| `public/images/home/` | Featured experience cards | 800 × 600 px |
| `public/images/culture/` | Culture section images | 1000 × 750 px |
| `public/images/food/` | Food section images | 800 × 600 px |
| `public/images/nature/` | Nature section images | 800 × 600 px |

---

## 🎨 Design System

The site uses a CSS custom properties-based design system defined in `src/index.css`, including:

- **Color tokens** — primary, accent, surface, text, muted variants with full dark/light mode support
- **Typography** — Inter (body) & Playfair Display (headings) from Google Fonts
- **Spacing scale** — `--spacing-xs` through `--spacing-xxl`
- **Border radius** — `--radius-sm`, `--radius-md`, `--radius-lg`
- **Utility classes** — `.container`, `.section`, `.grid`, `.btn`, `.animate-fade-in-up`

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero and featured cards |
| `/places` | Places | All major Sikkim destinations |
| `/culture` | Culture | Monasteries, festivals & traditions |
| `/food` | Food | Local cuisine and dining guide |
| `/nature` | Nature | Lakes, peaks, parks & waterfalls |
| `/travel-info` | Travel Info | Permits, transport, seasons, packing |
| `/contact` | Contact | Enquiry form & WhatsApp contact |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

Copyright © 2026 **Abhijit Gautam**. All rights reserved.

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact

**Tour Sikkim With Shiva**

For travel enquiries, tour bookings, or any questions about visiting Sikkim, reach out via the Contact page on the website or connect on WhatsApp directly.

---

> _"The mountains are calling and I must go."_ — John Muir
