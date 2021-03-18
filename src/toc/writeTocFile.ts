import * as fs from "fs";
import * as path from "path";

export default function writeTocFile({
  tocItems,
  outputDirectory,
  fileName,
  title = `# Table of contents\n`,
}: {
  tocItems: string[];
  outputDirectory: string;
  fileName: string;
  title?: string;
}): void {
  fs.writeFileSync(
    path.join(outputDirectory, fileName),
    title + "\n" + tocItems.join("\n") + "\n",
    "utf8"
  );
}
