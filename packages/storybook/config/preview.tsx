import type { Preview } from '@storybook/react-vite';
import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import { DesignTokensBlock } from './DesignTokensBlock';
import { withThemeByClassName } from '@storybook/addon-themes';
import '@utrecht/component-library-css/dist/index.css';
import '@gemeente-denhaag/design-tokens/dist/theme/index.css';
import { addonViewport } from './addon-viewports';
import { StylesProvider } from '@gemeente-denhaag/stylesprovider';
import '@gemeente-denhaag/fonts/dist/index.css';

const preview: Preview = {
  decorators: [
    // Enable `utrecht-document` component as backdrop
    // Enable `utrecht-theme` to configure the design tokens
    // Ensure old html templates will be rendered as react component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any, storyContext: any): ReactElement => {
      // Hack to make current args for a story available in the transformSource of the docs addon
      storyContext.parameters['args'] = storyContext.args;

      return (
        <StylesProvider
          className={clsx('denhaag-theme', {
            'utrecht-reduced-motion': ['1', 'true'].includes(process.env['STORYBOOK_REDUCED_MOTION'] ?? ''),
          })}
        >
          {Story()}
        </StylesProvider>
      );
    },
    withThemeByClassName({
      themes: {
        denhaag: 'denhaag-theme',
      },
      defaultTheme: 'denhaag',
    }),
  ],
  parameters: {
    ...addonViewport,
    chromatic: { viewports: [1280] },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Den Haag',
          ['Introduction', 'License', 'Release strategy'],
          'Primitive Tokens',
          'Common Tokens',
          'Templates',
          ['Login', 'Overview', 'Zaak Overzicht', 'Zaak Detail', 'Berichten Overzicht', 'Berichten Detail'],
          'components',
          'Open Formulieren',
        ],
      },
    },
    docs: {
      codePanel: true,
      canvas: {
        sourceState: 'none',
      },
      page: () => {
        // Exclude `<Title>` because the title comes from the Markdown file
        return (
          <>
            <Description />
            <Primary />
            <Controls />
            <Stories />
            <div className="denhaag-theme">
              <DesignTokensBlock />
            </div>
          </>
        );
      },
    },
    status: {
      statuses: {
        PRODUCTION: {
          background: '#006400',
          color: '#ffffff',
          description:
            'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
        },
        BETA: {
          background: '#cca300',
          color: '#ffffff',
          description:
            'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
        },
        ALPHA: {
          background: '#cc0000',
          color: '#ffffff',
          description:
            'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
        },
        'WORK IN PROGRESS': {
          background: '#cc0000',
          color: '#ffffff',
          description:
            'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
        },
        DEPRECATED: {
          background: '#9e1616',
          color: '#ffffff',
          description:
            'This component is no longer supported. If used in production, please replace with the recommended alternative.',
        },
      },
    },
  },
};

export default preview;
