import { StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Heading3 } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import { ArchiveIcon, GridIcon, UserIcon, BookIcon } from '../../../components/Icons/src';
import { Status, StatusProps } from '../../../components/ProcessSteps/src';
import { File } from '../../../components/File/src';
import { Action } from '../../../components/Action/src';
import { ButtonLink } from '@utrecht/component-library-react';

import {
  copyright,
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  linkData,
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
              <SidenavLink current={true}>
                <ArchiveIcon />
                Mijn lopende zaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <BookIcon />
                Mijn thema's
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
            actions={<ButtonLink href="#example">Actie</ButtonLink>}
            relativeDate
          >
            Geef informatie voor uw aanvraag subsidie geluidsisolatie
          </Action>
          <Heading3 className="denhaag-page-content__heading">Status</Heading3>
          <Status {...progressStepsData}></Status>
          <Heading3 className="denhaag-page-content__heading">Documenten</Heading3>
          <File {...linkData} />
          <Action
            className="denhaag-page-content__task"
            dateTime={taskDateTime}
            now={taskNow}
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
