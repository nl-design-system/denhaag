import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { getTokenGroup, getTokenRows, path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type SizeTokens = Tokens['basis']['size'];
type SizeIconTokens = Tokens['basis']['size']['icon'];

const sizeTokens: SizeTokens = tokens['basis']['size'];
const sizeTokensSorted = Object.entries(sizeTokens)
  .filter(([key]) => key !== 'icon')
  .filter(([key]) => key !== 'form-control')
  .filter(([key]) => key !== 'page')
  .filter(([key]) => key !== 'pointer-target')
  .sort((a, b) => {
    const aValue = parseFloat(a[1].value);
    const bValue = parseFloat(b[1].value);
    return aValue - bValue;
  });

const sizeIconTokens: SizeIconTokens = tokens['basis']['size']['icon'];
const sizeIconTokensSorted = Object.entries(sizeIconTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const sizeFormControlToken = tokens['basis']['form-control']['max-inline-size'];
const sizePageToken = tokens['basis']['page']['max-inline-size'];

const pointerIconTokens = tokens['basis']['pointer-target'];
const pointerIconTokensSorted = Object.entries(pointerIconTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const sizeTokenRows = getTokenRows({
  size: Object.fromEntries(sizeTokensSorted),
  icon: Object.fromEntries(sizeIconTokensSorted),
  'form-control': { 'max-inline-size': sizeFormControlToken },
  page: { 'max-inline-size': sizePageToken },
  'pointer-target': Object.fromEntries(pointerIconTokensSorted),
});

const meta: Meta = {
  title: 'Common Tokens/Sizes',
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
              {sizeTokenRows.map((token, index) => {
                const previousToken = sizeTokenRows[index - 1];
                const isNewGroup = previousToken && getTokenGroup(token) !== getTokenGroup(previousToken);
                const isMaxInlineSize = token.path.at(-1) === 'max-inline-size';

                return (
                  <React.Fragment key={token.key}>
                    {isNewGroup && (
                      <tr aria-hidden="true">
                        <td colSpan={4} style={{ height: '1rem' }} />
                      </tr>
                    )}
                    <tr>
                      <td>{token.path.slice(1).join(' ')}</td>
                      <td>
                        <code>{path2css(token.path)}</code>
                      </td>
                      <td>{token.value}</td>
                      <td>
                        <div
                          style={{
                            margin: '0 auto',
                            backgroundColor: 'black',
                            height: isMaxInlineSize ? '20px' : token.value,
                            width: token.value,
                            maxWidth: isMaxInlineSize ? '500px' : undefined,
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
