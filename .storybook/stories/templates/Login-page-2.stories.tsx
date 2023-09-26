import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { AuthenticationCardGroup } from '../../../components/CardGroup/src/story-template';
import { Heading2 } from '../../../components/Typography/src';
import { Alert } from '../../../components/Alert/src';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon } from '../../../components/Icons/src';

const meta = {
  title: 'Templates',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
  component: Page,
  id: 'template-login-page',
} as Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

const headerProps = {
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }],
  },
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
    { icon: <FacebookIcon />, label: 'Facebook', href: 'https://www.facebook.com/gemeenteDH/' },
    { icon: <TwitterIcon />, label: 'Twitter', href: 'https://twitter.com/gemeentedenhaag' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/gemeente-den-haag/' },
    { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/gemeentedenhaag/' },
    { icon: <YouTubeIcon />, label: 'YouTube', href: 'https://www.youtube.com/channel/UC5_HpKvZl7Oxr_UimTfC2Jg' },
  ],
};

const copyright = '© 2022 Gemeente Den Haag';

export const LoginPage: Story = {
  render: () => (
    <Page>
      <PageHeader>
        <HeaderLogic {...headerProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content">
        <Heading2>Inloggen</Heading2>
        <AuthenticationCardGroup cards={['DigiD', 'eHerkenning', 'eIDAS']} responsive />
        <Heading2>Inloggen als gemachtigde</Heading2>
        <Alert
          text=""
          title="Om in te loggen als gemachtigde heeft u een geldige machtiging nodig."
          variant="info"
          className="denhaag-authentication__alert"
        />
        <AuthenticationCardGroup cards={['DigiD', 'eHerkenning']} responsive />
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
