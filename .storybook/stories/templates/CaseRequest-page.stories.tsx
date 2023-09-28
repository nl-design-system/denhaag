import { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from '../../../components/Typography/src';
import { Sidenav, SidenavList, SidenavItem, SidenavLink } from '../../../components/Sidenav/src';
import { BadgeCounter } from '../../../components/BadgeCounter/src';
import { ArchiveIcon, CircleInformationIcon, InboxIcon, UserIcon } from '../../../components/Icons/src';
import { Divider } from '../../../components/Divider/src';
import { Link } from '../../../components/Link/src';
import Alert from '../../../components/Alert/src';
import React from 'react';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic, HeaderLogicProps } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { AuthenticationCardGroup } from '../../../components/CardGroup/src/story-template';
import {
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  copyright,
} from '../templates/util';

import './CaseRequest-page.scss';

const meta = {
  title: 'Templates/Case Request Page',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

export default meta;

const loginHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }, { label: 'MijnDenHaag' }],
  },
  userprofileMenu: {
    label: 'Welkom Anne Klap',
    authorisedLoginLabel: 'Ingelogd namens Jason Verploeg',
    navigationGroups: [
      {
        label: 'MijnDenHaag',
        navigation: [
          { label: 'Overzicht', href: '' },
          { label: 'Lopende zaken', href: '' },
          { label: "Thema's", href: '' },
          { label: 'Mijn account', href: '' },
        ],
      },
    ],
  },
};

// Login page

type Story = StoryObj<typeof meta>;

export const Request: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...loginHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content">
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink current href="/#">
                <InboxIcon />
                Label
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <ArchiveIcon />
                Mijn lopende zaken
                <BadgeCounter>2</BadgeCounter>
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                Belastingzaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                WOZ
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                Parkeren
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink href="/#">
                <CircleInformationIcon />
                Erfpacht
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
          <SidenavList>
            <SidenavItem>
              <SidenavLink href="/#">
                <UserIcon />
                Mijn gegevens
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
        <main className="denhaag-page-content__main">
          <Heading2>Aanvraag subsidie geluidsisolatie</Heading2>
        </main>
      </ResponsiveContent>
      <PageFooter>
        <Footer
          newsletterData={newsletterData}
          contactData={contactData}
          legalData={footerLegalData}
          copyrightLabel={copyright}
          socialData={footerSocialData}
        />
      </PageFooter>
    </Page>
  ),
};
