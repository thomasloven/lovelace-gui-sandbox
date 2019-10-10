gui-sandbox
===========

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

This card adds a button that lets you play around with the amazing lovelace GUI editors even if you're using [YAML mode](https://www.home-assistant.io/lovelace/yaml-mode/).

**Note that you can't save your changes. Instead, switch to the GUI YAML editor and copy the code into your normal lovelace configuration.**

![TdQACew7YI](https://user-images.githubusercontent.com/1299821/66561504-e6e69a80-eb59-11e9-971c-12ed0d1b1baa.gif)

# Installation instructions

For installation instructions [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).

The recommended type of this plugin is: `module`.

```yaml
resources:
  url: /local/gui-sandbox.js
  type: module
```

# Usage instructions

```yaml
type: custom:gui-sandbox
```

Don't try to save.

---
<a href="https://www.buymeacoffee.com/uqD6KHCdJ" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
