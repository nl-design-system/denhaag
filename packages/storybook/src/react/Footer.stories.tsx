import { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from '@gemeente-denhaag/footer';
import { contactData, footerLegalData, footerSocialData, newsletterData } from '../templates/util';

const exampleArgs = {
  contactData: contactData,
  socialData: footerSocialData,
  newsletterData: newsletterData,
  legalData: footerLegalData,
};

const meta = {
  component: Footer,
  args: exampleArgs,
  tags: ['autodocs'],
} as Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TopOnly: Story = {
  args: {
    contactData: contactData,
    socialData: footerSocialData,
    newsletterData: newsletterData,
    legalData: undefined,
  },
};

export const BottomOnly: Story = {
  args: {
    contactData: undefined,
    socialData: undefined,
    newsletterData: undefined,
    legalData: footerLegalData,
  },
};
