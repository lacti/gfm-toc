export default function countCharacter(input: string, ch: string): number {
  let count = 0;
  for (let index = 0; index < input.length; ++index) {
    if (input[index] === ch) {
      ++count;
    }
  }
  return count;
}
