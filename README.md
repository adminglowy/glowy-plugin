[![CircleCI](https://circleci.com/gh/glowy-dev/glowy-plugin/tree/master.svg?style=svg)](https://circleci.com/gh/glowy-dev/glowy-plugin/tree/master)

# Glowy Plugin

Add Glowy to your website using our plugin

## Installation

### Script tag

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@glowy/plugin@latest/dist/glowy-plugin.min.js"></script>
```

### NPM

```bash
$ npm i -S @glowy/plugin
```

```javascript
import glowy from 'glowy-plugin'
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
data-provider | `uuid` | `true` |  | The Provider ID of which Glowy will retrieve merchant information
data-media  | `desktop` or  `mobile` | `false` | `desktop` | The media in which the frame is being inserted
data-screen | `list` or `my-appointments` | `false` | `list` | The screen which the frame will start at
data-token | `string` | `false` | | The authentication token to identify the user
