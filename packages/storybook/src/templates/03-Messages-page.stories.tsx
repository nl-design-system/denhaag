import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Action } from '@gemeente-denhaag/action';
import { Heading2 } from '@gemeente-denhaag/typography';
import { Page, PageHeader, PageFooter } from '@gemeente-denhaag/page';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';
import { Footer } from '@gemeente-denhaag/footer';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '@gemeente-denhaag/sidenav';
import { GridIcon, UserIcon, InboxIcon, ArchiveIcon, BookIcon } from '@gemeente-denhaag/icons';
import { Table, TableHead, TableRow, TableHeader } from '@gemeente-denhaag/table';

import {
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  copyright,
  dateFormatLabels,
} from './util';

import './Messages-page.scss';

const meta = {
  title: 'Templates/Berichten',
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
      { label: 'Mijn lopende zaken' },
    ],
  },
};

const currentDate = '2023-10-05T06:41:34.427Z';
const messages = [
  {
    new: true,
    title: 'Herinnering: Informatie geven voor uw aanvraag subsidie geluidsisolatie',
    dateTime: '2023-10-05T06:41:34.427Z',
    link: '#example',
  },
  {
    new: true,
    title: 'Betalen van uw parkeerbon',
    dateTime: '2023-10-04T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Informatie geven voor uw aanvraag Ooievaarspas',
    dateTime: '2023-09-30T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Tip: recht op subsidie',
    dateTime: '2023-08-28T19:47:36.593Z',
    link: '#example',
  },
  {
    title: 'Informatie geven voor uw aanvraag subsidie geluidsisolatie',
    dateTime: '2023-06-15T19:47:36.593Z',
    link: '#example',
  },
];

export const Berichten: StoryObj<typeof meta> = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...messagesHeaderProps} />
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
                <InboxIcon />
                Mijn berichten
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <ArchiveIcon />
                Mijn lopende zaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <BookIcon />
                Mijn thema&apos;s
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
          <Heading2>Mijn berichten</Heading2>
          <Table className="denhaag-page-content__table">
            <TableHead>
              <TableRow>
                <TableHeader>Onderwerp</TableHeader>
                <TableHeader className="denhaag-page-content__table-header--right">Datum bericht</TableHeader>
              </TableRow>
            </TableHead>
          </Table>
          {messages.map((m) => (
            <Action key={m.title} link={m.link} dateTime={m.dateTime} now={currentDate} labels={dateFormatLabels}>
              {m.new ? <strong>{m.title}</strong> : m.title}
            </Action>
          ))}
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
