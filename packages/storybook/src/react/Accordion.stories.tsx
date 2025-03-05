import { Accordion, AccordionSection } from '@gemeente-denhaag/accordion';
import tokens from '@gemeente-denhaag/design-tokens-components/dist/list.json';
import { Meta, StoryObj } from '@storybook/react';
import readme from '../../../../components/Action/README.md?raw';
import tokensDefinition from '../../../../components/Action/tokens.json';
import React from 'react';
import { Paragraph } from '@gemeente-denhaag/typography';

const exampleArgs = {
  children: (
    <>
      <AccordionSection
        title="Contact"
        description="Hier vindt u uw e-mailadres en telefoonnummer waarmee we u kunnen bereiken."
      >
        <Paragraph>Contactgegevens</Paragraph>
      </AccordionSection>
      <AccordionSection title="Meldingen" description="Stel in waarvoor u meldingen wilt ontvangen en op welke manier">
        <Paragraph>Meldingen</Paragraph>
      </AccordionSection>
    </>
  ),
};

const meta = {
  id: 'react-surfaces-accordion',
  title: 'React/Surfaces/Accordion',
  component: Accordion,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
    tokensPrefix: 'denhaag-accordion',
    tokensDefinition,
    tokens,
  },
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Standalone: Story = {
  render: () => (
    <>
      <Accordion>
        <AccordionSection
          title="Contact"
          description="Hier vindt u uw e-mailadres en telefoonnummer waarmee we u kunnen bereiken."
        >
          <Paragraph>Contactgegevens</Paragraph>
        </AccordionSection>
      </Accordion>
      <Accordion>
        <AccordionSection
          title="Meldingen"
          description="Stel in waarvoor u meldingen wilt ontvangen en op welke manier"
        >
          <Paragraph>Meldingen</Paragraph>
        </AccordionSection>
      </Accordion>
    </>
  ),
};
