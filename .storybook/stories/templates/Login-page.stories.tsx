import { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from '../../../components/Typography/src';
import Alert from '../../../components/Alert/src';
import React from 'react';
import { Page, PageHeader, PageFooter } from '../../../components/Page/src';
import { HeaderLogic } from '../../../components/Header/src';
import Footer from '../../../components/Footer/src';
import ResponsiveContent from '../../../components/ResponsiveContent/src';
import { AuthenticationCardGroup } from '../../../components/CardGroup/src/story-template';
import {
  headerProps,
  footerLegalData,
  footerSocialData,
  newsletterData,
  contactData,
  copyright,
} from '../templates/util';

import './story-login.css';

const meta = {
  title: 'Templates/Login page',
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

export default meta;

// Login page

type Story = StoryObj<typeof meta>;

export const Login: Story = {
  render: (args) => (
    <Page {...args}>
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
