import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server.browser';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import { SingleFormioComponent } from './StoryUtil';

type ContentVariant = 'default' | 'success' | 'info' | 'error' | 'warning';

const toContentHtml = (content: string) =>
  /<\/?[a-z][^>]*>/i.test(content)
    ? content
    : renderToStaticMarkup(<p style={{ whiteSpace: 'pre-line' }}>{content}</p>);

const ContentPreview = ({ html, variant }: { html: string; variant: ContentVariant }) => (
  <SingleFormioComponent
    type="content"
    key="content-preview"
    label=""
    extraComponentProperties={{
      key: 'content-preview',
      html: toContentHtml(html),
      customClass: variant === 'default' ? '' : variant,
    }}
  />
);

const meta = {
  id: 'open-forms-content',
  title: 'Open Formulieren/Content',
  component: ContentPreview,
  tags: ['autodocs'],
  argTypes: {
    html: {
      name: 'Inhoud',
      description: 'Typ gewone tekst. Regeleinden blijven behouden. HTML-opmaak is optioneel.',
      control: { type: 'text' },
    },
    variant: {
      name: 'Variant',
      options: ['default', 'success', 'info', 'error', 'warning'],
      control: {
        type: 'select',
        labels: { default: 'Standaard', success: 'Success', info: 'Info', error: 'Error', warning: 'Warning' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Tekstblokken met de lokale Den Haag-styling voor Open Formulieren. Typ gewone tekst bij Inhoud en kies een Variant. U hoeft geen HTML-tags te gebruiken; de tekstkleur en het icoon passen zich automatisch aan. HTML-opmaak blijft optioneel beschikbaar.',
      },
      page: () => (
        <>
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
  args: {
    variant: 'default',
    html: 'Vul uw gegevens in om de aanvraag te starten.\nU kunt uw antwoorden controleren voordat u de aanvraag verstuurt.',
  },
} satisfies Meta<typeof ContentPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    variant: 'success',
    html: 'Uw gegevens zijn opgeslagen. U kunt verder met de volgende stap.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    html: 'Houd uw gegevens bij de hand. U heeft deze nodig om het formulier in te vullen.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    html: 'Uw aanvraag is niet verstuurd. Probeer het opnieuw.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    html: 'Controleer uw gegevens voordat u verdergaat. Zorg dat u alle documenten voor uw aanvraag bij de hand heeft.',
  },
};

export const WithFormatting: Story = {
  name: 'Met opmaak (HTML)',
  args: {
    variant: 'warning',
    html: '<p><strong>Controleer uw gegevens voordat u verdergaat.</strong> Zorg dat u de volgende documenten heeft:</p><ul><li>Een geldig identiteitsbewijs</li><li>De bijlagen voor uw aanvraag</li></ul><p>Doorloop daarna deze stappen:</p><ol><li>Vul het formulier in.</li><li>Controleer en verstuur uw aanvraag.</li></ol>',
  },
};
