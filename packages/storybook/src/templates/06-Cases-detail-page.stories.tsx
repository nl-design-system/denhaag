import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Action } from '@gemeente-denhaag/action';
import { Heading } from '@gemeente-denhaag/heading';
import { Page, PageHeader, PageFooter } from '@gemeente-denhaag/page';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';
import { Footer } from '@gemeente-denhaag/footer';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { Status, StatusProps } from '@gemeente-denhaag/process-steps';
import { ContactTimeline, ContactTimelineProps } from '@gemeente-denhaag/contact-timeline';
import { File } from '@gemeente-denhaag/file';
import {
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  copyright,
  dateFormatLabels,
  linkData,
  templateLocale,
} from './util';

import './template-story.scss';
import SideNavigation from './components/SideNavigation';
import { ButtonLink } from '@gemeente-denhaag/button-link';

const meta = {
  title: 'Templates/Zaak Detail',
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

const progressStepsData: StatusProps = {
  collapsible: true,
  expandedSteps: ['onderzoek'],
  steps: [
    {
      id: 'deelname',
      marker: 1,
      title: 'Deelname aan geluidsonderzoek',
      status: 'checked',
      steps: [{ id: 'aanmelding', title: 'Aanmelding ontvangen', status: 'checked' }],
    },
    {
      id: 'onderzoek',
      marker: 2,
      title: 'Onderzoek naar geluidsoverlast',
      status: 'current',
      steps: [{ id: 'geluidsoverlast', title: 'Afspraak meten geluidsoverlast gemaakt (afspraak op 24 mei)' }],
    },
    {
      id: 'uitvoeren',
      marker: 3,
      title: 'Uitvoeren van maatregelen',
    },
    {
      id: 'klaar',
      marker: 4,
      title: 'Maatregelen zijn uitgevoerd',
    },
  ],
};

const contactTimelineData: ContactTimelineProps = {
  labels: { today: 'vandaag', yesterday: 'gisteren' },
  locale: templateLocale,
  collapsible: true,
  items: [
    {
      id: '1',
      title: 'Herinnering: Geef informatie',
      channel: 'mail',
      isoDate: new Date().toISOString(),
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '2',
      title: 'Geef informatie',
      channel: 'mail',
      isoDate: new Date(Date.now() - 864e5).toISOString(),
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '3',
      title: 'Tip: u heeft recht op extra subsidie, zie hier een extra lange regel',
      channel: 'mail',
      isoDate: '2023-01-06T09:17:03.137Z',
      description:
        'Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving. Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving.',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '4',
      title: 'Status is veranderd',
      channel: 'mail',
      isoDate: '2022-12-01T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
      file: <File {...linkData} />,
    },
    {
      id: '5',
      title: 'Mijn vraag',
      channel: 'vraag',
      isoDate: '2022-11-29T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'A. Klap',
    },
    {
      id: '6',
      title: 'Gesprek over afspraak met adviseur',
      channel: 'telefoon',
      isoDate: '2022-11-12T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '7',
      title: 'Kosten onderzoek en verbeteringen',
      channel: 'brief',
      isoDate: '2022-11-10T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
  ],
};

const taskDateTime = '2023-09-30T19:47:36.593Z';
const taskNow = '2023-09-28T19:47:36.593Z';

export const ZaakDetail: StoryObj<typeof meta> = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...zakenHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <SideNavigation />
        <main className="denhaag-page-content__main">
          <Heading level={2}>Aanvraag subsidie geluidsisolatie</Heading>
          <Action
            className="denhaag-page-content__task"
            dateTime={taskDateTime}
            now={taskNow}
            locale={templateLocale}
            labels={dateFormatLabels}
            actions={<ButtonLink href="#example">Actie</ButtonLink>}
            relativeDate
          >
            Geef informatie voor uw aanvraag subsidie geluidsisolatie
          </Action>
          <Heading level={3} className="denhaag-page-content__heading">
            Status
          </Heading>
          <Status {...progressStepsData}></Status>
          <Heading level={3} className="denhaag-page-content__heading">
            Documenten
          </Heading>
          <File {...linkData} />
          <Heading level={3} className="denhaag-page-content__heading">
            Eerdere contactmomenten
          </Heading>
          <ContactTimeline {...contactTimelineData} />
          <Action
            className="denhaag-page-content__task"
            dateTime={taskDateTime}
            now={taskNow}
            locale={templateLocale}
            labels={dateFormatLabels}
            actions={<ButtonLink href="#example">Actie</ButtonLink>}
            relativeDate
          >
            Geef informatie voor uw aanvraag subsidie geluidsisolatie
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
