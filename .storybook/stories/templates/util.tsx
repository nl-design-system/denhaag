import { HeaderLogicProps } from '../../../components/Header/src';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YouTubeIcon } from '../../../components/Icons/src';
import React from 'react';

export const headerProps: HeaderLogicProps = {
  breadcrumbs: {
    navigationPath: [
      { label: 'Home', href: 'https://denhaag.nl/' },
      { label: 'MijnDenHaag', href: 'https://denhaag.nl/' },
      { label: 'Mijn lopende zaken', href: 'https://denhaag.nl/' },
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

export const linkData = {
  name: 'Example',
  link: 'test/example.png',
  size: 2000,
  lastUpdated: new Date('Thu Aug 31 2023 11:22:11 GMT+0200'),
};

export const navigationPathData = [
  { label: 'Home', href: 'https://denhaag.nl/' },
  { label: 'MijnDenHaag', href: 'https://denhaag.nl/parkeren/' },
];

export const footerLegalData = [
  { label: 'Sitemap', href: 'https://denhaag.nl/' },
  { label: 'Toegankelijkheid', href: 'https://denhaag.nl/' },
  { label: 'Privacy', href: 'https://denhaag.nl/' },
  { label: 'Proclaimer', href: 'https://denhaag.nl/' },
  { label: 'Disclaimer', href: 'https://denhaag.nl/' },
  { label: 'Voorwaarden', href: 'https://denhaag.nl/' },
];

export const footerSocialData = {
  title: 'Volg ons op',
  links: [
    { icon: <FacebookIcon />, label: 'Facebook', href: 'https://www.facebook.com/gemeenteDH/' },
    { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com/gemeentedenhaag' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/gemeente-den-haag/' },
    { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/gemeentedenhaag/' },
    { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://www.youtube.com/channel/UC5_HpKvZl7Oxr_UimTfC2Jg' },
  ],
};

export const newsletterData = {
  title: 'Meld u aan voor de nieuwsbrief',
  text: 'Blijf gemakkelijk op de hoogte van ontwikkelingen in uw stadsdeel en de belangrijkste zaken van Den Haag.',
  buttonLabel: 'Aanmelden nieuwsbrief',
  href: '#',
};
export const contactData = {
  title: 'Contact',
  links: [
    { label: 'Bel ons op 14070', href: '#' },
    { label: 'Contactformulier', href: '#' },
  ],
  buttonLabel: 'Contactpagina',
  href: 'https://www.denhaag.nl/nl/bestuur-en-organisatie/contact-met-de-gemeente.htm',
};

export const copyright = '© 2022 Gemeente Den Haag';
