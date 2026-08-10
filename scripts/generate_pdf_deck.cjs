const PDFDocument = require('pdfkit');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

async function buildPDF() {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 40,
    info: {
      Title: 'VedsWeb Studio — Official Agency Deck & Portfolio',
      Author: 'Vedant Joliya',
      Subject: 'Bespoke Web Design, Development, Pricing & Live Projects',
      Keywords: 'VedsWeb Studio, Vedant Joliya, Web Design Agency, Framer, React, Google SEO, Parma Italy'
    }
  });

  const outputPath = path.join(__dirname, '../public/VedsWeb_Studio_Agency_Deck.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const projects = [
    { title: 'Bar Cafe', category: 'Framer E-Commerce & Cafe App', url: 'https://bartea.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' },
    { title: 'Barber Shop', category: 'Framer Grooming & Service Portal', url: 'https://abarber.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' },
    { title: 'Drink Product', category: 'Framer Beverage Showcase', url: 'https://zoooom.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' },
    { title: 'Modern Restaurant', category: 'Framer Dining Experience Platform', url: 'https://sehran.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' },
    { title: 'Luxury Hotel', category: 'Framer Hospitality & Booking App', url: 'https://hotelliaa.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' },
    { title: 'Modern Salon', category: 'Framer Beauty & Wellness Portal', url: 'https://salonixxx.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' },
    { title: 'Luxury Restaurant', category: 'Framer Gourmet Dining Showcase', url: 'https://frappiesto.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' },
    { title: 'Bakery Shop', category: 'Framer Artisanal Pastry Store', url: 'https://pasticceriafortini.framer.website/', desc: 'A visually engaging Framer website built with modern layouts, responsive design, and smooth interactions.' }
  ];

  const mainQrDataUrl = await QRCode.toDataURL('https://vedsweb.it', { margin: 1, color: { dark: '#1A1816', light: '#FFFFFF' } });
  const mainQrBuffer = Buffer.from(mainQrDataUrl.split(',')[1], 'base64');

  // PAGE 1: COVER PAGE
  doc.rect(0, 0, 595.28, 841.89).fill('#FDFBF7');

  // Top Accent Bar
  doc.rect(0, 0, 595.28, 12).fill('#8B5CF6');

  // Brand Title
  doc.fillColor('#1A1816').fontSize(38).font('Helvetica-Bold').text('VW STUDIO', 50, 80);
  doc.fillColor('#8B5CF6').fontSize(14).font('Helvetica-Bold').text('VEDSWEB STUDIO — BESPOKE WEB DESIGN & GOOGLE ENGINEERING', 50, 125);

  doc.strokeColor('#1A1816').opacity(0.15).lineWidth(1).moveTo(50, 150).lineTo(545, 150).stroke();
  doc.opacity(1);

  // Agency Intro Box
  doc.roundedRect(50, 175, 495, 140, 16).fillAndStroke('#FFFFFF', '#1A1816');
  doc.fillColor('#1A1816').fontSize(20).font('Helvetica-Bold').text('About the Studio', 70, 195);
  doc.fillColor('#706B65').fontSize(11).font('Helvetica').text(
    'VedsWeb Studio is a bespoke web design agency led by founder & lead engineer Vedant Joliya. We design & engineer pixel-perfect Framer websites, custom UI/UX design systems, and deliver end-to-end Google Search indexing for global brands.',
    70,
    225,
    { width: 455, lineGap: 4 }
  );

  // Founder & Contact Block
  doc.roundedRect(50, 335, 495, 120, 16).fill('#1A1816');
  doc.fillColor('#FFFFFF').fontSize(16).font('Helvetica-Bold').text('Studio Contact & Credentials', 70, 355);
  doc.fillColor('#E5E7EB').fontSize(10).font('Helvetica').text('Founder & Lead Engineer: Vedant Joliya (MSc Data Science for Management, Univ. of Parma)', 70, 380);
  doc.text('Location: Parma, Emilia-Romagna, Italy   |   Phone: +39 3516785413', 70, 396);
  doc.text('Email: contactsvedant@gmail.com   |   Official Website: https://vedsweb.it', 70, 412);

  // Main QR Code Box
  doc.roundedRect(50, 475, 495, 160, 16).fillAndStroke('#FFFFFF', '#8B5CF6');
  doc.image(mainQrBuffer, 70, 495, { width: 120, height: 120 });
  doc.fillColor('#1A1816').fontSize(18).font('Helvetica-Bold').text('Scan to Visit Official Website', 210, 510);
  doc.fillColor('#706B65').fontSize(11).font('Helvetica').text('Scan this QR code with any smartphone camera to launch vedsweb.it live in your mobile browser.', 210, 538, { width: 310, lineGap: 3 });
  doc.fillColor('#8B5CF6').fontSize(12).font('Helvetica-Bold').text('https://vedsweb.it ↗', 210, 595);

  // Footer Cover
  doc.fillColor('#706B65').fontSize(9).font('Helvetica').text('VedsWeb Studio by Vedant Joliya — Parma, Italy', 50, 790, { align: 'center', width: 495 });

  // PAGE 2: SERVICES & PRICING
  doc.addPage();
  doc.rect(0, 0, 595.28, 841.89).fill('#FDFBF7');
  doc.rect(0, 0, 595.28, 10).fill('#8B5CF6');

  doc.fillColor('#1A1816').fontSize(26).font('Helvetica-Bold').text('Services & Transparent Pricing', 50, 45);
  doc.fillColor('#706B65').fontSize(11).font('Helvetica').text('All-inclusive single packages with regional currency adjustments and 24-hour proposal response.', 50, 75);

  // Pricing Box 1
  doc.roundedRect(50, 105, 495, 135, 16).fillAndStroke('#FFFFFF', '#E5E7EB');
  doc.fillColor('#8B5CF6').fontSize(10).font('Helvetica-Bold').text('ESSENTIAL PACKAGE', 70, 120);
  doc.fillColor('#1A1816').fontSize(20).font('Helvetica-Bold').text('Single Page Package — €399 / $430', 70, 135);
  doc.fillColor('#706B65').fontSize(10).font('Helvetica').text('Ideal for landing pages, product launches & portfolio sites.', 70, 160);
  doc.fillColor('#1A1816').fontSize(9.5).font('Helvetica').text('• Single page responsive web application   • Custom Figma UI/UX layout   • Google Search Console indexing & sitemap.xml\n• Lighthouse Core Web Vitals score 95+   • Multi-device viewport support   • 1 month technical support', 70, 180, { lineGap: 4 });

  // Pricing Box 2
  doc.roundedRect(50, 255, 495, 140, 16).fillAndStroke('#1A1816', '#1A1816');
  doc.fillColor('#8B5CF6').fontSize(10).font('Helvetica-Bold').text('MOST POPULAR', 70, 270);
  doc.fillColor('#FFFFFF').fontSize(20).font('Helvetica-Bold').text('Standard Multi-Page — €899 / $970', 70, 285);
  doc.fillColor('#9CA3AF').fontSize(10).font('Helvetica').text('Complete web application for growing businesses & agencies.', 70, 310);
  doc.fillColor('#F3F4F6').fontSize(9.5).font('Helvetica').text('• 2 to 4 fully custom responsive pages   • Custom Framer / React CMS   • Advanced Google SEO & OpenGraph setup\n• Interactive contact forms & booking triggers   • Google Analytics (GA4) integration   • Priority 24/7 technical support', 70, 330, { lineGap: 4 });

  // Pricing Box 3
  doc.roundedRect(50, 410, 495, 135, 16).fillAndStroke('#FFFFFF', '#E5E7EB');
  doc.fillColor('#8B5CF6').fontSize(10).font('Helvetica-Bold').text('ENTERPRISE PLATFORM', 70, 425);
  doc.fillColor('#1A1816').fontSize(20).font('Helvetica-Bold').text('Enterprise Platform — €1,499 / $1,620+', 70, 440);
  doc.fillColor('#706B65').fontSize(10).font('Helvetica').text('Tailored digital platforms for high-scale brands & e-commerce.', 70, 465);
  doc.fillColor('#1A1816').fontSize(9.5).font('Helvetica').text('• 5+ custom pages or full web platform   • Stripe e-commerce integration   • Custom admin dashboard & database\n• Multi-language & regional currency engine   • Custom API integrations & webhooks   • Dedicated ongoing maintenance', 70, 485, { lineGap: 4 });

  // Services Overview Grid
  doc.fillColor('#1A1816').fontSize(18).font('Helvetica-Bold').text('Core Capabilities', 50, 565);

  const capabilities = [
    { title: 'Web Design', desc: 'Framer & Figma UI/UX design systems with high-end typography.' },
    { title: 'Web Development', desc: 'Production-ready React & Framer web applications.' },
    { title: 'Google SEO Indexing', desc: 'Google Search Console, sitemap.xml, OpenGraph & 95+ Lighthouse.' },
    { title: 'eCommerce & Hosting', desc: 'Stripe payments, cloud hosting, DNS, SSL & ongoing maintenance.' }
  ];

  capabilities.forEach((c, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const x = 50 + col * 255;
    const y = 595 + row * 85;

    doc.roundedRect(x, y, 240, 75, 12).fillAndStroke('#FFFFFF', '#E5E7EB');
    doc.fillColor('#8B5CF6').fontSize(12).font('Helvetica-Bold').text(c.title, x + 15, y + 15);
    doc.fillColor('#706B65').fontSize(9).font('Helvetica').text(c.desc, x + 15, y + 34, { width: 210, lineGap: 2 });
  });

  doc.fillColor('#706B65').fontSize(9).font('Helvetica').text('VedsWeb Studio Deck — Page 2 of 4', 50, 790, { align: 'center', width: 495 });

  // PAGE 3: PORTFOLIO PROJECTS (Part 1 - Projects 1-4)
  doc.addPage();
  doc.rect(0, 0, 595.28, 841.89).fill('#FDFBF7');
  doc.rect(0, 0, 595.28, 10).fill('#8B5CF6');

  doc.fillColor('#1A1816').fontSize(26).font('Helvetica-Bold').text('Featured Live Portfolio Projects (1/2)', 50, 45);
  doc.fillColor('#706B65').fontSize(11).font('Helvetica').text('Scan any QR code with your mobile camera to launch the live web application in real-time.', 50, 75);

  for (let i = 0; i < 4; i++) {
    const p = projects[i];
    const y = 105 + i * 160;

    const qrData = await QRCode.toDataURL(p.url, { margin: 1, color: { dark: '#1A1816', light: '#FFFFFF' } });
    const qrBuf = Buffer.from(qrData.split(',')[1], 'base64');

    doc.roundedRect(50, y, 495, 145, 16).fillAndStroke('#FFFFFF', '#E5E7EB');
    doc.image(qrBuf, 65, y + 17, { width: 110, height: 110 });

    doc.fillColor('#8B5CF6').fontSize(9.5).font('Helvetica-Bold').text(p.category.toUpperCase(), 190, y + 20);
    doc.fillColor('#1A1816').fontSize(18).font('Helvetica-Bold').text(p.title, 190, y + 36);
    doc.fillColor('#706B65').fontSize(10).font('Helvetica').text(p.desc, 190, y + 62, { width: 335, lineGap: 3 });
    doc.fillColor('#8B5CF6').fontSize(10).font('Helvetica-Bold').text(`Live Demo: ${p.url}`, 190, y + 112);
  }

  doc.fillColor('#706B65').fontSize(9).font('Helvetica').text('VedsWeb Studio Deck — Page 3 of 4', 50, 790, { align: 'center', width: 495 });

  // PAGE 4: PORTFOLIO PROJECTS (Part 2 - Projects 5-8)
  doc.addPage();
  doc.rect(0, 0, 595.28, 841.89).fill('#FDFBF7');
  doc.rect(0, 0, 595.28, 10).fill('#8B5CF6');

  doc.fillColor('#1A1816').fontSize(26).font('Helvetica-Bold').text('Featured Live Portfolio Projects (2/2)', 50, 45);
  doc.fillColor('#706B65').fontSize(11).font('Helvetica').text('Explore more bespoke web applications engineered by VedsWeb Studio.', 50, 75);

  for (let i = 4; i < 8; i++) {
    const p = projects[i];
    const y = 105 + (i - 4) * 160;

    const qrData = await QRCode.toDataURL(p.url, { margin: 1, color: { dark: '#1A1816', light: '#FFFFFF' } });
    const qrBuf = Buffer.from(qrData.split(',')[1], 'base64');

    doc.roundedRect(50, y, 495, 145, 16).fillAndStroke('#FFFFFF', '#E5E7EB');
    doc.image(qrBuf, 65, y + 17, { width: 110, height: 110 });

    doc.fillColor('#8B5CF6').fontSize(9.5).font('Helvetica-Bold').text(p.category.toUpperCase(), 190, y + 20);
    doc.fillColor('#1A1816').fontSize(18).font('Helvetica-Bold').text(p.title, 190, y + 36);
    doc.fillColor('#706B65').fontSize(10).font('Helvetica').text(p.desc, 190, y + 62, { width: 335, lineGap: 3 });
    doc.fillColor('#8B5CF6').fontSize(10).font('Helvetica-Bold').text(`Live Demo: ${p.url}`, 190, y + 112);
  }

  doc.fillColor('#706B65').fontSize(9).font('Helvetica').text('VedsWeb Studio Deck — Page 4 of 4', 50, 790, { align: 'center', width: 495 });

  doc.end();

  return new Promise((resolve) => {
    stream.on('finish', () => {
      console.log('PDF generated successfully at public/VedsWeb_Studio_Agency_Deck.pdf');
      resolve();
    });
  });
}

buildPDF().catch(console.error);
