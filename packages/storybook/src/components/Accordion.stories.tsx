import { Accordion, AccordionSection } from '@gemeente-denhaag/accordion';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { DescriptionList } from '@gemeente-denhaag/descriptionlist';
import readme from '../../../../components/Accordion/README.md?raw';

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
  component: Accordion,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: readme } },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/eSl0Sclc8t03X76qM1cWyz/%F0%9F%93%95-HDS-Library?node-id=687-2840',
    },
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
