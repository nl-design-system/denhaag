import { NumberBadge } from '@gemeente-denhaag/number-badge';
import tokens from '@gemeente-denhaag/design-tokens-components/dist/list.json';
import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import { Sidenav, SidenavItem, SidenavLink, SidenavList, SidenavLinkLabel } from '@gemeente-denhaag/sidenav';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import readme from '../../../../components/Sidenav/README.md?raw';
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
            <SidenavLinkLabel>
              Mijn berichten
              <NumberBadge>2</NumberBadge>
            </SidenavLinkLabel>
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
