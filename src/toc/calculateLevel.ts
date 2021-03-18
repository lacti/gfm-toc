import * as mdast from "mdast";

import calculateDocumentLevel from "./calculateDocumentLevel";

export default function calculateLevel(
  documentPath: string,
  heading: mdast.Heading
): number {
  return calculateDocumentLevel(documentPath) + heading.depth;
}
