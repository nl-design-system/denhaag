import { NumberBadge } from '@gemeente-denhaag/number-badge';
import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import {
  Sidenav as SidenavComponent,
  SidenavItem,
  SidenavLink,
  SidenavLinkLabel,
  SidenavList,
} from '@gemeente-denhaag/sidenav';
import React from 'react';

const Sidenav = () => {
  return (
    <SidenavComponent>
      <SidenavList>
        <SidenavItem>
          <SidenavLink current={true}>
            <GridIcon />
            Overzicht
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
      <SidenavList>
        <SidenavItem>
          <SidenavLink>
            <CheckCircleIcon />
            Mijn taken
          </SidenavLink>
        </SidenavItem>
        <SidenavItem>
          <SidenavLink>
            <InboxIcon />
            <SidenavLinkLabel>
              Mijn berichten
              <NumberBadge>2</NumberBadge>
            </SidenavLinkLabel>
          </SidenavLink>
        </SidenavItem>
        <SidenavItem>
          <SidenavLink>
            <ArchiveIcon />
            Mijn lopende zaken
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
      <SidenavList>
        <SidenavItem>
          <SidenavLink>
            <UserIcon />
            Mijn gegevens
          </SidenavLink>
        </SidenavItem>
      </SidenavList>
    </SidenavComponent>
  );
};

export default Sidenav;
