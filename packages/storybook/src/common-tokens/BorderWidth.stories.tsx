import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { getTokenGroup, getTokenRows, path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type BorderWidthTokens = Tokens['basis']['border-width'];

const borderWidthTokens: BorderWidthTokens = tokens['basis']['border-width'];
const borderWidthTokensSorted = Object.entries(borderWidthTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const focusWidthToken = tokens['basis']['focus']['outline-width'];
const formControlWidthToken = tokens['basis']['form-control']['border-width'];
const formControlActiveWidthToken = tokens['basis']['form-control']['active']['border-width'];
const formControlFocusWidthToken = tokens['basis']['form-control']['focus']['border-width'];
const formControlHoverWidthToken = tokens['basis']['form-control']['hover']['border-width'];
const formControlInvalidWidthToken = tokens['basis']['form-control']['invalid']['border-width'];
const borderWidthTokenRows = getTokenRows({
  'border-width': Object.fromEntries(borderWidthTokensSorted),
  focus: { 'outline-width': focusWidthToken },
  'form-control': {
    'border-width': formControlWidthToken,
    active: { 'border-width': formControlActiveWidthToken },
    focus: { 'border-width': formControlFocusWidthToken },
    hover: { 'border-width': formControlHoverWidthToken },
    invalid: { 'border-width': formControlInvalidWidthToken },
  },
});

const meta: Meta = {
  title: 'Common Tokens/Border Width',
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
              {borderWidthTokenRows.map((token, index) => {
                const previousToken = borderWidthTokenRows[index - 1];
                const isNewGroup = previousToken && getTokenGroup(token) !== getTokenGroup(previousToken);

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
                            height: '40px',
                            width: '40px',
                            borderStyle: 'solid',
                            borderWidth: token.value,
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
