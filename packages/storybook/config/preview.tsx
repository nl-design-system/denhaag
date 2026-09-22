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
  },
};

export default preview;
