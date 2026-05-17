const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const OUT_DIR = path.join(process.cwd(), 'public');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://apmauj.github.io/super-juego/';
const OUT_FILE = path.join(OUT_DIR, 'qr.svg');

async function generate() {
  try {
    const size = 512;
    const svg = await QRCode.toString(SITE_URL, {
      type: 'svg',
      width: size,
      margin: 1,
      color: { dark: '#1F2937', light: '#ffffff' },
    });

    // If there's a logo.svg in public, embed it centered on the QR
    const logoPath = path.join(OUT_DIR, 'logo.svg');
    let finalSvg = svg;
    if (fs.existsSync(logoPath)) {
      const logoContent = fs.readFileSync(logoPath, 'utf8');
      const encoded = encodeURIComponent(logoContent);
      const logoSize = Math.floor(size * 0.22); // 22% of QR size
      const x = Math.floor((size - logoSize) / 2);
      const y = x;
      const imageTag = `<image href="data:image/svg+xml;utf8,${encoded}" x="${x}" y="${y}" width="${logoSize}" height="${logoSize}" />`;

      // Insert the image just before the closing svg tag
      finalSvg = svg.replace('</svg>', `${imageTag}</svg>`);
    }

    fs.writeFileSync(OUT_FILE, finalSvg, 'utf8');
    console.log('Generated QR at', OUT_FILE, 'for URL', SITE_URL);
  } catch (err) {
    console.error('Failed to generate QR:', err);
    process.exitCode = 1;
  }
}

generate();
