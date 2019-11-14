[![CircleCI](https://circleci.com/gh/glowy-dev/glowy-plugin/tree/master.svg?style=svg)](https://circleci.com/gh/glowy-dev/glowy-plugin/tree/master) [![Bundlephobia](https://badgen.net/bundlephobia/minzip/@glowy/plugin)](https://bundlephobia.com/result?p=@glowy/plugin) [![JSDelivr](https://badgen.net/jsdelivr/v/npm/@glowy/plugin)](https://cdn.jsdelivr.net/npm/@glowy/plugin@latest/dist/glowy-plugin.min.js)

# Glowy Plugin

Add Glowy to your website using our plugin

## Installation

### Script tag

#### Via jsDelivr
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@glowy/plugin@latest/dist/glowy-plugin.min.js" async defer></script>
```

#### Via unpkg
```html
<script type="text/javascript" src="https://unpkg.com/@glowy/plugin/dist/glowy-plugin.min.js" async defer></script>
```

### NPM

```bash
$ npm i -S @glowy/plugin
```

```javascript
import glowy from '@glowy/plugin'
```

## Getting started

Once Glowy Plugin is installed it will detect the presence of any Glowy Frame `div` in the DOM so you just have to add the `div` wherever you want the Glowy Frame to appear.

```html
<div class="glowy-frame" [option-attributes]></div>
```

### Option attributes

The option attributes are [data-* attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) of which values will be passed to the Glowy Frame.

The possible attributes are:

Attribute | Type | Required? | Default | Description
--- | --- | --- | --- | ---
data-provider | `string (uuid)` | `true` |  | The Provider ID of which Glowy will retrieve merchant information
data-media  | `desktop` or  `mobile` | `false` | `desktop` | The media in which the frame is being inserted
data-screen | `list` or `my-appointments` | `false` | `list` | The screen which the frame will start at
data-token | `string (uuid)` | `true` | | The authentication token to identify the user
data-back-button-label | `string` | `false` | `Início` | The back button label
data-back-button-url | `string (url)` | `false` | | The back button URL
data-scroll-offset | `number` | `false` | | Offset difference when scroll automatically
