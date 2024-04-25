import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter } from '@gemeente-denhaag/badge-counter';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import readme from '../../../../components/Sidenav/README.md';

const exampleArgs = {
  children: (
    <>
      <SidenavList>
        <SidenavItem>
          <SidenavLink href={'/#'} current>
            <GridIcon />
            Overzicht
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
      <SidenavList>
        <SidenavItem>
          <SidenavLink href={'/#'}>
            <CheckCircleIcon />
            Mijn taken
          </SidenavLink>
        </SidenavItem>
        <SidenavItem>
          <SidenavLink href={'/#'}>
            <InboxIcon />
            Mijn berichten
            <BadgeCounter>2</BadgeCounter>
          </SidenavLink>
        </SidenavItem>
        <SidenavItem>
          <SidenavLink href={'/#'}>
            <ArchiveIcon />
            Mijn lopende zaken
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
      <SidenavList>
        <SidenavItem>
          <SidenavLink href={'/#'}>
            <UserIcon />
            Mijn gegevens
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
    </>
  ),
};

const meta = {
  id: 'css-navigation-sidenav',
  title: 'CSS/Navigation/Sidenav',
  component: Sidenav,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Sidenav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
