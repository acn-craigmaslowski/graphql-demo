import fs from "fs";
import path from "path";

export function loadJsonSchema(file: string) {
  const absolutePath = path.resolve(__dirname, file);
  const data = fs.readFileSync(absolutePath, "utf-8");
  return JSON.parse(data);
}
