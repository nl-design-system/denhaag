import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/blockquote';

import pkg from '../../../../components/Blockquote/package.json';
import readme from '../../../../components/Blockquote/README.md';

const meta = {
  title: 'CSS/Data Display/Blockquote',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      description: {
        component: readme,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
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
