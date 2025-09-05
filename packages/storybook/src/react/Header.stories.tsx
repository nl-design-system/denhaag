import { Meta, StoryObj } from '@storybook/react-vite';
import { headerProps, headerFlatMobileMenuProps } from '../templates/util';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';

const breadcrumbs = {
  breadcrumbs: {
    navigationPath: [{ label: 'Overzicht' }],
  },
};

const overviewHeaderProps: HeaderLogicProps = {
  ...headerProps,
  ...breadcrumbs,
};

const meta = {
  component: HeaderLogic,
  args: overviewHeaderProps,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof HeaderLogic>;

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
