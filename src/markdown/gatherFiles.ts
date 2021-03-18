import * as fs from "fs";
import * as path from "path";

import isReadme from "./isReadme";

export default function gatherFiles(
  inputDirectory: string,
  filter: (fileName: string) => boolean = (fileName) => /\.md$/i.test(fileName)
): string[] {
  const files: string[] = [];
  const subDirectories: string[] = [];
  for (const childFile of fs
    .readdirSync(inputDirectory)
    .sort((a, b) => a.localeCompare(b))) {
    if (childFile.startsWith(".")) {
      continue;
    }
    const childFilePath = path.join(inputDirectory, childFile);
    const stat = fs.lstatSync(childFilePath);
    if (stat.isFile()) {
      if (filter(childFile)) {
        // README.md should be the first.
        if (isReadme(childFile)) {
          files.unshift(childFilePath);
        } else {
          files.push(childFilePath);
        }
      }
    } else if (stat.isDirectory()) {
      subDirectories.push(childFilePath);
    }
  }
  for (const subDir of subDirectories) {
    files.push(...gatherFiles(subDir, filter));
  }
  return files;
}

if (require.main === module) {
  console.info(gatherFiles(process.argv[2] ?? "."));
}
