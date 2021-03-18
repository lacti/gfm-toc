export default function isTocFile(
  tocFileName: string,
  eachFile: string
): boolean {
  return eachFile.endsWith(tocFileName);
}
