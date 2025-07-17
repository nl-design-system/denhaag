import type { Preview } from '@storybook/react-vite';
import type { StoryContext } from 'storybook/internal/types';
import clsx from 'clsx';
import * as prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettier from 'prettier/standalone';
import React, { ReactElement } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import { DesignTokensBlock } from './DesignTokensBlock';
import { withThemeByClassName } from '@storybook/addon-themes';

import '@utrecht/component-library-css/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';
import { addonViewport } from './addon-viewports';

const formatCache = new Map<string, string>();

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
        <div
          className={clsx('utrecht-document', 'utrecht-document--surface', 'denhaag-theme', {
            'utrecht-reduced-motion': ['1', 'true'].includes(process.env['STORYBOOK_REDUCED_MOTION'] ?? ''),
          })}
        >
          {Story()}
        </div>
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
        order: [
          'Den Haag',
          'Templates',
          ['login', 'overview', 'berichten', 'zaak overzicht', 'zaak detail'],
          'React',
          [
            'Actions',
            'Cards',
            'Data Display',
            'Feedback',
            'Input',
            'Layout',
            'Navigation',
            'Page Elements',
            'Process Steps',
            'Surfaces',
          ],
          'CSS',
          [
            'Actions',
            'Cards',
            'Data Display',
            'Feedback',
            'Input',
            'Layout',
            'Navigation',
            'Page Elements',
            'Process Steps',
            'Surfaces',
          ],
        ],
      },
    },

    // Configure @storybook/addon-docs
    docs: {
      // Show code by default.
      // Stories without concise code snippets can hide the code at Story level.
      source: {
        state: 'open',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        transform: (src: string, storyContext: StoryContext<any>) => {
          // Ensure valid HTML in the Preview source for HTML/CSS stories
          const render =
            typeof storyContext.component === 'function'
              ? storyContext.component
              : typeof storyContext.component?.render === 'function'
                ? storyContext.component?.render
                : null;

          if (render && storyContext.title.toLowerCase().startsWith('css')) {
            const staticMarkup = ReactDOMServer.renderToStaticMarkup(render(storyContext.args));

            // Hacky workaround for the new asynchronous formatting from Prettier, and the lack of support of a async transform function
            // Start async formatting, when ready: add result to the formatCache map
            prettier
              .format(staticMarkup, {
                parser: 'babel',
                plugins: [prettierPluginBabel, prettierPluginEstree],
              })
              .then((result) => {
                formatCache.set(storyContext.id, result);
              })
              .catch((error) => {
                console.error('Error formatting code:', error);
              });

            // Check cache for existing entry
            const currentCacheEntry = formatCache.get(storyContext.id);
            if (currentCacheEntry) {
              // Return formatted snippet from cache
              return currentCacheEntry;
            }

            // Return the unformatted code while waiting for async formatting
            return staticMarkup;
          }
          return src;
        },
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
