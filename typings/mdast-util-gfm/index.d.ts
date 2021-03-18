declare module "mdast-util-gfm" {
  import type { MdastExtension } from "mdast-util-from-markdown";
  export const fromMarkdown: MdastExtension;
}
