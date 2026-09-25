import fs from "fs";
import path from "path";

const srcDir = path.join(process.cwd(), "src");

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  if (content.includes("(325) 728-4690") || content.includes("325-728-4690") || content.includes("+13257284690")) {
    content = content.replace(/\(325\) 728-4690/g, "(325) 728-4690");
    content = content.replace(/325-728-4690/g, "325-641-2662");
    content = content.replace(/\+13257284690/g, "+13257284690");
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
