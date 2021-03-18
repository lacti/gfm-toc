import countCharacter from "../utils/countCharacter";
import isReadme from "../markdown/isReadme";

export default function calculateDocumentLevel(documentPath: string): number {
  const documentLevel = countCharacter(documentPath, "/");
  return isReadme(documentPath)
    ? Math.max(0, documentLevel - 1)
    : documentLevel;
}
