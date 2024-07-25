import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Status } from '@gemeente-denhaag/process-steps';

import readme from '../../../../components/ProcessSteps/README.md?raw';

const exampleArgs = {
  steps: [
    {
      id: 'deelname',
      marker: 1,
      title: 'Deelname aan geluidsonderzoek',
      status: 'checked',
      steps: [{ title: 'Aanmelding ontvangen', status: 'checked' }],
    },
    {
      id: 'onderzoek',
      marker: 2,
      title: 'Onderzoek naar geluidsoverlast',
      status: 'current',
      steps: [
        { title: 'Afspraak meten geluidsoverlast gemaakt', status: 'checked' },
        { title: 'Geluidsoverlast gemeten' },
        { title: 'Onderzoek resultaten verwerkt' },
      ],
    },
    { id: 'uitvoeren', marker: 3, title: 'Uitvoeren van maatregelen' },
    { id: 'klaar', marker: 4, title: 'Maatregelen zijn uitgevoerd' },
  ],
};

const meta = {
  id: 'react-process-steps-status',
  title: 'React/Process Steps/Status',
  component: Status,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Collapsible: Story = {
  args: { ...Default.args, collapsible: true },
};

export const CollapsibleWithExpandedStep: Story = {
  args: {
    ...Default.args,
    collapsible: true,
    expandedSteps: ['deelname'],
    steps: [
      {
        id: 'deelname',
        marker: 1,
        title: 'Deelname aan geluidsonderzoek',
        status: 'checked',
        steps: [{ id: 'deelname-aanmelding', title: 'Aanmelding ontvangen', status: 'checked' }],
      },
      {
        id: 'onderzoek',
        marker: 2,
        title: 'Onderzoek naar geluidsoverlast',
        status: 'current',
        steps: [
          { id: 'onderzoek-afspraak', title: 'Afspraak meten geluidsoverlast gemaakt', status: 'checked' },
          { id: 'onderzoek-geluidsoverlast', title: 'Geluidsoverlast gemeten' },
          { id: 'onderzoek-resultaten', title: 'Onderzoek resultaten verwerkt' },
        ],
      },
      { id: 'uitvoeren', marker: 3, title: 'Uitvoeren van maatregelen' },
      { id: 'klaar', marker: 4, title: 'Maatregelen zijn uitgevoerd' },
    ],
  },
};

export const WithoutSubsteps: Story = {
  args: {
    ...Default.args,
    collapsible: true,
    steps: [
      {
        id: 'getuigen-wijzigen',
        marker: 1,
        title: 'Getuigen wijzigen of meer getuigen uitnodigen',
        status: 'checked',
      },
      {
        id: 'getuigen-definitief',
        marker: 2,
        title: 'Getuigen zijn definitief en bevestigingen van getuigen ontvangen',
        status: 'current',
      },
      { id: 'extras', marker: 3, title: 'Eventuele extras bestellen' },
      { id: 'trouwen', marker: 4, title: 'Trouwen' },
    ],
  },
};

export const WithMetadata: Story = {
  args: {
    ...Default.args,
    collapsible: true,
    steps: [
      {
        id: 'getuigen-wijzigen',
        marker: 1,
        title: 'Getuigen wijzigen of meer getuigen uitnodigen',
        status: 'checked',
        meta: (
          <a className="utrecht-link" href="https://example.com">
            Getuigen wijzigen of meer getuigen uitnodigen
          </a>
        ),
        date: 'Tussen vandaag en 24 februari 2023',
      },
      {
        id: 'getuigen-definitief',
        marker: 2,
        title: 'Getuigen zijn definitief en bevestigingen van getuigen ontvangen',
        status: 'current',
        steps: [{ id: 'getuigen-definitief-aanmelden', title: 'Getuigen aangemeld', status: 'checked' }],
        meta: 'Getuigen zijn definitief en bevestigingen van getuigen ontvangen',
        date: 'Regel het vóór 24 februari 2023',
      },
      {
        id: 'trouwen',
        marker: 4,
        title: 'Trouwen',
        meta: (
          <p className="utrecht-paragraph">
            Jullie gaan trouwen in het{' '}
            <a className="utrecht-link" href="https://example.com">
              Stadhuis Spui
            </a>
          </p>
        ),
        date: 'Op 1 april 2023',
      },
    ],
  },
};

export const WithExpandedMetadata: Story = {
  args: {
    expandedSteps: ['ontwerpen'],
    collapsible: true,
    steps: [
      {
        id: 'verkennen',
        marker: 1,
        title: 'Verkennen',
        status: 'checked',
        date: 'juli 2023',
      },
      {
        id: 'ontwerpen',
        marker: 2,
        title: 'Ontwerpen',
        status: 'current',
        meta: 'Eindelijk tijd om concreet te worden! we schetsen de plannen en leggen het voor om samen tot een beslissing te komen.',
        date: 'aug - sept 2023',
        steps: [
          { id: 'ontwerpen-voorlopig', title: 'Voorlopige schetsontwerp afgerond en gepresenteerd', status: 'checked' },
          { id: 'ontwerpen-stemronde', title: 'Stemronde nummer 01', status: 'checked' },
          { id: 'ontwerpen-feedback', title: 'Verwerken feedback it stemronde', status: 'current' },
          { id: 'ontwerpen-informatieavond', title: 'We organiseren een informatieavond voor bewoners' },
        ],
      },
      {
        id: 'uitvoeren',
        marker: 4,
        title: 'Uitvoeren',
        date: 'okt - nov 2023',
      },
      {
        id: 'afronden',
        marker: 4,
        title: 'Afronden',
        date: 'dec 2023',
      },
    ],
  },
};

export const WithWarning: Story = {
  args: {
    steps: [
      {
        id: 'deelname',
        marker: 1,
        title: 'Deelname aan geluidsonderzoek',
        status: 'checked',
        steps: [{ id: 'deelname-aanmelding', title: 'Aanmelding ontvangen', status: 'checked' }],
      },
      {
        id: 'onderzoek',
        marker: 2,
        title: 'Onderzoek naar geluidsoverlast',
        status: 'warning',
        steps: [
          { id: 'onderzoek-afspraak', title: 'Afspraak meten geluidsoverlast gemaakt', status: 'warning' },
          { id: 'onderzoek-geluidsoverlast', title: 'Geluidsoverlast gemeten', status: 'warning' },
          { id: 'onderzoek-resultaten', title: 'Onderzoek resultaten verwerkt' },
        ],
      },
      { id: 'uitvoeren', marker: 3, title: 'Uitvoeren van maatregelen' },
      { id: 'klaar', marker: 4, title: 'Maatregelen zijn uitgevoerd' },
    ],
  },
};

export const WithError: Story = {
  args: {
    steps: [
      {
        id: 'deelname',
        marker: 1,
        title: 'Deelname aan geluidsonderzoek',
        status: 'checked',
        steps: [{ id: 'deelname-aanmelding', title: 'Aanmelding ontvangen', status: 'checked' }],
      },
      {
        id: 'onderzoek',
        marker: 2,
        title: 'Onderzoek naar geluidsoverlast',
        status: 'error',
        meta: 'Er is geen afspraak gemaakt. De aanvraag is stopgezet. Wilt u toch graag in aanmerking komen voor subsidie? Neem dan contact op met de gemeente via 14070.',
        steps: [{ id: 'onderzoek-afspraak', title: 'Afspraak meten geluidsoverlast gemaakt', status: 'error' }],
      },
      { id: 'uitvoeren', marker: 3, title: 'Uitvoeren van maatregelen' },
      { id: 'klaar', marker: 4, title: 'Maatregelen zijn uitgevoerd' },
    ],
  },
};

export const NonCollapsibleStep: Story = {
  args: {
    expandedSteps: ['onderzoek'],
    collapsible: true,
    steps: [
      {
        id: 'deelname',
        marker: 1,
        title: 'Deelname aan geluidsonderzoek',
        status: 'checked',
        steps: [{ id: 'deelname-aanmelding', title: 'Aanmelding ontvangen', status: 'checked' }],
      },
      {
        id: 'onderzoek',
        marker: 2,
        title: 'Onderzoek naar geluidsoverlast',
        status: 'error',
        meta: 'Er is geen afspraak gemaakt. De aanvraag is stopgezet. Wilt u toch graag in aanmerking komen voor subsidie? Neem dan contact op met de gemeente via 14070.',
        steps: [{ id: 'deelname-afspraak', title: 'Afspraak meten geluidsoverlast gemaakt', status: 'error' }],
        collapsible: false,
      },
      { id: 'uitvoeren', marker: 3, title: 'Uitvoeren van maatregelen' },
      { id: 'klaar', marker: 4, title: 'Maatregelen zijn uitgevoerd' },
    ],
  },
};
