import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Page, PageHeader, PageFooter } from '@gemeente-denhaag/page';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';
import { Footer } from '@gemeente-denhaag/footer';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { copyright, headerProps, footerLegalData, footerSocialData, newsletterData, contactData } from './util';
import { Heading } from '@gemeente-denhaag/heading';

import './template-story.scss';
import SideNavigation from './components/SideNavigation';

const meta = {
  title: 'Templates/Overview',
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

const overviewHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }, { label: 'MijnDenHaag' }],
  },
};

export const Overview: StoryObj<typeof meta> = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...overviewHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <SideNavigation />
        <main className="denhaag-page-content__main">
          <Heading level={2}>Hallo, Anne Klap!</Heading>
          <Paragraph>
            In MijnDenHaag kunt u zelf u persoonlijke zaken regelen wanneer u het uitkomt. Denk aan zaken zoals het zien
            wanneer uw aanvraag klaar is of het bijkopen van extra parkeertegoed.
          </Paragraph>
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
