import { Meta, StoryObj } from '@storybook/react';
import { PageIndex, PageIndexProps } from '@gemeente-denhaag/page-index';

const exampleArgs = {
  heading: 'Op deze pagina',
  headingAs: 'h3',
  items: [
    {
      label: 'Contactgegevens',
      href: '#example1',
    },
    {
      label: 'Persoonsgegevens',
      href: '#example2',
    },
    {
      label: 'Meldingen',
      href: '#example3',
    },
  ],
} as PageIndexProps;

const meta = {
  id: 'react-navigation-page-index',
  title: 'React/Navigation/Page Index',
  component: PageIndex,
  args: exampleArgs,
  tags: ['autodocs'],
} as Meta<typeof PageIndex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
