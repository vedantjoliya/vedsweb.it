const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

async function buildPDF() {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 45,
    info: {
      Title: 'VedsWeb Studio — Luxury Official Agency Deck & Portfolio',
      Author: 'Vedant Joliya',
      Subject: 'Minimal Luxury Web Design, Engineering & Live Portfolio',
      Keywords: 'VedsWeb Studio, Vedant Joliya, Luxury Web Design, Framer Agency, Parma Italy'
    }
  });

  const outputPath = path.join(__dirname, '../public/VedsWeb_Studio_Agency_Deck.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const projects = [
    { title: 'Bar Cafe', category: 'Framer E-Commerce & Cafe App', url: 'https://bartea.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' },
    { title: 'Barber Shop', category: 'Framer Grooming & Service Portal', url: 'https://abarber.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' },
    { title: 'Drink Product', category: 'Framer Beverage Showcase', url: 'https://zoooom.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' },
    { title: 'Modern Restaurant', category: 'Framer Dining Experience Platform', url: 'https://sehran.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' },
    { title: 'Luxury Hotel', category: 'Framer Hospitality & Booking App', url: 'https://hotelliaa.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' },
    { title: 'Modern Salon', category: 'Framer Beauty & Wellness Portal', url: 'https://salonixxx.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' },
    { title: 'Luxury Restaurant', category: 'Framer Gourmet Dining Showcase', url: 'https://frappiesto.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' },
    { title: 'Bakery Shop', category: 'Framer Artisanal Pastry Store', url: 'https://pasticceriafortini.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions. Designed to create a memorable user experience across desktop and mobile.' }
  ];

  const mainQrDataUrl = await QRCode.toDataURL('https://vedsweb.it', { margin: 1, color: { dark: '#111111', light: '#FFFFFF' } });
  const mainQrBuffer = Buffer.from(mainQrDataUrl.split(',')[1], 'base64');

  // ================= PAGE 1: LUXURY MINIMAL COVER =================
  doc.rect(0, 0, 595.28, 841.89).fill('#FAF8F5');

  // Top Line
  doc.rect(45, 45, 505.28, 1).fill('#111111');

  // Agency Brand Header
  doc.fillColor('#8B5CF6').fontSize(9).font('Helvetica-Bold').text('V E D S W E B   S T U D I O', 45, 65, { link: 'https://vedsweb.it' });
  doc.fillColor('#71717A').fontSize(8.5).font('Helvetica').text('BESPOKE DIGITAL ENGINEERING & BRANDING', 320, 65, { align: 'right', width: 230 });

  // Main Luxury Title
  doc.fillColor('#111111').fontSize(42).font('Times-Bold').text('The Official', 45, 120);
  doc.fillColor('#111111').fontSize(42).font('Times-Italic').text('Agency Deck .', 45, 165);

  doc.fillColor('#52525B').fontSize(11).font('Helvetica').text(
    'A curated overview of our design methodology, transparent pricing structures, and live digital portfolio engineered for high-end global brands.',
    45,
    225,
    { width: 440, lineGap: 5 }
  );

  // Minimal Founder Box (Pixel-Perfect Grid Layout)
  doc.roundedRect(45, 285, 505, 160, 12).fillAndStroke('#FFFFFF', '#E2E8F0');
  doc.fillColor('#8B5CF6').fontSize(8.5).font('Helvetica-Bold').text('LEADERSHIP & CREATIVE DIRECTION', 65, 302);
  doc.fillColor('#111111').fontSize(20).font('Times-Bold').text('Vedant Joliya', 65, 318);
  doc.fillColor('#71717A').fontSize(9.5).font('Helvetica').text('Founder & Lead Engineer — MSc Data Science for Management, Univ. of Parma', 65, 344);

  doc.strokeColor('#E2E8F0').lineWidth(0.5).moveTo(65, 368).lineTo(530, 368).stroke();

  // Structured Metadata Row 1
  doc.fillColor('#71717A').fontSize(7.5).font('Helvetica-Bold').text('LOCATION', 65, 378);
  doc.fillColor('#111111').fontSize(9.5).font('Helvetica-Bold').text('Parma, Italy', 65, 390);

  doc.fillColor('#71717A').fontSize(7.5).font('Helvetica-Bold').text('PHONE CONTACT', 185, 378);
  doc.fillColor('#8B5CF6').fontSize(9.5).font('Helvetica-Bold').text('+39 3516785413', 185, 390, { link: 'tel:+393516785413' });

  doc.fillColor('#71717A').fontSize(7.5).font('Helvetica-Bold').text('EMAIL ADDRESS', 345, 378);
  doc.fillColor('#8B5CF6').fontSize(9.5).font('Helvetica-Bold').text('contact@vedsweb.it', 345, 390, { link: 'mailto:contact@vedsweb.it' });

  // Structured Metadata Row 2
  doc.fillColor('#71717A').fontSize(7.5).font('Helvetica-Bold').text('OFFICIAL PORTFOLIO WEBSITE', 65, 412);
  doc.fillColor('#8B5CF6').fontSize(9.5).font('Helvetica-Bold').text('https://vedsweb.it ↗', 65, 424, { link: 'https://vedsweb.it' });

  // Scan QR Code Container
  doc.roundedRect(45, 465, 505, 185, 12).fillAndStroke('#111111', '#111111');
  doc.image(mainQrBuffer, 70, 490, { width: 135, height: 135 });

  doc.fillColor('#8B5CF6').fontSize(9).font('Helvetica-Bold').text('INSTANT DIGITAL ACCESS', 230, 500);
  doc.fillColor('#FFFFFF').fontSize(22).font('Times-Bold').text('Scan to Explore Live Website', 230, 517, { link: 'https://vedsweb.it' });
  doc.fillColor('#A1A1AA').fontSize(10).font('Helvetica').text(
    'Point any smartphone camera at this QR code to launch our complete live portfolio, interactive pricing calculator, and admin control center.',
    230,
    550,
    { width: 290, lineGap: 4 }
  );

  doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold').text('https://vedsweb.it ↗', 230, 610, { link: 'https://vedsweb.it' });

  // Footer Cover Page
  doc.fillColor('#A1A1AA').fontSize(8.5).font('Helvetica').text('VedsWeb Studio © 2026 — Designed in Parma, Italy', 45, 785, { align: 'center', width: 505 });


  // ================= PAGE 2: LUXURY PRICING & SERVICES =================
  doc.addPage();
  doc.rect(0, 0, 595.28, 841.89).fill('#FAF8F5');
  doc.rect(45, 45, 505.28, 1).fill('#111111');

  doc.fillColor('#8B5CF6').fontSize(9).font('Helvetica-Bold').text('TRANSPARENT ENGAGEMENT MODELS', 45, 60);
  doc.fillColor('#111111').fontSize(28).font('Times-Bold').text('Services & Pricing Tiers', 45, 78);

  // Tier 1: Essential
  doc.roundedRect(45, 125, 505, 130, 12).fillAndStroke('#FFFFFF', '#E2E8F0');
  doc.fillColor('#8B5CF6').fontSize(8.5).font('Helvetica-Bold').text('SINGLE PAGE PACKAGE', 65, 142);
  doc.fillColor('#111111').fontSize(18).font('Times-Bold').text('Essential Package — €399 / $430', 65, 157, { link: 'https://vedsweb.it/#/pricing' });
  doc.fillColor('#71717A').fontSize(9).font('Helvetica').text('Ideal for high-converting landing pages, launches & personal portfolio sites.', 65, 180);
  doc.fillColor('#111111').fontSize(9).font('Helvetica').text(
    '• Single-page responsive web app   • Custom UI/UX layout   • Google Search Console indexing\n• 95+ Core Web Vitals score   • Multi-device optimization   • 1 month dedicated support',
    65,
    198,
    { lineGap: 4 }
  );

  // Tier 2: Standard
  doc.roundedRect(45, 270, 505, 140, 12).fillAndStroke('#111111', '#111111');
  doc.fillColor('#8B5CF6').fontSize(8.5).font('Helvetica-Bold').text('MOST REQUESTED', 65, 287);
  doc.fillColor('#FFFFFF').fontSize(18).font('Times-Bold').text('Standard Multi-Page — €899 / $970', 65, 302, { link: 'https://vedsweb.it/#/pricing' });
  doc.fillColor('#A1A1AA').fontSize(9).font('Helvetica').text('Complete digital presence for growing businesses & premium web applications.', 65, 325);
  doc.fillColor('#F4F4F5').fontSize(9).font('Helvetica').text(
    '• 2 to 4 custom responsive pages   • Framer / React CMS engine   • Advanced Google SEO & OpenGraph\n• Interactive contact forms & leads tracker   • Google Analytics 4   • Priority 24/7 technical support',
    65,
    343,
    { lineGap: 4 }
  );

  // Tier 3: Enterprise
  doc.roundedRect(45, 425, 505, 130, 12).fillAndStroke('#FFFFFF', '#E2E8F0');
  doc.fillColor('#8B5CF6').fontSize(8.5).font('Helvetica-Bold').text('CUSTOM PLATFORMS', 65, 442);
  doc.fillColor('#111111').fontSize(18).font('Times-Bold').text('Enterprise Platform — €1,499 / $1,620+', 65, 457, { link: 'https://vedsweb.it/#/pricing' });
  doc.fillColor('#71717A').fontSize(9).font('Helvetica').text('Bespoke web platforms for high-scale luxury brands & e-commerce applications.', 65, 480);
  doc.fillColor('#111111').fontSize(9).font('Helvetica').text(
    '• 5+ custom pages or web app   • Stripe e-commerce integration   • Custom admin control dashboard\n• Multi-currency & multi-language engine   • Custom API webhooks   • Ongoing maintenance & cloud hosting',
    65,
    498,
    { lineGap: 4 }
  );

  // Capabilities Grid
  doc.fillColor('#111111').fontSize(16).font('Times-Bold').text('Core Studio Capabilities', 45, 580);

  const caps = [
    { title: 'UI/UX Web Design', desc: 'Bespoke design systems built with high fashion typography and subtle motion.' },
    { title: 'Web Engineering', desc: 'Fast, production-ready React & Framer web applications.' },
    { title: 'Google SEO Indexing', desc: 'Complete Google Search Console setup, sitemap.xml & 95+ Lighthouse.' },
    { title: 'Hosting & Security', desc: 'Cloud infrastructure, SSL certificates, DNS, and ongoing maintenance.' }
  ];

  caps.forEach((c, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 45 + col * 260;
    const y = 605 + row * 80;

    doc.roundedRect(x, y, 245, 70, 10).fillAndStroke('#FFFFFF', '#E2E8F0');
    doc.fillColor('#8B5CF6').fontSize(11).font('Times-Bold').text(c.title, x + 15, y + 14);
    doc.fillColor('#71717A').fontSize(8.5).font('Helvetica').text(c.desc, x + 15, y + 32, { width: 215, lineGap: 2 });
  });

  doc.fillColor('#A1A1AA').fontSize(8.5).font('Helvetica').text('VedsWeb Studio Deck — Page 2 of 4', 45, 785, { align: 'center', width: 505 });


  // ================= PAGE 3: FEATURED PROJECTS (1-4) =================
  doc.addPage();
  doc.rect(0, 0, 595.28, 841.89).fill('#FAF8F5');
  doc.rect(45, 45, 505.28, 1).fill('#111111');

  doc.fillColor('#8B5CF6').fontSize(9).font('Helvetica-Bold').text('CURATED DIGITAL PORTFOLIO', 45, 60);
  doc.fillColor('#111111').fontSize(28).font('Times-Bold').text('Selected Live Projects (1/2)', 45, 78);

  for (let i = 0; i < 4; i++) {
    const p = projects[i];
    const y = 120 + i * 155;

    const qrData = await QRCode.toDataURL(p.url, { margin: 1, color: { dark: '#111111', light: '#FFFFFF' } });
    const qrBuf = Buffer.from(qrData.split(',')[1], 'base64');

    doc.roundedRect(45, y, 505, 140, 12).fillAndStroke('#FFFFFF', '#E2E8F0');
    doc.image(qrBuf, 60, y + 15, { width: 110, height: 110 });

    doc.fillColor('#8B5CF6').fontSize(8.5).font('Helvetica-Bold').text(p.category.toUpperCase(), 185, y + 18);
    doc.fillColor('#111111').fontSize(18).font('Times-Bold').text(p.title, 185, y + 32, { link: p.url });
    doc.fillColor('#71717A').fontSize(9).font('Helvetica').text(p.desc, 185, y + 56, { width: 345, lineGap: 3 });
    doc.fillColor('#8B5CF6').fontSize(9.5).font('Helvetica-Bold').text(`Click or Scan QR to Launch: ${p.url}`, 185, y + 108, { link: p.url });
  }

  doc.fillColor('#A1A1AA').fontSize(8.5).font('Helvetica').text('VedsWeb Studio Deck — Page 3 of 4', 45, 785, { align: 'center', width: 505 });


  // ================= PAGE 4: FEATURED PROJECTS (5-8) =================
  doc.addPage();
  doc.rect(0, 0, 595.28, 841.89).fill('#FAF8F5');
  doc.rect(45, 45, 505.28, 1).fill('#111111');

  doc.fillColor('#8B5CF6').fontSize(9).font('Helvetica-Bold').text('CURATED DIGITAL PORTFOLIO', 45, 60);
  doc.fillColor('#111111').fontSize(28).font('Times-Bold').text('Selected Live Projects (2/2)', 45, 78);

  for (let i = 4; i < 8; i++) {
    const p = projects[i];
    const y = 120 + (i - 4) * 155;

    const qrData = await QRCode.toDataURL(p.url, { margin: 1, color: { dark: '#111111', light: '#FFFFFF' } });
    const qrBuf = Buffer.from(qrData.split(',')[1], 'base64');

    doc.roundedRect(45, y, 505, 140, 12).fillAndStroke('#FFFFFF', '#E2E8F0');
    doc.image(qrBuf, 60, y + 15, { width: 110, height: 110 });

    doc.fillColor('#8B5CF6').fontSize(8.5).font('Helvetica-Bold').text(p.category.toUpperCase(), 185, y + 18);
    doc.fillColor('#111111').fontSize(18).font('Times-Bold').text(p.title, 185, y + 32, { link: p.url });
    doc.fillColor('#71717A').fontSize(9).font('Helvetica').text(p.desc, 185, y + 56, { width: 345, lineGap: 3 });
    doc.fillColor('#8B5CF6').fontSize(9.5).font('Helvetica-Bold').text(`Click or Scan QR to Launch: ${p.url}`, 185, y + 108, { link: p.url });
  }

  doc.fillColor('#A1A1AA').fontSize(8.5).font('Helvetica').text('VedsWeb Studio Deck — Page 4 of 4', 45, 785, { align: 'center', width: 505 });

  doc.end();

  return new Promise((resolve) => {
    stream.on('finish', () => {
      console.log('PDF deck with perfect grid alignment generated successfully at public/VedsWeb_Studio_Agency_Deck.pdf');
      resolve();
    });
  });
}

buildPDF().catch(console.error);
