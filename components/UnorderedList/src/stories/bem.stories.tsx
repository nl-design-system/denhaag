import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import readme from '../../README.md?raw';
import '../index.scss';

const meta = {
  title: 'CSS/Data Display/Unordered List',
  id: 'css-unordered-list',
  parameters: {
    docs: {
      description: {
        component: readme,
      },
      source: { type: 'dynamic' },
    },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const UnorderedList: Story = {
  render: () => (
    <ul className="denhaag-unordered-list">
      <li>
        Molestias{' '}
        <a href="https://www.denhaag.nl" className="denhaag-link">
          <span className="denhaag-link__label">assumenda</span>
        </a>{' '}
        ratione in dolore aut consequatur accusantium corporis.
      </li>
      <li>
        Cheese:
        <ul className="denhaag-unordered-list denhaag-unordered-list--lower-alpha">
          <li>
            <a href="https://www.denhaag.nl" className="denhaag-link">
              <span className="denhaag-link__label">Blue cheese</span>
            </a>
          </li>
          <li>Feta</li>
          <li>Brie</li>
        </ul>
      </li>
      <li>Veritatis similique consequatur tempore quis.</li>
      <li>Totam sed occaecati dolor excepturi sit dolor et ab.</li>
    </ul>
  ),
};

export const UnorderedListWithParagraph: Story = {
  render: () => (
    <>
      <ul className="denhaag-unordered-list">
        <li>Id magnam est veritatis ut laudantium molestias similique.</li>
        <li>Totam sed occaecati dolor excepturi sit dolor et ab.</li>
        <li>Veritatis similique consequatur tempore quis.</li>
      </ul>
      <p className="utrecht-paragraph">
        Atque qui praesentium provident. A aliquid quae earum neque accusamus voluptatem. Assumenda ut iure in et
        repellendus quam omnis excepturi. Vero quod eos eveniet molestias eum in quis. Delectus qui ullam necessitatibus
        illum. Beatae consequatur sint eveniet animi neque.
      </p>
    </>
  ),
};
