import fs from "fs";
import path from "path";

const routesDir = path.join(process.cwd(), "src/routes");

const titleMap = {
  "emergency-plumbing-brownwood-tx.tsx": "Emergency Plumber in Brownwood, TX | M. Webb Plumbing Co.",
  "residential-plumbing-brownwood-tx.tsx": "Residential Plumbing in Brownwood, TX | M. Webb Plumbing Co.",
  "water-heaters-brownwood-tx.tsx": "Water Heater Repair in Brownwood, TX | M. Webb Plumbing Co.",
  "drain-and-sewer-brownwood-tx.tsx": "Drain & Sewer Services in Brownwood, TX | M. Webb Plumbing Co.",
  "piping-and-leaks-brownwood-tx.tsx": "Leak Detection & Pipe Repair in Brownwood, TX | M. Webb Plumbing Co.",
  "kitchen-and-bathroom-brownwood-tx.tsx": "Kitchen & Bathroom Plumbing in Brownwood, TX | M. Webb Plumbing Co.",
  "gas-line-repair-brownwood-tx.tsx": "Gas Line Repair in Brownwood, TX | M. Webb Plumbing Co.",
  "water-softener-brownwood-tx.tsx": "Water Softeners in Brownwood, TX | M. Webb Plumbing Co.",
  "plumbing-inspections-brownwood-tx.tsx": "Plumbing Inspections in Brownwood, TX | M. Webb Plumbing Co.",
};

function processFile(filePath) {
  const filename = path.basename(filePath);
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  if (titleMap[filename]) {
    const newTitle = titleMap[filename];
    // Replace old title in meta tags. 
    // Usually it looks like: { title: "..." }
    content = content.replace(/\{ title: ".*?" \}/g, `{ title: "${newTitle}" }`);
    content = content.replace(/\{ property: "og:title", content: ".*?" \}/g, `{ property: "og:title", content: "${newTitle}" }`);
    
    // Replace H1 (title prop in ServicePageShell)
    // E.g. title="24/7 Emergency Plumbing in Brownwood"
    // Let's just make it match the new Title, or close to it without the branding
    const h1Title = newTitle.split(" | ")[0];
    content = content.replace(/title=".*?"/g, `title="${h1Title}"`);
    modified = true;
  }

  // Location pages
  if (filename.startsWith("plumber-") && filename.endsWith("-tx.tsx") && !titleMap[filename]) {
    // Current is like: const title = `Plumber in ${area.name} | Emergency & Residential | M. Webb`;
    content = content.replace(/const title = `Plumber in \$\{area\.name\} \| Emergency & Residential \| M\. Webb`;/, 'const title = `Plumber in ${area.name} | M. Webb Plumbing Co.`;');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated title for ${filename}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith(".tsx")) {
      processFile(filePath);
    }
  }
}

walk(routesDir);
console.log("Done");
