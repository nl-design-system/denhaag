import tokens from '@gemeente-denhaag/design-tokens-components/dist/list.json';
import { Meta, StoryObj } from '@storybook/react';
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
  id: 'react-page-elements-header',
  title: 'React/Page Elements/Header',
  component: HeaderLogic,
  args: overviewHeaderProps,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    tokens,
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
};
