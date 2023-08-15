# Plugin

I've built this template slightly differently than the skpm templates, of note:

- Plugin source, assets, and sketch-assets are stored in this `Plugin` folder
- The webview is stored in the `UI` folder at the root level

## Src

Inside the source folder, there are three things:

- `manifest` for building out the menu and plugin commands
- `my-command.js` for simple (menu item) and action driven plugins
- `webview-command.js` for displaying the webview

## UI

In the root folder of the plugin, the UI folder has a `webview.js` file that works in conjunction with `webview-command.js`. Maybe one day in the future I'll make something fancier to support this all better.