import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type BorderWidthTokens = Tokens['denhaag']['border-width'];

const borderWidthTokens: BorderWidthTokens = tokens['denhaag']['border-width'];
const borderWidthTokensSorted = Object.entries(borderWidthTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const meta: Meta = {
  title: 'Primitive Tokens/Border Width',
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
              {borderWidthTokensSorted.map(([key, width]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>
                    <code>{path2css(width.path)}</code>
                  </td>
                  <td>{width.value}</td>
                  <td>
                    <div
                      style={{
                        margin: '0 auto',
                        height: '40px',
                        width: '40px',
                        borderStyle: 'solid',
                        borderWidth: width.value,
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
