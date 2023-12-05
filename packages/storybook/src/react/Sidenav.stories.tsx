import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter } from '@gemeente-denhaag/badge-counter';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { ArchiveIcon, GridIcon, InboxIcon } from '@gemeente-denhaag/icons';
import { Divider } from '@gemeente-denhaag/divider';
import readme from '../../../../components/Button/README.md';

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
            Lopende zaken
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
      <Divider />
      <SidenavList>
        <SidenavItem>
          <SidenavLink href={'/#'}>
            <ArchiveIcon />
            Lopende zaken
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
    </>
  ),
};

const meta = {
  id: 'react-navigation-sidenav',
  title: 'React/Navigation/Sidenav',
  component: Sidenav,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
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
