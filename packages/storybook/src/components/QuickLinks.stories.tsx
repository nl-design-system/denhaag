import { Meta, StoryObj } from '@storybook/react-vite';
import { QuickLinks } from '@gemeente-denhaag/quick-links';
import readme from '../../../../components/QuickLinks/README.md?raw';
import { ArrowRightIcon, ChevronRightIcon, EuroIcon, ParkingIcon, UserIcon } from '@gemeente-denhaag/icons';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof QuickLinks> = {
  component: QuickLinks,
  tags: ['autodocs'],
  args: {
    items: [
      { Icon: EuroIcon, label: 'Belastingzaken', href: '#', count: 5 },
      { Icon: ParkingIcon, label: 'Parkeren', href: '#', count: 10 },
      { Icon: UserIcon, label: 'Mijn gegevens', href: '#' },
    ],
    Arrow: undefined,
  },
  argTypes: {
    Arrow: {
      control: {
        type: 'select',
      },
      options: ['ArrowRightIcon', 'ChevronRightIcon'],
      mapping: {
        ArrowRightIcon: ArrowRightIcon,
        ChevronRightIcon: ChevronRightIcon,
      },
      table: {
        type: { summary: 'React.ElementType' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

export const Default: Story = {};
