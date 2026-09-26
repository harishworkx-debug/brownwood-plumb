import fs from "fs";
import path from "path";

const srcDir = path.join(process.cwd(), "src");

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  if (content.includes("(855) 321-3189") || content.includes("855-321-3189") || content.includes("+18553213189")) {
    content = content.replace(/\(325\) 728-4690/g, "(855) 321-3189");
    content = content.replace(/855-321-3189/g, "325-641-2662");
    content = content.replace(/\+18553213189/g, "+18553213189");
    fs.writeFileSync(filePath, content, "utf-8");
    console.log(`Updated phone number in ${path.basename(filePath)}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith(".ts") || filePath.endsWith(".tsx")) {
      processFile(filePath);
    }
  }
}

walk(srcDir);
console.log("Done");
