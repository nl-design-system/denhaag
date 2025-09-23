import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type RadiusTokens = Tokens['denhaag']['radius'];

const radiusTokens: RadiusTokens = tokens['denhaag']['radius'];
const radiusTokensSorted = Object.entries(radiusTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const meta: Meta = {
  title: 'Primitive Tokens/Radius',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => (
        <>
          <Title>Radius</Title>
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
              {radiusTokensSorted.map(([key, radius]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    <code>{path2css(radius.path)}</code>
                  </td>
                  <td>{radius.value}</td>
                  <td>
                    <div
                      style={{
                        margin: '0 auto',
                        backgroundColor: 'black',
                        height: '40px',
                        width: '40px',
                        borderRadius: radius.value,
                      }}
                    ></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ),
    },
  },
};

export default meta;

export const Default: Story = {};
