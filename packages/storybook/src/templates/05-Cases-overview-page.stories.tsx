import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@gemeente-denhaag/heading';
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
import './cases.scss';
import Sidenav from './components/Sidenav';
import { formatDate, longDateOptions } from '@gemeente-denhaag/utils';

const meta = {
  title: 'Templates/Zaak Overzicht',
  args: { className: 'denhaag-cases-page' },
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
      { label: 'Mijn lopende zaken', href: 'https://denhaag.nl/' },
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
            context={
              <time dateTime={new Date('2020-01-21').toISOString()}>
                {formatDate({ dateTime: '2020-01-21', locale: templateLocale, format: longDateOptions })[0]}
              </time>
            }
            title="Aanvraag subsidie geluidsisolatie"
          />
          <CaseCard
            context={
              <time dateTime={new Date('2020-01-21').toISOString()}>
                {formatDate({ dateTime: '2020-01-21', locale: templateLocale, format: longDateOptions })[0]}
              </time>
            }
            title="Aanvraag Ooievaarspas"
          />
        </section>
      ),
    },
    {
      label: 'Afgeronde zaken',
      panelContent: (
        <section className="denhaag-card-group">
          <CaseCard
            appearance="archived"
            title="Aanvraag Parkeervergunning"
            context={
              <time dateTime={new Date('2020-01-21').toISOString()}>
                {formatDate({ dateTime: '2020-01-21', locale: templateLocale, format: longDateOptions })[0]}
              </time>
            }
          />
          <CaseCard
            appearance="archived"
            title="Aanvraag Omgevingsvergunning"
            context={
              <time dateTime={new Date('2020-01-21').toISOString()}>
                {formatDate({ dateTime: '2020-01-21', locale: templateLocale, format: longDateOptions })[0]}
              </time>
            }
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
          <Heading level={2}>Mijn lopende zaken</Heading>
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
