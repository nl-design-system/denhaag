import fs from 'fs';
import path from 'path';
import spacingMatrix from './spacing-matrix.json';

const spaceMap = {
  Kind: 'confidant',
  Besties: 'best-friend',
  Vrienden: 'friend',
  Kennissen: 'acquaintance',
  Onbekenden: 'stranger',
  NVT: undefined,
};

interface Spacing {
  component: string;
  sibling: string;
  spacing: string;
}

const spacings = spacingMatrix
  .map((spacing) => {
    const entries = Object.entries(spacing) as [string, keyof typeof spaceMap][];
    const first = entries.shift() as [string, string];

    const [, component] = first;

    return entries
      .map(([sibling, space]) => {
        const spacing = spaceMap[space];
        return { component, sibling, spacing };
      })
      .filter((i) => i.spacing !== undefined) as Spacing[];
  })
  .filter((i) => i.length > 0);

fs.writeFileSync(
  path.resolve('src/_mixin.scss'),
  spacings
    .map((space) => {
      const componentName = space[0].component;
      const mixins = space.map(
        ({ component, sibling, spacing }) => `
  .${component}:has(+ .${sibling}, + .${sibling.replace('denhaag', 'utrecht')}),
  .${component.replace('denhaag', 'utrecht')}:has(+ .${sibling}, + .${sibling.replace('denhaag', 'utrecht')}) {
    --${component}-margin-block-end: var(--denhaag-rich-text-${spacing}-margin-block-end);
    --${component.replace('denhaag', 'utrecht')}-margin-block-end: var(--denhaag-rich-text-${spacing}-margin-block-end);
  }
`,
      );

      return `@mixin ${componentName} {
  .${componentName}:first-child {
    --${componentName}-margin-block-start: 0;
    --${componentName.replace('denhaag', 'utrecht')}-margin-block-start: 0;
  }
${mixins.join('')}
}`;
    })
    .join('\n\n'),
);

fs.writeFileSync(
  path.resolve('src/index.scss'),
  `
@import "./mixin";

.denhaag-rich-text {
  --denhaag-space-around: 1;
  ${spacings.map((space) => `@include ${space[0].component}`).join(';\n\t')}
}
`,
);
