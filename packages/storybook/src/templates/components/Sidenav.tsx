import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import { Sidenav as SidenavComponent, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { BadgeCounter } from '@utrecht/component-library-react';
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
            Mijn berichten
            <BadgeCounter>2</BadgeCounter>
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
