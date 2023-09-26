import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Heading2, Paragraph } from '../../../components/Typography/src';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic, HeaderLogicProps } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { Sidenav, SidenavItem, SidenavLink, SidenavList } from '../../../components/Sidenav/src';
import {
  ArchiveIcon,
  FavoriteIcon,
  GridIcon,
  UserIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
} from '../../../components/Icons/src';

import './story-login.css';

const meta = {
  title: 'Templates/Overview page',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

const headerProps: HeaderLogicProps = {
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }],
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
      variant: 'button',
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
          { label: 'Lopende zaken', href: 'https://klantportaal.denhaag.nl/zaken' },
          { label: "Thema's", href: 'https://klantportaal.denhaag.nl/themas' },
          { label: 'Mijn account', href: 'https://klantportaal.denhaag.nl/account' },
        ],
      },
    ],
  },
};

const navigationPathData = [
  { label: 'Home', href: 'https://denhaag.nl/' },
  { label: 'MijnDenHaag', href: 'https://denhaag.nl/parkeren/' },
];

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

const copyright = '© 2022 Gemeente Den Haag';
export const LoginPage: Story = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...headerProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content denhaag-responsive-content--sidebar">
        <Sidenav>
          <SidenavList>
            <SidenavItem>
              <SidenavLink current={true}>
                <GridIcon />
                Overzicht
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <ArchiveIcon />
                Lopende zaken
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <FavoriteIcon />
                Thema's
              </SidenavLink>
            </SidenavItem>
            <SidenavItem>
              <SidenavLink>
                <UserIcon />
                Mijn account
              </SidenavLink>
            </SidenavItem>
          </SidenavList>
        </Sidenav>
        <main className="denhaag-page-content__main">
          <Heading2>Hallo, Anne Klap!</Heading2>
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
