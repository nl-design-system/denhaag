import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import readme from '../../../../components/DescriptionList/README.md?raw';
import { Link } from '@gemeente-denhaag/link';
import { EditIcon } from '@gemeente-denhaag/icons';

const exampleArgs = {
  items: [
    { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
    { title: 'Morgawr', detail: 'A sea serpent.' },
    { title: 'Owlman', detail: 'A giant owl-like creature.' },
  ],
};

const meta = {
  id: 'react-data-display-description-list',
  title: 'React/Description List',
  component: DescriptionList,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof DescriptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCaption: Story = {
  args: { ...Default.args, caption: 'Caption' },
};

export const WithAction: Story = {
  args: {
    ...Default.args,
    items: [
      {
        title: 'Owlman',
        detail: 'A giant owl-like creature.',
        action: (
          <Link icon={<EditIcon />} iconAlign="start" href="#test">
            Aanpassen
          </Link>
        ),
      },
      ...exampleArgs.items,
    ],
  },
};
