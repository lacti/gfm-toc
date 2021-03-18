export default function stripSlash(input: string): string {
  let start = 0;
  for (; start < input.length; ++start) {
    if (input[start] !== "/") {
      break;
    }
  }

  let end = input.length - 1;
  for (; end > start; --end) {
    if (input[end] !== "/") {
      break;
    }
  }
  return input.substring(start, end + 1);
}
