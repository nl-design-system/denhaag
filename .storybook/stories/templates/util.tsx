import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon } from '../../../components/Icons/src';
import React from 'react';

export const headerProps = {
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }],
  },
};

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
