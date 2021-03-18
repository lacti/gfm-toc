export default function convertToMarkdownLink(input: string): string {
  return (
    "#" +
    input
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/<[^>]+>/g, "")
      .replace(/[()]/g, "")
  );
}
