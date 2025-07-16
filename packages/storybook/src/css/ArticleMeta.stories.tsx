import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/article-meta';

import readme from '../../../../components/ArticleMeta/README.md?raw';

const meta = {
  title: 'CSS/Data Display/Article meta',
  tags: ['autodocs'],
  parameters: {
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
    <div className="denhaag-article-meta">
      <p className="denhaag-article-meta__item">Auteur: Janneke Smit</p>
      <p className="denhaag-article-meta__item">Gepubliceerd: 9 december 2019</p>
      <p className="denhaag-article-meta__item">Gewijzigd: 28 april 2021</p>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className="denhaag-article-meta denhaag-article-meta--horizontal">
      <p className="denhaag-article-meta__item">Auteur: Janneke Smit</p>
      <p className="denhaag-article-meta__item">Gepubliceerd: 9 december 2019</p>
      <p className="denhaag-article-meta__item">Gewijzigd: 28 april 2021</p>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <div className="denhaag-article-meta denhaag-article-meta--responsive">
      <p className="denhaag-article-meta__item">Gepubliceerd: 9 december 2019</p>
      <p className="denhaag-article-meta__item">Gewijzigd: 28 april 2021</p>
    </div>
  ),
};
