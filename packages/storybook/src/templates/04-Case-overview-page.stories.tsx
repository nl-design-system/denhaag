import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter } from '@utrecht/component-library-react';
import { Heading2 } from '@gemeente-denhaag/typography';
import { Page, PageHeader, PageFooter } from '@gemeente-denhaag/page';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';
import { Footer } from '@gemeente-denhaag/footer';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import {
  GridIcon,
  UserIcon,
  InboxIcon,
  ParkingIcon,
  ArchiveIcon,
  CircleInformationIcon,
} from '@gemeente-denhaag/icons';
import { Tabs } from '@gemeente-denhaag/tab';
import { CaseCard } from '@gemeente-denhaag/card';
import { headerProps, footerLegalData, footerSocialData, newsletterData, contactData, copyright } from './util';

import './template-story.scss';

const meta = {
  title: 'Templates/Zaak Overzicht',
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

const zakenHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [
      { label: 'Home', href: 'https://denhaag.nl/' },
      { label: 'MijnDenHaag', href: 'https://denhaag.nl/' },
      { label: 'Mijn lopende zaken' },
    ],
  },
};

const tabsProps = {
  tabData: [
    { label: 'Lopende Zaken', panelContent: '' },
    { label: 'Afgeronde zaken', panelContent: '' },
  ],
};

export const ZaakOverzicht: StoryObj<typeof meta> = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...zakenHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink>
                <GridIcon />
                Overzicht
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
              <SidenavLink current={true}>
                <ArchiveIcon />
                Mijn lopende zaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <CircleInformationIcon />
                Belastingszaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <CircleInformationIcon />
                WOZ
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <ParkingIcon />
                Parkeren
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <CircleInformationIcon />
                Erfpacht
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <UserIcon />
                Mijn gegevens
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
        <main className="denhaag-page-content__main">
          <Heading2>Mijn lopende zaken</Heading2>
          <Tabs {...tabsProps}></Tabs>
          <section className="denhaag-card-group">
            <CaseCard date={new Date('2020-01-21T00:00:00.000Z')} title="Aanvraag subsidie geluidsisolatie" />
            <CaseCard date={new Date('2020-01-21T00:00:00.000Z')} title="Aanvraag Ooievaarspas" />
          </section>
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

export default meta;
