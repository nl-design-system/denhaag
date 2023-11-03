import { StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Heading3 } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import {
  GridIcon,
  UserIcon,
  InboxIcon,
  ParkingIcon,
  ArchiveIcon,
  CircleInformationIcon,
} from '../../../components/Icons/src';
import { Status, StatusProps } from '../../../components/ProcessSteps/src';
import { File } from '../../../components/File/src';
import ContactTimeline, { ContactTimelineProps } from '../../../components/ContactTimeline/src';
import { Action } from '../../../components/Action/src';
import { BadgeCounter, ButtonLink } from '@utrecht/component-library-react';

import {
  copyright,
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  linkData,
  dateFormatLabels,
} from './util';

import './template-story.scss';

const meta = {
  title: 'Templates/ZaakDetailPagina',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const caseDetailPageHeaderProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [
      { label: 'Home', href: 'https://denhaag.nl/' },
      { label: 'MijnDenHaag', href: '#' },
      { label: 'Mijn lopende zaken', href: '#' },
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

export const ZaakDetailPagina: Story = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...caseDetailPageHeaderProps} />
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
          <Heading2>Aanvraag subsidie geluidsisolatie</Heading2>
          <Action
            className="denhaag-page-content__task"
            dateTime={taskDateTime}
            now={taskNow}
            labels={dateFormatLabels}
            actions={<ButtonLink href="#example">Actie</ButtonLink>}
            relativeDate
          >
            Geef informatie voor uw aanvraag subsidie geluidsisolatie
          </Action>
          <Heading3 className="denhaag-page-content__heading">Status</Heading3>
          <Status {...progressStepsData}></Status>
          <Heading3 className="denhaag-page-content__heading">Documenten</Heading3>
          <File {...linkData} />
          <Heading3 className="denhaag-page-content__heading">Eerdere contactmomenten</Heading3>
          <ContactTimeline {...contactTimelineData} />
          <Action
            className="denhaag-page-content__task"
            dateTime={taskDateTime}
            now={taskNow}
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
