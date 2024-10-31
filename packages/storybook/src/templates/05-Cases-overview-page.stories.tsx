import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from '@gemeente-denhaag/typography';
import { Page, PageHeader, PageFooter } from '@gemeente-denhaag/page';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';
import { Footer } from '@gemeente-denhaag/footer';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { Tabs } from '@gemeente-denhaag/tab';
import { CaseCard } from '@gemeente-denhaag/card';
import '@gemeente-denhaag/card-group';
import {
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  copyright,
  templateLocale,
} from './util';

import './template-story.scss';
import Sidenav from './components/Sidenav';

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
    {
      label: 'Lopende Zaken',
      panelContent: (
        <section className="denhaag-card-group">
          <CaseCard
            date={'2020-01-21T00:00:00.000Z'}
            locale={templateLocale}
            title="Aanvraag subsidie geluidsisolatie"
          />
          <CaseCard date={'2020-01-21T00:00:00.000Z'} locale={templateLocale} title="Aanvraag Ooievaarspas" />
        </section>
      ),
    },
    {
      label: 'Afgeronde zaken',
      panelContent: (
        <section className="denhaag-card-group">
          <CaseCard
            active={false}
            date={'2019-01-21T00:00:00.000Z'}
            locale={templateLocale}
            title="Aanvraag Parkeervergunning"
          />
          <CaseCard
            active={false}
            date={'2019-01-21T00:00:00.000Z'}
            locale={templateLocale}
            title="Aanvraag Omgevingsvergunning"
          />
        </section>
      ),
    },
  ],
};

export const ZaakOverzicht: StoryObj<typeof meta> = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...zakenHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav />
        <main className="denhaag-page-content__main">
          <Heading2>Mijn lopende zaken</Heading2>
          <Tabs {...tabsProps}></Tabs>
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
