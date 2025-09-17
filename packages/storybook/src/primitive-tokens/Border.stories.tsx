import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '../../../../proprietary/tokens/dist/index.json';
import { Subtitle, Title } from '@storybook/addon-docs/blocks';
import React from 'react';
import { path2css } from '../denhaag/util';

type Story = StoryObj<typeof meta>;
type Tokens = typeof tokens;
type BorderWidthTokens = Tokens['denhaag']['border']['width'];
type BorderStyleTokens = Tokens['denhaag']['border']['style'];

const borderWidthTokens: BorderWidthTokens = tokens['denhaag']['border']['width'];
const borderStyleTokens: BorderStyleTokens = tokens['denhaag']['border']['style'];
const borderWidthTokensSorted = Object.entries(borderWidthTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});
const borderStyleTokensSorted = Object.entries(borderStyleTokens).sort((a, b) => {
  const aValue = parseFloat(a[1].value);
  const bValue = parseFloat(b[1].value);
  return aValue - bValue;
});

const meta: Meta = {
  title: 'Primitive Tokens/Border',
  tags: ['autodocs', '!dev'],
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      page: () => (
        <>
          <Title>Border</Title>
          <Subtitle>Width</Subtitle>
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
                  <td>{width.original.name}</td>
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
          <Subtitle>Style</Subtitle>
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
              {borderStyleTokensSorted.map(([key, style]) => (
                <tr key={key}>
                  <td>{style.original.name}</td>
                  <td>
                    <code>{path2css(style.path)}</code>
                  </td>
                  <td>{style.value}</td>
                  <td>
                    <div
                      style={{
                        margin: '0 auto',
                        height: '40px',
                        width: '40px',
                        borderStyle: style.value,
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
