import { Meta, StoryObj } from '@storybook/react-vite';
import { headerProps, headerFlatMobileMenuProps } from '../templates/util';
import { Header, HeaderProps } from '@gemeente-denhaag/header';
import readme from '../../../../components/Header/README.md?raw';

const breadcrumbs = {
  breadcrumbs: {
    navigationPath: [{ label: 'Overzicht' }],
  },
};

const overviewHeaderProps: HeaderProps = {
  ...headerProps,
  ...breadcrumbs,
};

const meta = {
  component: Header,
  args: overviewHeaderProps,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FlatMobileMenu: Story = {
  args: {
    ...headerFlatMobileMenuProps,
    ...breadcrumbs,
  },
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
};
