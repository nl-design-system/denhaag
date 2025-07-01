import { NumberBadge } from '@gemeente-denhaag/number-badge';
import { ArchiveIcon, CheckCircleIcon, GridIcon, InboxIcon, UserIcon } from '@gemeente-denhaag/icons';
import {
  SideNavigationBase,
  SideNavigationItem,
  SideNavigationLink,
  SideNavigationLinkLabel,
  SideNavigationList,
} from '@gemeente-denhaag/side-navigation';
import React from 'react';

const SideNavigation = () => {
  return (
    <SideNavigationBase>
      <SideNavigationList>
        <SideNavigationItem>
          <SideNavigationLink current={true}>
            <GridIcon />
            Overzicht
          </SideNavigationLink>
        </SideNavigationItem>
      </SideNavigationList>
      <SideNavigationList>
        <SideNavigationItem>
          <SideNavigationLink>
            <CheckCircleIcon />
            Mijn taken
          </SideNavigationLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationLink>
            <InboxIcon />
            <SideNavigationLinkLabel>
              Mijn berichten
              <NumberBadge>2</NumberBadge>
            </SideNavigationLinkLabel>
          </SideNavigationLink>
        </SideNavigationItem>
        <SideNavigationItem>
          <SideNavigationLink>
            <ArchiveIcon />
            Mijn lopende zaken
          </SideNavigationLink>
        </SideNavigationItem>
      </SideNavigationList>
      <SideNavigationList>
        <SideNavigationItem>
          <SideNavigationLink>
            <UserIcon />
            Mijn gegevens
          </SideNavigationLink>
        </SideNavigationItem>
      </SideNavigationList>
    </SideNavigationBase>
  );
};

export default SideNavigation;
