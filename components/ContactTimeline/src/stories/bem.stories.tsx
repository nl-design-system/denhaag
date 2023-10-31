import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { File } from '@gemeente-denhaag/file';
import * as ReactDOMServer from 'react-dom/server';
import readme from '../../README.md?raw';
import ContactTimeline from '../index';
import { ContactTimelineProps } from '../ContactTimeline';

const exampleArgs: ContactTimelineProps = {
  todayLabel: 'vandaag',
  items: [
    {
      id: '1',
      title: 'Herinnering: Geef informatie',
      channel: 'mail',
      isoDate: new Date().toISOString(),
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '2',
      title: 'Geef informatie',
      channel: 'mail',
      isoDate: '2023-01-23T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '3',
      title: 'Tip: u heeft recht op extra subsidie, zie hier een extra lange regel',
      channel: 'mail',
      isoDate: '2023-01-06T09:17:03.137Z',
      description:
        'Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving. Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving.',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '4',
      title: 'Status is veranderd',
      channel: 'mail',
      isoDate: '2022-12-01T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '5',
      title: 'Mijn vraag',
      channel: 'vraag',
      isoDate: '2022-11-29T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Anna Klap',
    },
    {
      id: '6',
      title: 'Gesprek over afspraak met adviseur',
      channel: 'telefoon',
      isoDate: '2022-11-12T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '7',
      title: 'Kosten onderzoek en verbeteringen',
      channel: 'brief',
      isoDate: '2022-11-10T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
  ],
};

const exampleArgsWithoutSender: ContactTimelineProps = {
  todayLabel: 'vandaag',
  collapsible: true,
  expandedItems: ['4'],
  items: [
    {
      id: '1',
      title: 'Herinnering: Geef informatie',
      channel: 'mail',
      isoDate: new Date().toISOString(),
      description: 'Hier komt de uitgebreide beschrijving',
    },
    {
      id: '2',
      title: 'Geef informatie',
      channel: 'mail',
      isoDate: '2023-01-23T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
    },
    {
      id: '3',
      title: 'Tip: u heeft recht op extra subsidie, zie hier een extra lange regel',
      channel: 'mail',
      isoDate: '2023-01-06T09:17:03.137Z',
      description:
        'Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving. Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving.',
    },
    {
      id: '4',
      title: 'Status is veranderd',
      channel: 'mail',
      isoDate: '2022-12-01T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
    },
    {
      id: '5',
      title: 'Mijn vraag',
      channel: 'vraag',
      isoDate: '2022-11-29T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
    },
    {
      id: '6',
      title: 'Gesprek over afspraak met adviseur',
      channel: 'telefoon',
      isoDate: '2022-11-12T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
    },
    {
      id: '7',
      title: 'Kosten onderzoek en verbeteringen',
      channel: 'brief',
      isoDate: '2022-11-10T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
    },
  ],
};

const exampleArgsWithFile: ContactTimelineProps = {
  todayLabel: 'vandaag',
  collapsible: true,
  expandedItems: ['4'],
  items: [
    {
      id: '1',
      title: 'Herinnering: Geef informatie',
      channel: 'mail',
      isoDate: new Date().toISOString(),
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '2',
      title: 'Geef informatie',
      channel: 'mail',
      isoDate: '2023-01-23T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '3',
      title: 'Tip: u heeft recht op extra subsidie, zie hier een extra lange regel',
      channel: 'mail',
      isoDate: '2023-01-06T09:17:03.137Z',
      description:
        'Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving. Hier komt de uitgebreide beschrijving, en hier een extra lange uitgebreide beschrijving.',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '4',
      title: 'Status is veranderd',
      channel: 'mail',
      isoDate: '2022-12-01T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
      file: (
        <File
          name="example3"
          link="test.png"
          extension="png"
          size={2000}
          lastUpdated="Thu Aug 31 2023 11:22:11 GMT+0200"
        />
      ),
    },
    {
      id: '5',
      title: 'Mijn vraag',
      channel: 'vraag',
      isoDate: '2022-11-29T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Anna Klap',
    },
    {
      id: '6',
      title: 'Gesprek over afspraak met adviseur',
      channel: 'telefoon',
      isoDate: '2022-11-12T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
    {
      id: '7',
      title: 'Kosten onderzoek en verbeteringen',
      channel: 'brief',
      isoDate: '2022-11-10T09:17:03.137Z',
      description: 'Hier komt de uitgebreide beschrijving',
      sender: 'Gemeente Den Haag',
    },
  ],
};

const meta = {
  title: 'CSS/Process Steps/Contact Timeline',
  id: 'css-contact-timeline',
  component: ContactTimeline,
  args: exampleArgs,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
      source: { type: 'dynamic' },
      transformSource: (src, storyContext) => {
        if (storyContext.component) {
          return ReactDOMServer.renderToStaticMarkup(storyContext.component(storyContext.parameters.args));
        }
        return src;
      },
    },
  },
} as Meta<typeof ContactTimeline>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Collapsible: Story = {
  args: { ...Default.args, collapsible: true },
};

export const CollapsibleWithExpandedItem: Story = {
  args: { ...Default.args, collapsible: true, expandedItems: ['3'] },
};

export const WithoutSender: Story = {
  args: exampleArgsWithoutSender,
};

export const WithFile: Story = {
  args: exampleArgsWithFile,
};
