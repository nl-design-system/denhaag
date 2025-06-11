import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { Page, PageHeader, PageFooter } from '@gemeente-denhaag/page';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';
import { Footer } from '@gemeente-denhaag/footer';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import {
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  copyright,
  dateFormatLabels,
  templateLocale,
} from './util';
import './messages.scss';
import Sidenav from './components/Sidenav';
import { Action } from '@gemeente-denhaag/action';
import { ButtonLink } from '@gemeente-denhaag/button-link';
import { Heading } from '@gemeente-denhaag/heading';

const meta = {
  title: 'Templates/Berichten Detail',
  args: { className: 'denhaag-messages-page' },
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

const messagesHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [
      { label: 'Home', href: 'https://denhaag.nl/' },
      { label: 'MijnDenHaag', href: 'https://denhaag.nl/' },
      { label: 'Mijn berichten' },
    ],
  },
};

const taskDateTime = '2023-09-30T19:47:36.593Z';
const taskNow = '2023-09-29T19:47:36.593Z';

export const BerichtenDetail: StoryObj<typeof meta> = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...messagesHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav />
        <main className="denhaag-page-content__main">
          <div className="denhaag-page-content__header">
            <Heading level={2}>Betalen van uw parkeerbon</Heading>
            <Paragraph>Bericht ontvangen op 15 januari 2023 om 15.24 uur</Paragraph>
          </div>
          <Action
            className="denhaag-page-content__task"
            dateTime={taskDateTime}
            now={taskNow}
            locale={templateLocale}
            labels={dateFormatLabels}
            actions={
              <ButtonLink href="#example" external>
                Betalen
              </ButtonLink>
            }
            relativeDate
          >
            Betaal uw parkeerbon van € 74,90 voor het parkeren bij Valeriusplein
          </Action>
          <Paragraph className="denhaag-page-content__message">
            Beste mevrouw Klap,
            <br />
            <br />
            U heeft te weinig of geen parkeerkosten betaald voor het parkeren bij Valeriusplein. Daarom heeft u een
            parkeerbon gekregen.
            <br />
            <br />
            Betaal vóór 1 maart 2023 uw parkeerbon van € 74.90.
            <br />
            <br />
            Bent u het niet eens met deze parkeerbon? Dan kunt u bezwaar maken. Vul het formulier Bezwaar maken tegen
            een parkeerbon in.
            <br />
            <br />
            Met vriendelijke groet,
            <br />
            Gemeente Den Haag
          </Paragraph>
          <Action
            className="denhaag-page-content__task"
            dateTime={taskDateTime}
            now={taskNow}
            locale={templateLocale}
            labels={dateFormatLabels}
            actions={
              <ButtonLink href="#example" external>
                Betalen
              </ButtonLink>
            }
            relativeDate
          >
            Betaal uw parkeerbon van € 74,90 voor het parkeren bij Valeriusplein
          </Action>
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
