import * as mdast from "mdast";
import * as path from "path";

import gatherFiles from "./markdown/gatherFiles";
import generateListLinkItem from "./toc/generateListLinkItem";
import isTocFile from "./toc/isTocFile";
import loadMarkdown from "./markdown/loadMarkdown";
import visitRecursive from "./markdown/visitRecursive";
import writeTocFile from "./toc/writeTocFile";

function main({
  inputDirectory,
  tocFileName = "TOC.md",
}: {
  inputDirectory: string;
  tocFileName?: string;
}) {
  writeTocFile({
    tocItems: gatherFiles(inputDirectory).flatMap((eachFile) =>
      isTocFile(tocFileName, eachFile)
        ? []
        : visitRecursive(
            loadMarkdown(eachFile),
            ["heading"],
            (heading: mdast.Heading) =>
              generateListLinkItem(inputDirectory, eachFile, heading)
          )
    ),
    outputDirectory: inputDirectory,
    fileName: tocFileName,
  });
}

if (require.main === module) {
  if (!process.argv[2]) {
    console.info(`${process.argv[0]} ${process.argv[1]} input-directory`);
  } else {
    main({ inputDirectory: path.resolve(process.argv[2]) });
  }
}
