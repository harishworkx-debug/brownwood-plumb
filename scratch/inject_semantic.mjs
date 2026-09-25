import fs from "fs";
import path from "path";

const routesDir = path.join(process.cwd(), "src/routes");

const semanticAdditions = {
  "emergency-plumbing-brownwood-tx.tsx": `
            <p className="mt-4">Whether you are dealing with a burst pipe, an emergency water leak, or a severe sewer backup, our 24 hour emergency plumber team is ready to respond. We provide urgent plumbing repair and emergency drain service to mitigate damage and restore your plumbing system quickly.</p>`,
            
  "residential-plumbing-brownwood-tx.tsx": `
            <p className="mt-4">Our residential plumbing services cover everything from routine toilet repair and faucet installation to complex residential pipe repair and house plumbing repair. We handle all aspects of home plumbing services, including kitchen plumbing, bathroom plumbing, water pressure adjustments, and resolving leaking pipes or clogged drains for homeowners.</p>`,

  "water-heaters-brownwood-tx.tsx": `
            <p className="mt-4">From hot water heater repair for traditional units to tankless water heater installation, our team provides comprehensive water heater service. If you have no hot water, a water heater not heating, or a leaking water heater, we can quickly diagnose and perform the necessary water heater replacement or maintenance.</p>`,

  "drain-and-sewer-brownwood-tx.tsx": `
            <p className="mt-4">We offer professional drain cleaning in Brownwood to clear clogged sinks, clogged toilets, and slow drains. For more severe blockages, our sewer drain cleaning, sewer camera inspection, and sewer line repair services can resolve any main drain cleaning or sewage backup repair needs efficiently.</p>`,

  "piping-and-leaks-brownwood-tx.tsx": `
            <p className="mt-4">Our water leak detection services can pinpoint hidden water leaks and slab leaks before they cause major damage. Once located, we provide expert burst pipe repair, water line repair, and complete pipe replacement in Brownwood to secure your home's water supply lines.</p>`,

  "gas-line-repair-brownwood-tx.tsx": `
            <p className="mt-4">Safety is our top priority when it comes to residential gas line repair and gas pipe repair. If you suspect a gas leak, our certified professionals can perform a thorough gas line inspection, gas appliance line repair, and new gas line installation.</p>`,

  "kitchen-and-bathroom-brownwood-tx.tsx": `
            <p className="mt-4">We specialize in comprehensive kitchen and bathroom plumbing, ensuring your plumbing fixtures operate flawlessly. Our services include sink repair, toilet installation, bathtub plumbing, shower plumbing, and garbage disposal repair for any home renovation or urgent fix.</p>`,

  "water-softener-brownwood-tx.tsx": `
            <p className="mt-4">Protect your plumbing system from hard water plumbing issues with a professional water softener installation. We also provide water softener repair, residential water treatment, and whole-home water filtration system solutions to improve your water quality.</p>`,

  "plumbing-inspections-brownwood-tx.tsx": `
            <p className="mt-4">A thorough residential plumbing inspection can save you thousands in future repairs. Whether you need a plumbing inspection before buying a house, a routine plumbing system inspection, or a specific pipe inspection to check for vulnerabilities, we provide detailed and honest assessments.</p>`,
};

function processFile(filePath) {
  const filename = path.basename(filePath);
  if (!semanticAdditions[filename]) return;

  let content = fs.readFileSync(filePath, "utf-8");
  
  // Use a regex to find the closing tags of the body prop
  const bodyEndRegex = /<\/p>\s*<\/>/g;
  
  if (bodyEndRegex.test(content)) {
    content = content.replace(bodyEndRegex, `</p>\n${semanticAdditions[filename]}\n          </>`);
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Injected semantic content into ${filename}`);
  } else {
    console.log(`Could not find insertion point in ${filename}`);
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
