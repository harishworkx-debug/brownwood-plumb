import fs from "fs";
import path from "path";

const srcDir = path.join(process.cwd(), "src");

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let updated = false;
  if (content.includes("(855) 321-3189") || content.includes("+18553213189") || content.includes("325-641-2662") || content.includes("(325) 728-4690")) {
    content = content.replace(/\(855\) 321-3189/g, "(325) 208-2942");
    content = content.replace(/\+18553213189/g, "+13252082942");
    content = content.replace(/\(325\) 728-4690/g, "(325) 208-2942");
    content = content.replace(/325-641-2662/g, "(325) 208-2942");
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
