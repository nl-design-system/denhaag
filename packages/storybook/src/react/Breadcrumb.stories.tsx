import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/breadcrumb';
import readme from '../../../../components/Breadcrumb/README.md?raw';
import { Breadcrumb } from '@gemeente-denhaag/breadcrumb';

const meta = {
  id: 'react-navigation-breadcrumb',
  title: 'React/Navigation/Breadcrumb',
  component: Breadcrumb,
  args: {
    navigationPath: [
      {
        label: 'Home',
        href: 'https://denhaag.nl',
      },
      {
        label: 'Afval',
        href: 'https://denhaag.nl/afval',
      },
      {
        label: "Kliko's",
        href: 'https://denhaag.nl/afval/klikos',
      },
    ],
  },
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
} as Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RTL: Story = {
  args: { ...Default.args, dir: 'rtl' },
};

export const Long: Story = {
  args: {
    navigationPath: [
      {
        label: 'Home',
        href: 'https://denhaag.nl',
      },
      {
        label: 'Gemeente',
        href: 'https://denhaag.nl/gemeente',
      },
      {
        label: 'Wonen en leven',
        href: 'https://denhaag.nl/wonenenleven',
      },
      {
        label: 'Afval',
        href: 'https://denhaag.nl/afval',
      },
      {
        label: "Kliko's",
        href: 'https://denhaag.nl/afval/klikos',
      },
    ],
  },
};

export const WithIcon: Story = {
  args: { ...Default.args, showHomeIcon: true },
};

export const WithoutCurrent: Story = {
  args: { ...Default.args, showCurrent: false },
};
