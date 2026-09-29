import { Meta, StoryObj } from '@storybook/react-vite';
import { PageIndex, PageIndexProps } from '@gemeente-denhaag/page-index';

import readme from '../../../../components/PageIndex/README.md?raw';

const exampleArgs = {
  heading: 'Op deze pagina',
  headingLevel: 3,
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
  component: PageIndex,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=1265-20780',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof PageIndex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
