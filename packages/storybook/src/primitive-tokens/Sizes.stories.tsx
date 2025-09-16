import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type SizeTokens = Tokens['denhaag']['size'];

const sizeTokens: SizeTokens = tokens['denhaag']['size'];
console.log(sizeTokens);
const sizeTokensSorted = Object.entries(sizeTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const meta: Meta = {
  title: 'Primitive Tokens/Sizes',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => (
        <>
          <Title>Sizes</Title>
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
              {sizeTokensSorted.map(([key, size]) => (
                <tr key={key}>
                  <td>{size.original.name}</td>
                  <td>
                    <code>{path2css(size.path)}</code>
                  </td>
                  <td>{size.value}</td>
                  <td>
                    <div
                      style={{
                        backgroundColor: 'black',
                        height: size.value,
                        width: size.value,
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
