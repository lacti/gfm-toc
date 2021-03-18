import * as mdast from "mdast";

import calculateLevel from "./calculateLevel";
import convertToMarkdownLink from "../markdown/convertToMarkdownLink";
import readHeadingText from "../markdown/readHeadingText";
import stringRepeat from "../utils/stringRepeat";
import stripSlash from "../utils/stripSlash";

const listBullet = "-";

export default function generateListLinkItem(
  inputDirectory: string,
  eachFile: string,
  heading: mdast.Heading
): string {
  const text = readHeadingText(heading);
  const documentPath = stripSlash(eachFile.substring(inputDirectory.length));
  const level = calculateLevel(documentPath, heading);
  return (
    stringRepeat(" ", Math.max(0, level - 1) * 2) +
    `${listBullet} [${text}](${documentPath}${convertToMarkdownLink(text)})`
  );
}
