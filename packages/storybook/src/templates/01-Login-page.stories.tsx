import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  AuthenticationCardGroup,
  ResponsiveContent,
  Footer,
  HeaderLogic,
  HeaderLogicProps,
  Page,
  PageHeader,
  PageFooter,
  Alert,
  Link,
  Heading2,
  Paragraph,
} from '@gemeente-denhaag/components-react';

import { headerProps, footerLegalData, footerSocialData, newsletterData, contactData, copyright } from './util';

import './template-story.scss';

const meta = {
  title: 'Templates/Login',
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [1768, 1280, 768, 360] },
  },
} as Meta<typeof Page>;

const loginPageHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }, { label: 'Inloggen bij MijnDenHaag' }],
  },
  userprofileMenu: undefined,
};

export const Login: StoryObj<typeof meta> = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <HeaderLogic {...loginPageHeaderProps} />
      </PageHeader>
      <ResponsiveContent className="denhaag-page-content">
        <Heading2>Inloggen</Heading2>
        <Paragraph>
          Bent u gemachtigd? <Link href="#">Log in plaats hiervan in als gemachtigde.</Link>
        </Paragraph>
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

export default meta;
