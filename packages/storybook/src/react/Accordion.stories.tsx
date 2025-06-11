import { Accordion, AccordionSection } from '@gemeente-denhaag/accordion';
import tokens from '@gemeente-denhaag/design-tokens-components/dist/list.json';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';

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
        <DescriptionList
          items={[
            { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
            { title: 'Morgawr', detail: 'A sea serpent.' },
            { title: 'Owlman', detail: 'A giant owl-like creature.' },
            { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
            { title: 'Morgawr', detail: 'A sea serpent.' },
            { title: 'Owlman', detail: 'A giant owl-like creature.' },
            { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
            { title: 'Morgawr', detail: 'A sea serpent.' },
            { title: 'Owlman', detail: 'A giant owl-like creature.' },
            { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
            { title: 'Morgawr', detail: 'A sea serpent.' },
            { title: 'Owlman', detail: 'A giant owl-like creature.' },
          ]}
        />
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
    tokensPrefix: 'denhaag-accordion',
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
          <DescriptionList
            items={[
              { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
              { title: 'Morgawr', detail: 'A sea serpent.' },
              { title: 'Owlman', detail: 'A giant owl-like creature.' },
              { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
              { title: 'Morgawr', detail: 'A sea serpent.' },
              { title: 'Owlman', detail: 'A giant owl-like creature.' },
              { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
              { title: 'Morgawr', detail: 'A sea serpent.' },
              { title: 'Owlman', detail: 'A giant owl-like creature.' },
              { title: 'Beast of Bodmin', detail: 'A large feline inhabiting Bodmin Moor.' },
              { title: 'Morgawr', detail: 'A sea serpent.' },
              { title: 'Owlman', detail: 'A giant owl-like creature.' },
            ]}
          />
        </AccordionSection>
      </Accordion>
    </>
  ),
};
