import fs from "fs";
import path from "path";

const routesDir = path.join(process.cwd(), "src/routes");

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  // For location pages:
  if (content.includes("plumbing connection service")) {
    content = content.replace(/plumbing connection service/g, "plumbing company");
    modified = true;
  }
  
  if (content.includes("connection services")) {
    content = content.replace(/connection services/g, "services");
    modified = true;
  }
  
  if (content.includes("connection service")) {
    content = content.replace(/connection service/g, "services");
    modified = true;
  }
  
  if (content.includes("connecting with local residential plumbing providers")) {
    content = content.replace(/connecting with local residential plumbing providers/g, "providing residential plumbing services to homeowners");
    modified = true;
  }

  // emergency plumbing page
  if (content.includes("we can connect you with plumbers")) {
    content = content.replace(/we can connect you with plumbers/g, "we provide plumbers");
    modified = true;
  }
  if (content.includes("Get connected with true 24-hour emergency plumbing service")) {
    content = content.replace(/Get connected with true 24-hour emergency plumbing service/g, "Call our true 24-hour emergency plumbing service");
    modified = true;
  }
  
  // about page
  if (content.includes("About Our Connection Service")) {
    content = content.replace(/About Our Connection Service/g, "About M. Webb Plumbing Co.");
    modified = true;
  }
  if (content.includes("Connecting Brownwood to trusted plumbers")) {
    content = content.replace(/Connecting Brownwood to trusted plumbers/g, "Trusted Brownwood plumbers");
    modified = true;
  }
  if (content.includes("Connecting you with honest and dependable plumbing services")) {
    content = content.replace(/Connecting you with honest and dependable plumbing services/g, "Providing you with honest and dependable plumbing services");
    modified = true;
  }
  if (content.includes("is a dedicated connection service")) {
    content = content.replace(/is a dedicated connection service/g, "is a dedicated plumbing company");
    modified = true;
  }
  if (content.includes("We help homeowners across Brown County find")) {
    content = content.replace(/We help homeowners across Brown County find/g, "We provide homeowners across Brown County with");
    modified = true;
  }
  if (content.includes("When you use our service, you're getting connected to local providers who")) {
    content = content.replace(/When you use our service, you're getting connected to local providers who/g, "When you use our service, you're hiring local professionals who");
    modified = true;
  }
  if (content.includes("Get connected with professionals who tell you")) {
    content = content.replace(/Get connected with professionals who tell you/g, "Work with professionals who tell you");
    modified = true;
  }
  if (content.includes("a free service connecting Brownwood, TX homeowners with reliable residential plumbers")) {
    content = content.replace(/a free service connecting Brownwood, TX homeowners with reliable residential plumbers/g, "a local plumbing company providing Brownwood, TX homeowners with reliable residential plumbing");
    modified = true;
  }

  // contact page
  if (content.includes("Contact M. Webb Plumbing to connect with residential and emergency plumbing services")) {
    content = content.replace(/Contact M. Webb Plumbing to connect with residential and emergency plumbing services/g, "Contact M. Webb Plumbing for residential and emergency plumbing services");
    modified = true;
  }

  // terms of service
  if (content.includes("assist homeowners in connecting with local residential plumbing providers")) {
    content = content.replace(/assist homeowners in connecting with local residential plumbing providers/g, "provide homeowners with residential plumbing services");
    modified = true;
  }
  if (content.includes("provided for informational purposes as a connection service.")) {
    content = content.replace(/provided for informational purposes as a connection service\./g, "the official website of M. Webb Plumbing Co.");
    modified = true;
  }
  if (content.includes("All contractors/providers are independent and this site does not warrant or guarantee any work performed.")) {
    content = content.replace(/All contractors\/providers are independent and this site does not warrant or guarantee any work performed\./g, "All work is performed by our licensed professionals.");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated ${path.basename(filePath)}`);
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
