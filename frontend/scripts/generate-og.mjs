// Generates the branded Open Graph image (1200×630) at public/og-default.png.
// Run: node scripts/generate-og.mjs
// Uses sharp (already a transitive dependency of Astro). Re-run when branding changes.
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "../public");

const W = 1200;
const H = 630;

// Resize the white PWr logo to a fixed width, then composite it onto the SVG background.
const LOGO_W = 300;
const logo = await sharp(resolve(pub, "logo-pwr-white.png"))
	.resize({ width: LOGO_W })
	.toBuffer();
const logoMeta = await sharp(logo).metadata();

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#1a0c0c"/>
			<stop offset="1" stop-color="#2a1414"/>
		</linearGradient>
	</defs>
	<rect width="${W}" height="${H}" fill="url(#bg)"/>
	<rect x="0" y="0" width="14" height="${H}" fill="#d41111"/>

	<!-- Tag pill -->
	<rect x="80" y="250" rx="22" ry="22" width="372" height="44" fill="#d41111"/>
	<text x="100" y="280" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#ffffff" letter-spacing="1">MARKETING BEHAWIORALNY</text>

	<!-- Headline -->
	<text x="78" y="370" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" fill="#ffffff">Psychologia komunikacji</text>
	<text x="78" y="442" font-family="Arial, Helvetica, sans-serif" font-size="62" font-weight="800" fill="#ffffff">marketingowej</text>

	<!-- Subline -->
	<text x="80" y="500" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="500" fill="#e0b8b8">Studia podyplomowe · Politechnika Wrocławska</text>

	<!-- Domain -->
	<text x="80" y="575" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#9a7a7a">psychologiamarketingu.edu.pl</text>
</svg>
`;

await sharp(Buffer.from(svg))
	.composite([{ input: logo, top: 70, left: 78 }])
	.png()
	.toFile(resolve(pub, "og-default.png"));

console.log(`OG image written: public/og-default.png (logo ${logoMeta.width}×${logoMeta.height})`);
