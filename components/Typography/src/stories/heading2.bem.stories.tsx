import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '../heading.scss';

const meta = {
  title: 'CSS/Data Display/Typography/Heading 2',
  id: 'css-typography-heading2',
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <h2 className="utrecht-heading-2">This is a bit of text inside a Header 2 component.</h2>,
};

export const HeadingAndParagraph: Story = {
  render: () => (
    <>
      <h2 className="utrecht-heading-2">This is a bit of text inside a Header 2 component.</h2>
      <p className="utrecht-paragraph">
        Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et
        repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus
        illum. Beatae consequatur sint eveniet animi neque.
      </p>
      <h2 className="utrecht-heading-2">This is a bit of text inside a Header 2 component.</h2>
      <p className="utrecht-paragraph">
        Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et
        repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus
        illum. Beatae consequatur sint eveniet animi neque.
      </p>
    </>
  ),
};
