# GitHub markdown TOC generator

Generate `TOC.md` file from all Markdown files in repository.

## Usage

```bash
gfm-toc target-dir
```

## Installation

```bash
npm i -g gfm-toc
# Run gfm-toc
```

Or build from source.

```bash
npm
npm run build
# ./cli.js target-dir
```

## Example

See [`example`](example) directory. The input is like this,

```bash
.
├── ANOTHER.md
├── README.md
└── subdir
    ├── FRIEND.md
    └── README.md
```

then generate `TOC.md` like that,

```markdown
# Table of contents

- [Top level](README.md#top-level)
  - [Second level](README.md#second-level)
- [Another file](ANOTHER.md#another-file)
  - [Another second](ANOTHER.md#another-second)
- [Subdirectory](subdir/README.md#subdirectory)
  - [Sub secondary](subdir/README.md#sub-secondary)
  - [Friend](subdir/FRIEND.md#friend)
    - [Good to see you](subdir/FRIEND.md#good-to-see-you)
```

when executing this command.

```bash
gfm-toc example
```

## License

MIT
