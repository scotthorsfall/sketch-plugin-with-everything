# {{ name }}

A template of templates. This template combines the [skpm](), [with-webview](), and [with-actions]() templates from the [skpm]() directory.

I've made it specifically for myself, if you're not me, you'll need to replace information in `package.json` and `manifest.json`.

## Installation

- [Download](../../releases/latest/download/{{ slug }}.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on {{ slug }}.sketchplugin

## Development

### Prerequisites

- Node.js 16 (via NVM): [https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)
	- NOTE: Node versions 17+ are incompatible with some of the required packages and you will receive errors.
- SKPM: Sketch plugin package manager [https://github.com/skpm/skpm](https://github.com/skpm/skpm)
- Sketch: [https://www.sketch.com](https://www.sketch.com)

### Running from Source

NOTE: Ensure that you have uninstalled the non-development version of the plugin from Sketch first.

### Usage

Install the dependencies

```bash
npm install
```

Once the installation is done, you can run some commands inside the project folder:

```bash
npm run build
```

To watch for changes:

```bash
npm run watch
```

## Resources

### Dev Tools Sketch Plugin

[https://github.com/inarol/sketch-dev-tools/releases/tag/v0.9.10](https://github.com/inarol/sketch-dev-tools/releases/tag/v0.9.10)

This plugin will allow you to view JavaScript logging and inspect Sketch Canvas elements. (Linked build is compatible with Apple Silicon.)


## Troubleshooting

### I get the following error when using NPM command

```
node:internal/crypto/hash:67
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^
Error: error:0308010C:digital envelope routines::unsupported
```

**FIX** — This is most likely due to running too new of a version of Node.js. You **must** use Node.js 16. Alternatively, preface any npm command with the following:

```
NODE_OPTIONS=--openssl-legacy-provider 
```

so that commands look like this and run properly:

```
NODE_OPTIONS=--openssl-legacy-provider npm run watch
```