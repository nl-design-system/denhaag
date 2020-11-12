# nlds-react-components

> A library of React components for the Design System of The Netherlands

[![NPM](https://img.shields.io/npm/v/nlds-react-components.svg)](https://www.npmjs.com/package/nlds-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install trigger ci

```bash
npm install --save nlds-react-components
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'nlds-react-components'
import 'nlds-react-components/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```


## Develop
### Setting up the development environment
1. Clone this repository
2. Install npm go [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for instructions. Make sure to install version `14` or higher.
3. Install yarn go [here](https://yarnpkg.com/getting-started/install) for instructions. Make sure to install version `1.22` or higher.
4. Run the following command to install all development dependencies:
  ```bash
  yarn install
  ```

### Folder structure
The project folders are structured in the following way:
The `src` folder houses both our `components` and our storybook `stories`, these are both in their own folders.
All of our components are their own package and managed with lerna, docs are available [here](https://lerna.js.org/).

### Adding components
#### Storybook
In order to test components we use storybook.\
To run storybook locally we start it with the following command:
```bash
yarn storybook
```
We don't need to re-run the command over-and-over because storybook should detect changed files ✨automagically✨ and refresh the displayed components.

#### Creating a new package for a new component
In order to create a new lerna package we need to create a package.json file for it inside it's folder.
Start by filling it with the following information:
```json
{
  "name": "nlds-react-components-component_name",
  "version": "0.1.0",
  "description": "A short description of the component",
  "author": "Municipality of The Hague",
  "license": "MIT",
  "dependencies": {
    "@material-ui/core": "^4"
  }
}
```
_Don't forget to add all needed dependencies for your component to the dependencies section of the component's `package.json`._

We will also need to add our component to the meta-package which installs all of the nlds react components. We can do this by adding it to the list of dependencies.
The file we need is located here: `src/components/package.json`\
An entry should be structured like this:
```json
"nlds-react-component-component_name": "^0.1"
```
