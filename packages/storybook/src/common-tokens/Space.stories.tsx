import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { getTokenGroup, getTokenRows, path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type SpaceTokens = Tokens['basis']['space'];

const spaceTokens: SpaceTokens = tokens['basis']['space'];
const spaceTokenRows = getTokenRows(spaceTokens);

const meta: Meta = {
  title: 'Common Tokens/Space',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => (
        <>
          <Title />
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Variable</th>
                <th>Value</th>
                <th>Preview</th>
              </tr>
            </thead>
            <tbody>
              {spaceTokenRows.map((token, index) => {
                const previousToken = spaceTokenRows[index - 1];
                const isNewGroup = previousToken && getTokenGroup(token) !== getTokenGroup(previousToken);

                return (
                  <React.Fragment key={token.path.join('.')}>
                    {isNewGroup && (
                      <tr aria-hidden="true">
                        <td colSpan={4} style={{ height: '1rem' }} />
                      </tr>
                    )}
                    <tr>
                      <td>{token.path.slice(2).join(' ')}</td>
                      <td>
                        <code>{path2css(token.path)}</code>
                      </td>
                      <td>{token.value}</td>
                      <td>
                        <div
                          style={{
                            margin: '0 auto',
                            backgroundColor: 'black',
                            height: token.value,
                            width: token.value,
                          }}
                        ></div>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </>
      ),
    },
  },
};

export default meta;

export const Default: Story = {};
