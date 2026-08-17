# 👑 VedsWeb Studio — Official Website (`vedsweb.it`)

[![Live Website](https://img.shields.io/badge/Domain-vedsweb.it-8B5CF6?style=for-the-badge&logo=googlechrome&logoColor=white)](https://vedsweb.it)
[![Built With](https://img.shields.io/badge/Tech_Stack-React_%7C_Vite_%7C_Tailwind-000000?style=for-the-badge&logo=react)](https://react.dev)
[![Lead Founder](https://img.shields.io/badge/Founder-Vedant_Joliya-FF7E5F?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/vedant-joliya)

Welcome to the official source repository for **VedsWeb Studio** (`vedsweb.it`), a bespoke web design & engineering agency led by **Vedant Joliya**, based in **Parma, Emilia-Romagna, Italy**.

---

## ✨ Features & Highlights

- ✒️ **Ultra-Luxury Editorial Aesthetic**: Styled with Google Fonts `Cormorant Garamond` (display headlines), `Plus Jakarta Sans` (body & navigation), and warm ivory sand (`#FDFBF7`) background.
- 🌐 **100% Multi-Language Engine**: Automatically detects user language via browser & IP location API, dynamically translating all pages, services, pricing plans, and form options.
- 💱 **Dynamic Regional Currency System**: Converts service packages into local currencies (`EUR`, `USD`, `GBP`, `INR`, `CHF`, `CAD`, `AUD`, etc.) based on visitor IP geolocation.
- 🔍 **Full Enterprise SEO Engine & JSON-LD Schema**: Complete OpenGraph, Twitter Cards, canonical tags, `sitemap.xml`, `robots.txt`, and deep semantic `schema.org` hyper-graph.
- 🔒 **Hidden Founder Management Portal**: Secure hidden admin dashboard accessed via `/#admin` URL path for adding, editing, or deleting portfolio projects and managing client inquiries.
- 🚀 **Clean URL Routing**: Built on standard `BrowserRouter` navigation (`/work`, `/services`, `/pricing`, `/about`, `/contact`).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev) + [Vite 8](https://vitejs.dev)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com) + Custom CSS Variables & Animations
- **Icons**: [Lucide React](https://lucide.dev)
- **Typography**: `Cormorant Garamond` + `Plus Jakarta Sans`
- **Routing**: `react-router-dom` (`BrowserRouter`)

---

## 📂 Project Structure

```
vedsweb/
├── public/
  ├── logo-full.png     # Official VW STUDIO gradient logo
  ├── logo.png          # VW Interlocking mark favicon
  ├── sitemap.xml       # Google Search sitemap
  └── robots.txt        # Search engine crawler instructions
├── src/
  ├── components/
    ├── Navbar.jsx       # Header navigation
    ├── Footer.jsx       # Footer component
    ├── DeviceModal.jsx  # Interactive multi-device preview modal
    └── AdminModal.jsx   # Hidden founder management dashboard
  ├── pages/
    ├── HomePage.jsx     # Landing page
    ├── WorkPage.jsx     # Portfolio page
    ├── ServicesPage.jsx # Services page
    ├── PricingPage.jsx  # Pricing & FAQ page
    ├── AboutPage.jsx    # Founder story & credentials
    └── ContactPage.jsx  # Proposal inquiry form
  ├── context/
    └── PortfolioContext.jsx # Multi-language & currency state engine
  ├── index.css          # Styling tokens & animations
  ├── App.jsx            # App routing wrapper
  └── main.jsx           # Entry point
├── index.html           # Full SEO meta tags & JSON-LD schema
├── package.json
└── README.md
```

---

## ⚡ Getting Started Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vedantjoliya/vedsweb.it.git
   cd vedsweb.it
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Production Build**:
   ```bash
   npm run build
   ```

---

## 📬 Contact & Credits

- **Studio**: VedsWeb Studio by Vedant Joliya
- **Location**: Parma, Emilia-Romagna, Italy
- **Email**: [contact@vedsweb.it](mailto:contact@vedsweb.it)
- **Phone**: [+39 3516785413](tel:+393516785413)
- **Website**: [https://vedsweb.it](https://vedsweb.it)
