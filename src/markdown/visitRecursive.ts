import * as mdast from "mdast";
import * as unist from "unist";

export default function visitRecursive<T extends unist.Node, R>(
  start: unist.Node,
  types: string[],
  visit: (target: T) => R
): R[] {
  const result: R[] = [];
  function visitNode(node: unist.Node) {
    if (types.includes(node.type)) {
      result.push(visit(node as T));
    } else if ("children" in node) {
      visitChildren(node as mdast.Parent);
    }
  }
  function visitChildren({ children }: mdast.Parent) {
    for (const child of children) {
      visitNode(child as mdast.Parent);
    }
  }
  visitNode(start);
  return result;
}
