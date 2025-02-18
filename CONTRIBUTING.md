# Contributing

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you have not done so already.

## TL;DR

Before you make a commit or PR, run `pnpm run lint` to see if everything is in order.
Many things can be fixed automatically using `pnpm run lint-fix`. Make separate commits for separate purposes.

## Cooperation with NL Design System

Certain Components available in this repository may become part of the NL Design System component library. When you contribute to this project you allow your contributions to be made a part of the NL Design System component library. The NL Design System project maintainers decide which components will be included in their component library.

## Foundation for Public Code

As an open-source project, to ensure the code remains readable and inviting to contributors, all written code must adhere to the Foundation for Public Code’s [Standard for Public Code](https://standard.publiccode.net/).
The criteria to which the code must adhere can be found [here](https://standard.publiccode.net/criteria/).
These criteria concern code as well as the repository itself and the surrounding documentation.
For convenience, all criteria relevant for contributors are listed below, with their respective links to the standard as defined by the Foundation for Public Code.

- **[Document the code](https://standard.publiccode.net/criteria/documenting.html)**
  <br />
  _See the Code docs section for more information on documentation._

  - All functionality of the codebase MUST be described in language clearly understandable for those that understand the purpose of the code.
  - The documentation of the codebase MUST contain:
    - a description of how to install and run the source code;
    - examples demonstrating the key functionality.

- **[Maintain version control](https://standard.publiccode.net/criteria/version-control-and-history.html)**

  - Version control MUST be maintained for all written code.
  - All decisions MUST be documented using commit messages, so that components can be versioned accordingly. If a contribution stems from an issue or discussion, they MUST always be linked.
  - Component versioning is done through pnpm changesets. Collaborators need to create a changeset using `pnpm -w changeset`.

- **[Use a coherent style](https://standard.publiccode.net/criteria/style.html)**

  - All written code must adhere to the defined code style and should pass automated tests on style. Code should contain inline comments and documentation for non-trivial sections.
  - Consult this document as well as the JavaScript Standard Style and the provided linters in the project to ensure your code complies.

- **[Use plain English](https://standard.publiccode.net/criteria/understandable-english-first.html)**
  - All code and documentation MUST be in English.
  - There SHOULD be no acronyms, abbreviations, puns or legal/domain specific terms in the codebase without an explanation preceding it or a link to an explanation.
  - Documentation SHOULD aim for lower secondary education reading level, as recommended by the Web Content Accessibility Guidelines 2.

## Code Style

The project uses the following tools to automate checking and fixing code style rules:

- [StandardJS](https://standardjs.com/) ([rules](https://standardjs.com/rules.html))
- [EditorConfig](https://editorconfig.org)
- [npm-package-json-lint](https://npmpackagejsonlint.org/) ([rules](https://npmpackagejsonlint.org/docs/en/rules))
- [Prettier](https://prettier.io)
- [stylelint](https://stylelint.io/) ([rules](https://stylelint.io/user-guide/rules/list))

Check of there are plugins available for your code editor of choice, to enable these tools during development.
That way you will not find yourself alerted by Husky and lint-staged to fix formatting issues, just when you are about to commit your code.

For automating checks:

- [Husky](https://github.com/typicode/husky): automatically install Git hooks
- [lint-staged](https://github.com/okonet/lint-staged): quickly run code style checks for only the files that are staged in Git

## Code docs

Code docs must be comprehensive and to the point.
They must clearly explain the purpose, context or functionality of the line of code.

```js
  /**
   * If true the Checkbox is checked.
   */
  checked?: boolean
```

## Typescript coding style

Changes to Den Haag React Component Library code must conform to the JavaScript Standard Style.
The project has linters set up to verify the code style. Use the `pnpm run lint` or `pnpm run lint:ts` command to check your changes and ensure they conform to the standard.

When defining an export for a component, add a named export as well as a default export:

```jsx
 export const Button: React.FC<...
```

```jsx
export default Button;
```

The component library uses Material UI components underwater by providing wrapper components.
When making a wrapper component, the component properties will need to be passed to the original Material UI component.
To keep the codebase compact and readable, use the following syntax when passing properties:

```jsx
export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  return <MaterialSwitch {...props} />;
};
```

If the value of a specific property should be defined or overwritten, use the following syntax:

```jsx
export const Switch: React.FC<SwitchProps> = (props: SwitchProps) => {
  return <MaterialSwitch color=”primary” {...props} />
}
```

## Defining dependency versions

To define a dependency version in the package.json file, use the following format:

```json
 "package": "2.0.0"
```

The major, minor and patch version should be defined.
This versioning system is also enforced with the `pnpm run lint:package` command.

## Naming conventions

### Folder names

All folder names should use lowercase, except for folders containing a component. Folders containing a component should use PascalCasing and have the same name as the component. See the following example:

```
 components/layout/Box
 components/layout/Box.tsx
```

### Typescript file names

For typescript files, use PascalCasing. See the following example:

```
 GridList.tsx
```

The `<ComponentName>.stories.tsx` file for each component should have the same name as the component. See the following example:

```
 GridList.stories.tsx
```

### Grouped components

Components belonging to a common group should reside in a common folder under the ‘components’ folder.
For example, layout components are grouped together under a ‘layout’ folder:

```
src
  components
    layout
      Box
      Container
      Grid
      GridList
      GridListTitle
      GridListTitleBar
      Hidden
```

Components that are grouped should also have their respective `.stories.tsx` files grouped in a `/src/stories/<group-name>` folder.

### Dependent components

Components that are only used as a dependency by a different component, have their own folder on the same level. See; `GridList`, `GridListTile`, `GridListTileBar` in the image above.

### Variable names

Variable names should use camelCasing as indicated by StandardJS.
Use concise variable names.

| <span style="color:red">Do not use</span> | <span style="color:green">Do use</span> |
| :---------------------------------------- | :-------------------------------------- |
| `bgCol`                                   | `backgroundColor`                       |
| `t`                                       | `timer`                                 |

### CSS names

CSS class names, custom property names and keyframe names al must start with the prefix `denhaag-` followed by one or more [0-9a-z-]. This is also enforced by the linter via the `pnpm run lint:css` command.

### Installing and testing packages locally

We have tested this using a verdaccio local registry on the PWA `main` and `development` branches.
This can be repeated by installing verdaccio globally with `npm` and running verdaccio on the default port, navigate to http://localhost:4873 and follow instructions to login on the registry, username, password and email do not matter.
If you have used verdaccio before, remove the content in the verdaccio/storage folder.

A lerna publish will create and push tags to your remote.
In order to test this without publishing tags and commits to the denhaag origin, create a dummy github repository and set your git remote origin to it temporarily.
Make sure the tags that are created on publish don't exist yet in the local git registry, otherwise remove them locally:

`git tag | xargs git tag -d`

Run the following command to publish a new version to the local registry (on a separate branch e.g. fix/test):

`lerna publish --registry http://localhost:4873 --allow-branch fix/test --skip-git`

Now you can test the packages in a new React project, or test it in the PWA. Either way make sure you specify the registry with `--registry http://localhost:4873`.
In the PWA upgrade the dependency of @gemeente-denhaag/components-react (with the registry flag), and correct the imports.

## Testing guidelines

Testing is currently unimplemented. Please update this CONTRIBUTING.md if a new testing flow is implemented.

## Updating dependencies

Steps to go through:

1. Create a new branch from the latest version of `main`:
2. `pnpm run update-patch` to install the latest available patch version of every `dependency` and `devDepenency` of every `package.json` in this npm workspace. E.g.: from 1.0.0 to 1.0.7. Check the logs to see what packages have been affected, and where to perhaps pay special attention to when testing for regressions.
3. Perform "smoke testing", for example using `pnpm run clean && pnpm run lint && pnpm run build`.
4. `git commit` these updates, so in case of regressions it will be easier to pinpoint what upgrade has caused issues.
5. `pnpm run update-minor` to install the latest available minor version of every dependency. E.g.: from 1.0.0 to 1.2.3.
6. Perform "smoke testing", for example using `pnpm run clean && pnpm run lint && pnpm run build` and by running Storybook and checking for issues.
7. `git commit` these updates.
8. Run `pnpm run update-major`. Check what packages have been updated, and read about any breaking changes in the on-line documentation of these packages. If any packages require migration steps, it is best to update and migrate these packages in separate commits. If some packages should remain at the older major version, you can configure their name in `.ncurc.js` by disallowing the major version update. In both cases it is advisable to revert the update (`git reset --hard && pnpm run install`) before proceding in smaller steps.
