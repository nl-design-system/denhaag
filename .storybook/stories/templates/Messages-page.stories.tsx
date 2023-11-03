import React from 'react';
import { Meta, StoryObj } from '@storybook/addon-docs';
import { Heading2 } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import {
  ArchiveIcon,
  GridIcon,
  UserIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  BookIcon,
  InboxIcon,
} from '../../../components/Icons/src';
import { dateFormatLabels } from './util';
import { Action } from '../../../components/Action/src';
import { Table, TableHead, TableHeader, TableRow } from '../../../components/Table/src';

import './Messages-page.scss';

const meta = {
  title: 'Templates/MessagesPage',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

const exampleArgs = {
  breadcrumbs: {
    navigationPath: [
      { label: 'Home', href: 'https://denhaag.nl/' },
      { label: 'MijnDenHaag', href: 'https://denhaag.nl/' },
      { label: 'Mijn berichten', href: 'https://denhaag.nl/' },
    ],
  },
  userprofileMenu: {
    label: 'Welkom Anne Klap',
    authorisedLoginLabel: 'Ingelogd namens Jason Verploeg',
    navigationGroups: [
      {
        label: 'MijnDenHaag',
        navigation: [
          { label: 'Overzicht', href: '' },
          { label: 'Lopende zaken', href: '' },
          { label: "Thema's", href: '' },
          { label: 'Mijn account', href: '' },
        ],
      },
    ],
  },
  languageSwitcherMenu: {
    currentLanguageLabel: 'NL',
    languageSwitcherProps: {
      variant: 'button' as 'button',
      label: 'Kies uw voorkeurstaal',
      languages: [
        {
          id: 'nl',
          label: 'Nederlands',
          linkProps: { href: '#nl', lang: 'nl', hrefLang: 'nl-NL' },
          active: true,
        },
        {
          id: 'en',
          label: 'Engels',
          linkProps: { href: '#en', lang: 'en', hrefLang: 'en-GB' },
          active: false,
        },
        {
          id: 'fr',
          label: 'Français',
          linkProps: { href: '#fr', lang: 'fr', hrefLang: 'fr-FR' },
          active: false,
        },
      ],
    },
  },
  logoutButton: {
    label: 'Uitloggen',
    onLogoutClick: () => {},
  },
  mobileMenu: {
    openLabel: 'Menu',
    closeLabel: 'Sluiten',
    navigation: [
      { label: 'Home', href: 'https://www.denhaag.nl' },
      {
        label: 'Onderwerpen',
        navigation: [
          {
            label: 'Omgeving',
            navigation: [
              { label: 'Parkeren', href: 'https://www.denhaag.nl/parkeren' },
              { label: 'Afval', href: 'https://www.denhaag.nl/afval' },
            ],
          },
          {
            label: 'Wonen',
            navigation: [
              { label: 'Verhuizen en migratie', href: 'https://www.denhaag.nl/verhuizen' },
              { label: 'Belastingen', href: 'https://www.denhaag.nl/belastingen' },
            ],
          },
        ],
      },
      {
        label: 'MijnDenHaag',
        navigation: [
          { label: 'Overzicht', href: 'https://klantportaal.denhaag.nl/overzicht' },
          { label: 'Mijn berichten', href: 'https//klantenportaal.denhaag.nl/berichten' },
          { label: 'Lopende zaken', href: 'https://klantportaal.denhaag.nl/zaken' },
          { label: "Thema's", href: 'https://klantportaal.denhaag.nl/themas' },
          { label: 'Mijn account', href: 'https://klantportaal.denhaag.nl/account' },
        ],
      },
    ],
  },
};

const footerLegalData = [
  { label: 'Sitemap', href: 'https://denhaag.nl/' },
  { label: 'Toegankelijkheid', href: 'https://denhaag.nl/' },
  { label: 'Privacy', href: 'https://denhaag.nl/' },
  { label: 'Proclaimer', href: 'https://denhaag.nl/' },
  { label: 'Disclaimer', href: 'https://denhaag.nl/' },
  { label: 'Voorwaarden', href: 'https://denhaag.nl/' },
];

const footerSocialData = {
  title: 'Volg ons op',
  links: [
    { icon: <FacebookIcon />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <TwitterIcon />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <LinkedInIcon />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <InstagramIcon />, label: 'Facebook', href: 'https://facebook.com' },
    { icon: <YouTubeIcon />, label: 'Facebook', href: 'https://facebook.com' },
  ],
};

const newsletterData = {
  title: 'Meld u aan voor de nieuwsbrief',
  text: 'Blijf gemakkelijk op de hoogte van ontwikkelingen in uw stadsdeel en de belangrijkste zaken van Den Haag.',
  buttonLabel: 'Aanmelden nieuwsbrief',
  href: '#',
};

const contactData = {
  title: 'Contact',
  links: [
    { label: 'Bel ons op 14070', href: '#' },
    { label: 'Contactformulier', href: '#' },
  ],
  buttonLabel: 'Contactpagina',
  href: 'https://www.denhaag.nl/nl/bestuur-en-organisatie/contact-met-de-gemeente.htm',
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

const copyright = '© 2022 Gemeente Den Haag';

export const MessagesPage: StoryObj<typeof meta> = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...exampleArgs} />
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
            <Action link={m.link} dateTime={m.dateTime} now={currentDate} labels={dateFormatLabels}>
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
