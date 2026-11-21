import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import AppDisplay from '@open-formulieren/sdk/components/AppDisplay.js';
import Card from '@open-formulieren/sdk/components/Card.js';
import Body from '@open-formulieren/sdk/components/Body.js';
import './styles';

const FormTitlePreview = ({ title }: { title: string }) => (
  <div className="utrecht-page">
    <AppDisplay>
      <Card title={title}>
        <Body>Vul het formulier in. U kunt uw gegevens controleren voordat u de aanvraag verstuurt.</Body>
      </Card>
    </AppDisplay>
  </div>
);

const meta = {
  title: 'Open Formulieren/Formuliertitel',
  component: FormTitlePreview,
  tags: ['autodocs'],
  args: {
    title: 'Verhuizing doorgeven binnen Den Haag',
  },
  argTypes: {
    title: {
      name: 'Formuliertitel',
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'The page title at the start of an Open Forms form, rendered by the SDK. It remains an H1 at every screen size. At widths up to 768px, it uses the H2 font size. Open the Desktop or Mobile story to compare the layouts, or change the title to test wrapping.',
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
} satisfies Meta<typeof FormTitlePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
};

export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobile2', isRotated: false },
  },
};
