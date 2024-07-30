import { Meta, StoryObj } from '@storybook/react';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import readme from '../../../../components/DescriptionList/README.md?raw';

const exampleArgs = {
  items: [
    { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
    { title: 'Morgawr', detail: 'A sea serpent.' },
    { title: 'Owlman', detail: 'A giant owl-like creature.' },
  ],
};

const meta = {
  id: 'css-data-display-description-list',
  title: 'CSS/Data Display/Description List',
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
