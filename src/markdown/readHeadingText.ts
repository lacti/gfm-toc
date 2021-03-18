import * as mdast from "mdast";

import visitRecursive from "./visitRecursive";

export default function readHeadingText(heading: mdast.Heading): string {
  return visitRecursive(
    heading,
    ["text", "code", "inlineCode", "yaml", "html"],
    (textNode) => (textNode as mdast.Literal).value
  )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
