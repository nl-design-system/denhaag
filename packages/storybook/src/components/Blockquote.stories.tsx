import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/blockquote';

import readme from '../../../../components/Blockquote/README.md?raw';

const meta = {
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=243-8768',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <figure className="denhaag-blockquote">
      <blockquote className="denhaag-blockquote__content" cite="https://www.denhaag.nl/nl.htm">
        <p>
          Molestiae earum esse ut hic ea cupiditate tenetur quis. Voluptates atque incidunt aliquam enim. Illum sapiente
          dolorem recusandae sit distinctio.
        </p>
      </blockquote>
    </figure>
  ),
};

export const WithAttribution: Story = {
  render: () => (
    <figure className="denhaag-blockquote">
      <blockquote className="denhaag-blockquote__content" cite="https://www.denhaag.nl/nl.htm">
        <p>
          Molestiae earum esse ut hic ea cupiditate tenetur quis. Voluptates atque incidunt aliquam enim. Illum sapiente
          dolorem recusandae sit distinctio.
        </p>
      </blockquote>
      <figcaption className="denhaag-blockquote__attribution">First Name Surname</figcaption>
    </figure>
  ),
};
