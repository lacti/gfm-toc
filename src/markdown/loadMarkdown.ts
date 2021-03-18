import * as fs from "fs";
import * as mdast from "mdast";

import fromMarkdown from "mdast-util-from-markdown";
import gfm from "mdast-util-gfm";
import syntax from "micromark-extension-gfm";

export default function loadMarkdown(inputFile: string): mdast.Root {
  const md = fs.readFileSync(inputFile, "utf8");
  return fromMarkdown(md, {
    extensions: [syntax()],
    mdastExtensions: [gfm.fromMarkdown],
  });
}
