import { BadgeCounter } from '@gemeente-denhaag/badge-counter';
import tokens from '@gemeente-denhaag/design-tokens-components/dist/list.json';
import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import readme from '../../../../components/Sidenav/README.md';
import tokensDefinition from '../../../../components/Sidenav/tokens.json';

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
  id: 'react-navigation-sidenav',
  title: 'React/Navigation/Sidenav',
  component: Sidenav,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
    tokensPrefix: 'denhaag-sidenav',
    tokensDefinition,
    tokens,
  },
} as Meta<typeof Sidenav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
