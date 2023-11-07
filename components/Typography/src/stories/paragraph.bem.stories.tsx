import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '../heading.scss';

const meta = {
  title: 'CSS/Data Display/Typography/Paragraph',
  id: 'css-typography-paragraph',
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultWithBold: Story = {
  render: () => (
    <p className="utrecht-paragraph">
      Atque qui praesentium provident. <strong>A aliquid quae earum neque accusamus voluptatem.</strong> Assumenda ut
      iure in et repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam
      necessitatibus illum. Beatae consequatur sint eveniet animi neque.
    </p>
  ),
};

export const LeadDefaultWithBold: Story = {
  render: () => (
    <p className="utrecht-paragraph utrecht-paragraph--lead">
      Atque qui praesentium provident. <strong>A aliquid quae earum neque accusamus voluptatem.</strong> Assumenda ut
      iure in et repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam
      necessitatibus illum. Beatae consequatur sint eveniet animi neque.
    </p>
  ),
};

export const DetailSmall: Story = {
  render: () => (
    <p className="utrecht-paragraph utrecht-paragraph--denhaag-detail">
      Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et
      repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus
      illum. Beatae consequatur sint eveniet animi neque.
    </p>
  ),
};

export const MultipleParagraphs: Story = {
  render: () => (
    <>
      <p className="utrecht-paragraph utrecht-paragraph--lead">
        Atque qui praesentium provident. <strong>A aliquid quae earum neque accusamus voluptatem.</strong> Assumenda ut
        iure in et repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam
        necessitatibus illum. Beatae consequatur sint eveniet animi neque.
      </p>
      <p className="utrecht-paragraph">
        Atque qui praesentium provident. <strong>A aliquid quae earum neque accusamus voluptatem.</strong> Assumenda ut
        iure in et repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam
        necessitatibus illum. Beatae consequatur sint eveniet animi neque.
      </p>
      <p className="utrecht-paragraph">
        Atque qui praesentium provident. <strong>A aliquid quae earum neque accusamus voluptatem.</strong> Assumenda ut
        iure in et repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam
        necessitatibus illum. Beatae consequatur sint eveniet animi neque.
      </p>
    </>
  ),
};
