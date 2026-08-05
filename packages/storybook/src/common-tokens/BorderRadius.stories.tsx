import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { getTokenGroup, getTokenRows, path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type RadiusTokens = Tokens['basis']['border-radius'];

const radiusTokens: RadiusTokens = tokens['basis']['border-radius'];
const radiusTokensSorted = Object.entries(radiusTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const formControlRadiusToken = tokens['basis']['form-control']['border-radius'];
const radiusTokenRows = getTokenRows({
  'border-radius': Object.fromEntries(radiusTokensSorted),
  'form-control': { 'border-radius': formControlRadiusToken },
});

const meta: Meta = {
  title: 'Common Tokens/Border Radius',
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
              {radiusTokenRows.map((token, index) => {
                const previousToken = radiusTokenRows[index - 1];
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
                            backgroundColor: 'black',
                            height: '40px',
                            width: '40px',
                            borderRadius: token.value,
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
