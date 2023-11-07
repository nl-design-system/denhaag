import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '../heading.scss';

const meta = {
  title: 'CSS/Data Display/Typography/Heading 5',
  id: 'css-typography-heading5',
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <h5 className="utrecht-heading-5">This is a bit of text inside a Header 5 component.</h5>,
};

export const HeadingAndParagraph: Story = {
  render: () => (
    <>
      <h5 className="utrecht-heading-5">This is a bit of text inside a Header 5component.</h5>
      <p className="utrecht-paragraph">
        Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et
        repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus
        illum. Beatae consequatur sint eveniet animi neque.
      </p>
      <h5 className="utrecht-heading-5">This is a bit of text inside a Header 5component.</h5>
      <p className="utrecht-paragraph">
        Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et
        repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus
        illum. Beatae consequatur sint eveniet animi neque.
      </p>
    </>
  ),
};
