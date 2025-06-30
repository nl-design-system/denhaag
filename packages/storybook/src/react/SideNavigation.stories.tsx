import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import { SideNavigation } from '@gemeente-denhaag/side-navigation';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import readme from '../../../../components/SideNavigation/README.md?raw';

type Story = StoryObj<typeof meta>;

const exampleArgs = {
  items: [
    [
      {
        href: '#',
        label: 'Overzicht',
        icon: <GridIcon />,
        current: true,
      },
    ],
    [
      {
        href: '#',
        label: 'Mijn taken',
        icon: <CheckCircleIcon />,
      },
      {
        href: '#',
        label: 'Mijn berichten',
        icon: <InboxIcon />,
        counter: 2,
      },
      {
        href: '#',
        label: 'Mijn zaken',
        icon: <ArchiveIcon />,
      },
    ],
    [
      {
        href: '#',
        label: 'Mijn gegevens',
        icon: <UserIcon />,
      },
    ],
  ],
};

const meta = {
  component: SideNavigation,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof SideNavigation>;

export default meta;

export const Default: Story = {};
