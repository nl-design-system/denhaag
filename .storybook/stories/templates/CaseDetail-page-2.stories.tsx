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
import {
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  linkData,
} from '../templates/util';
import './CaseDetail-page.scss';

const meta = {
  title: 'Templates',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

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

const copyright = '© 2022 Gemeente Den Haag';

export const Login: Story = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...headerProps} />
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
          <Heading3 className="denhaag-page-content__heading">Status</Heading3>
          <Status {...progressStepsData}></Status>
          <Heading3 className="denhaag-page-content__heading">Documenten</Heading3>
          <File {...linkData} />
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
