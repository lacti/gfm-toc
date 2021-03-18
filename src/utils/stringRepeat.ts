export default function stringRepeat(input: string, count: number): string {
  return Array.from({ length: count }, () => input).join("");
}
