# speeddial
Speed dial button inspired by Google Material design

[![devDependencies](http://img.shields.io/david/dev/iliketomatoes/speeddial.svg?style=flat)](https://david-dm.org/iliketomatoes/speeddial#info=devDependencies&view=table)
[![Code Climate](https://codeclimate.com/github/iliketomatoes/speeddial/badges/gpa.svg)](https://codeclimate.com/github/iliketomatoes/speeddial)

## Getting started

Download this plugin from the Github repository or install it through this command:

```
$ npm install speeddial --save
```

This library is also available through Bower package manager:

```
$ bower install speeddial --save
```

## Required assets

Import the CSS:

```html
<link rel="stylesheet" href="path/to/dist/css/speeddial.css">
```

Import the Javascript:

```html
<script src="path/to/dist/speeddial.js"></script>
```

This Javascript library is UMD compliant, so you can consume it even like this:

```html
<script>
	var speeddial = require('speeddial');
</script>
```

## Required markup

```html
<div id="my-speed-dial" class="speed-dial">
	<ul class="speed-dial__list">
		<li>
			<button class="speed-dial__option">B</button>
		</li>
		<li>
			<button class="speed-dial__option">C</button>
		</li>
		<li>
			<button class="speed-dial__option">D</button>
		</li>
	</ul>
	<button class="speed-dial__btn">A</button>
</div>
```

## Start it up

The selector passed as first parameter must be the container's selector and must
be unique:

```javascript
var sd = speeddial('#my-speed-dial'[,options]);
```

The second optional parameter is a literal object meant to override
the default settings:

```javascript
// Default settings
var options = {

    // The actual speed dial button's default class
    button: '.speed-dial__btn',

    // List of options' default class
    list: '.speed-dial__list',

    // Default direction
	// Available directions are: up, down, left, right
    direction: 'up'
};
```

## Available CSS modifiers

To customize the appearence there are some built-in CSS modifier classes:

```CSS
/* If you want a blue button */
.speed-dial--blue

/* If you want a pink button */
.speed-dial--pink

/* If you want a small button */
.speed-dial--small

/* If you want to add cool shadows */
.speed-dial--material

/* If you want to toggle the button state when the list of options is open */
.speed-dial--toggle
```
You can dive into **./scss/speeddial.scss** and change the modifiers to meet
your needs. Then compile it by running one of the following command:

`$ npm run watch-css`

`$ npm run build-css`

Those classes have to be added to the container. That is:

```html
<div id="my-speed-dial" class="speed-dial < PUT MODIFIERS HERE >">
	<ul class="speed-dial__list">
		...
	</ul>
	<button class="speed-dial__btn">A</button>
</div>
```

## API

```javascript
	var sd = speeddial('#my-speed-dial'[,options]);

	// Returns the container
	sd.getContainer();

	// Returns the button which triggers the list to open/close
	sd.getButton();

	// Returns the list of options
	sd.getList();

	// Returns the direction which the list is opening to
	sd.getDirection();

	/**
	* Set the direction, the parameter is a string among:
	* 'up', 'down', 'right', 'left'
	*/
	sd.setDirection('DIRECTION');

	// Opens the list of options
	sd.open();

	// Close the list of options
	sd.close();

```

## License

### MIT
