import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { getTokenGroup, getTokenRows, path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;

const colorTokenRows = getTokenRows(tokens.basis.color);

const meta: Meta = {
  title: 'Common Tokens/Color',
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
              {colorTokenRows.map((token, index) => {
                const previousToken = colorTokenRows[index - 1];
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
                            backgroundColor: token.value,
                            border: '1px solid #ccc',
                            height: '2rem',
                            width: '2rem',
                          }}
                        />
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
