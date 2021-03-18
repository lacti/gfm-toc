import * as path from "path";

export default function isReadme(file: string): boolean {
  return /readme.md/i.test(path.basename(file));
}
