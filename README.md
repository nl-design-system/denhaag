# denhaag-component-library

> A library of React components for the municipality of The Hague

[![NPM](https://img.shields.io/npm/v/denhaag-component-library.svg)](https://www.npmjs.com/package/denhaag-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install trigger ci

## 🚀 Getting started
### Install component library

```bash
yarn add @gemeente-denhaag/denhaag-component-library
```

### Usage

```tsx
import React, { Component } from "react";

import MyComponent from 'denhaag-component-library'
import 'denhaag-component-library/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />;
  }
}
```

### Develop

#### Setting up the development environment

1. Clone this repository
2. Install npm go [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for instructions. Make sure to install version `14` or higher.
3. Install yarn go [here](https://yarnpkg.com/getting-started/install) for instructions. Make sure to install version `1.22` or higher.
4. Run the following command to install all development dependencies:

```bash
yarn install
```

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
  "author": "Municipality of The Hague",
  "license": "EUPL-1.2",
  "repository": {
    "type": "git",
    "url": "https://github.com/Gemeente-DenHaag/denhaag-component-library.git",
    "directory": "{path/to/component}"
  },
  "bugs": "https://github.com/Gemeente-DenHaag/denhaag-component-library/issues",
  "dependencies": {
    "@material-ui/core": "^4.11.0"
  }
}
```

_Don't forget to add all needed dependencies for your component to the dependencies section of the component's `package.json`._

We will also need to add our component to the meta-package which installs all of the Den Haag react components in the same category. We can do this by adding it to the list of dependencies.
The file we need is located here: `src/components/[CATEGORY]/package.json`\
An entry should be structured like this:

```json
"@gemeente-denhaag/{component_name}": "^0.1.0"
```

Similarly, if you create a new category we need to add the category package to the list of dependencies in the meta-package which installs all of the Den Haag react components.
This file is located here: `src/components/package.json`

An entry should be structured in the same way as above.

## ❗ Reporting issues
Our public issue tracker is located [here](https://github.com/Gemeente-DenHaag/denhaag-component-library/issues).
Before reporting an issue make sure to check if a similar issue already exists.
When reporting an issue give detailed information about the issue and how to reproduce it if applicable.
