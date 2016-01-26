# protocore-webpack-edition

Protocore-webpack-edition is special Webpack implementation edition of Protocore project.

## Supports
* Node.js v0.10.x or above
* Node.js v4.0 new release
* iojs 2.3.x or above

## List of npm/libs etc. that are used to build it

* jQuery - Used for DOM manipulation.
* Webpack - Used for module loader & bundler.
* Hasher & Crossroads - Used for application routing
* Signals - Used for pubsub events.
* Express - Used for local HTTP-server static serving.
* Mocha & Chai - Used for unit testing
* JSHint, CSSLint, JSCS, LESS, JSON & Handlebars templating

## Installation

Assuming that Git is already installed & running:
```
git clone https://github.com/Protocore-UI/protocore-webpack-edition.git
```

Assuming that Node.js or io.js is already installed & running,

Install dependencies:
```
npm install
```

Generate bundle file: (First command after installing dependencies)
```
webpack -p
```

To start the development server:
```
node server.js

OR

iojs server.js

```
or
```
NODE_ENV=development node server.js
```
or
```
npm start
```

## Protocore Experiments

[Protocore](https://github.com/Protocore-UI/Protocore) is an open source walking application skeleton for a typical unstructured JavaScript/jQuery web apps. You can use it to quickly bootstrap your unstructured JavaScript/jQuery web application projects.

[protocore-es6-edition](https://github.com/Protocore-UI/protocore-es6-edition) is a special ECMAScript 6 implementation edition of Protocore project.

[generator-protocore](https://github.com/Protocore-UI/generator-protocore) is a Yeoman generator for Protocore. The tool will help to generate walking application skeleton for a typical unstructured JavaScript/jQuery web apps.

[Protocore-cli](https://github.com/Protocore-UI/protocore-cli) is a command line generator for Protocore. This tool will help to generate a walking application skeleton for a typical unstructured JavaScript/jQuery web apps.

## Server layer

The server side codebase resides in the ```server.js``` and ```config.js``` files. By default, the server layer is written in JavaScript (Node.js with Express 4.x) which can be configured and flexible to work with any server side scripting language like Java, PHP, ASP.NET or others. As client and server layer are seperate entity.

## Client layer

The client side codebase resides in the ```src``` folder. This folder contains following subfolders.

```
/src
	+-- /stylesheets
		+--/css
		+--/less
			+--/common
			+--/base
			+--/layout
			+--/modules
			+--/state
			+--/theme
	+-- /assets
		+--/fonts
		+--/images
	+-- /apps
		+--/controller
		+--/models
		+--/views
		+--/router
		+--/templates
```

## Stylesheet layer

The codebase comes with LESS setup with a ```Scalable and Modular Architecture for CSS (SMACSS)``` approach.  SMACSS is a way to examine your design process and as a way to fit those rigid frameworks into a flexible thought process. It is an attempt to document a consistent approach to site development when using CSS.

## License

The MIT License (MIT)

Copyright (c) 2016 Ashwin Hegde
