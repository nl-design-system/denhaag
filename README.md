# @gemeente-denhaag/components-react

> A library of React components for the municipality of The Hague

![npm](https://img.shields.io/npm/v/@gemeente-denhaag/components-react?logo=npm&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/nl-design-system/denhaag/Build%20and%20deploy%20Storybook/main?logo=github&style=flat-square)

## 🥅 Goals of this codebase

The Municipality of The Hague React UI-components library is constructed, so that re-use by other government organisations is possible with minimal effort. The UI-components are available in a basic styling and through the use of Design Tokens it is possible to give the components your own (corporate) identity. Within the Municipality of The Hague the components are used for:

- Corporate website (Wordpress - Open Web Concept)
- Satelite websites (Wordpress)
- OpenSource eForms (OpenFormulieren - Dimpact)
- Portal (MijnDenHaag - collaboration with Amsterdam and Dimpact)

## 🚀 Getting started

### Install component library

```bash
yarn add @gemeente-denhaag/components-react
```

### Usage

```tsx
import React, { Component } from "react";

import { MyComponent } from "@gemeente-denhaag/components-react";

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

### Develop

#### Setting up the development environment

1. Clone this repository
2. Install npm go [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for instructions. Make sure to install version `16.13.0` or higher.
3. Install yarn go [here](https://yarnpkg.com/getting-started/install) for instructions. Make sure to install version `1.22.17` or higher.
4. Run the following command to install all development dependencies:

```bash
yarn install --frozen-lockfile
```

#### Code style

Be sure to install IDE plugins for ESlint, Prettier, JSONLint and Stylelint if available.

#### Folder structure

The project folders are structured in the following way:
The `src` folder houses both our `components` and our storybook `stories`, these are both in their own folders.
Our components are sorted into several categories, where each category has its own parent folder.
All of our components are their own package and managed with lerna, docs are available [here](https://lerna.js.org/).
Similarly, each category is its own package managed with lerna.

#### Adding components

##### Storybook

In order to test components we use storybook.\
To run storybook locally we start it with the following command:

```bash
yarn storybook
```

We don't need to re-run the command over-and-over because storybook should detect changed files ✨automagically✨ and refresh the displayed components.

##### Creating a new package for a new component

In order to create a new lerna package we need to create a package.json file for it inside it's folder.
Start by filling it with the following information:

```json
{
  "name": "@gemeente-denhaag/{component_name}",
  "version": "0.1.0",
  "description": "A short description of the component",
  "bugs": "https://github.com/nl-design-system/denhaag/issues",
  "author": "Municipality of The Hague",
  "license": "EUPL-1.2",
  "exports": "./dist/index.js",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": ["dist"],
  "repository": {
    "type": "git",
    "url": "https://github.com/nl-design-system/denhaag.git",
    "directory": "{path/to/component}"
  },
  "scripts": {
    "build": "rollup -c ../../rollup.config.js",
    "clean": "yarn rimraf dist tsconfig.tsbuildinfo"
  },
  "dependencies": {}
}
```

_Don't forget to add all needed dependencies for your component to the dependencies section of the component's `package.json`._

We will also need to add our component to the meta-package which installs all of the Den Haag react components in the same category. We can do this by adding it to the list of dependencies.
The file we need is located here: `components/[CATEGORY]/package.json`\
An entry should be structured like this:

```json
"@gemeente-denhaag/{component_name}": "0.1.0"
```

Similarly, if you create a new category we need to add the category package to the list of dependencies in the meta-package which installs all of the Den Haag react components.
This file is located here: `components/package.json`

An entry should be structured in the same way as above.

## Cooperation with NL Design System

Certain Components available in this repository may become part of the NL Design System component library. When you contribute to this project you allow your contributions to be made a part of the NL Design System component library. The NL Design System project maintainers decide which components will be included in their component library.

## ❗ Reporting issues

Our public issue tracker is located [here](https://github.com/nl-design-system/denhaag/issues).
Before reporting an issue make sure to check if a similar issue already exists.
When reporting an issue give detailed information about the issue and how to reproduce it if applicable.

## Special thanks

[Chromatic](https://www.chromatic.com) supports us with a free starter plan for open source.
