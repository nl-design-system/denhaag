import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/cta-event';

import '../../../../components/CtaEvent/src/index';
import readme from '../../../../components/CtaEvent/README.md?raw';

const meta = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <a className="denhaag-cta-event" href="#event-url">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">16</span>
        <span className="denhaag-cta-event__month">sep</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Fiets naar je werk dag</h3>
        <time dateTime="2021-09-16">Donderdag 16 september 2021</time>
      </div>
    </a>
  ),
};

export const Hovered: Story = {
  render: () => (
    <a className="denhaag-cta-event denhaag-cta-event--hover" href="#event-url">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">31</span>
        <span className="denhaag-cta-event__month">dec</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Oudjaarsdag</h3>
        <time dateTime="2021-12-31">Vrijdag 31 december 2021</time>
      </div>
    </a>
  ),
};

export const Focused: Story = {
  render: () => (
    <a className="denhaag-cta-event denhaag-cta-event--focus" href="#event-url">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">31</span>
        <span className="denhaag-cta-event__month">dec</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Oudjaarsdag</h3>
        <time dateTime="2021-12-31">Vrijdag 31 december 2021</time>
      </div>
    </a>
  ),
};

export const Today: Story = {
  render: () => (
    <a className="denhaag-cta-event" href="#event-url" aria-current="date">
      <div className="denhaag-cta-event__date" aria-hidden="true">
        <span className="denhaag-cta-event__day">16</span>
        <span className="denhaag-cta-event__month">dec</span>
      </div>
      <div className="denhaag-cta-event__excerpt">
        <h3 className="denhaag-cta-event__title">Werkdag</h3>
        <time dateTime="2021-12-16">Donderdag 16 december 2021</time>
      </div>
    </a>
  ),
};

export const Grouped: Story = {
  render: () => (
    <>
      <a className="denhaag-cta-event" href="#event-url">
        <div className="denhaag-cta-event__date" aria-hidden="true">
          <span className="denhaag-cta-event__day">26</span>
          <span className="denhaag-cta-event__month">dec</span>
        </div>
        <div className="denhaag-cta-event__excerpt">
          <h3 className="denhaag-cta-event__title">Kerstdiner</h3>
          <time dateTime="2021-12-26">Zondag 26 december 2021</time>
        </div>
      </a>
      <a className="denhaag-cta-event" href="#event-url">
        <div className="denhaag-cta-event__date" aria-hidden="true">
          <span className="denhaag-cta-event__day">31</span>
          <span className="denhaag-cta-event__month">dec</span>
        </div>
        <div className="denhaag-cta-event__excerpt">
          <h3 className="denhaag-cta-event__title">Oudjaarsdag</h3>
          <time dateTime="2021-12-31">Vrijdag 31 december 2021</time>
        </div>
      </a>
      <a className="denhaag-cta-event" href="#event-url">
        <div className="denhaag-cta-event__date" aria-hidden="true">
          <span className="denhaag-cta-event__day">01</span>
          <span className="denhaag-cta-event__month">jan</span>
        </div>
        <div className="denhaag-cta-event__excerpt">
          <h3 className="denhaag-cta-event__title">Nieuwjaarsdag</h3>
          <time dateTime="2021-01-01">Zaterdag 1 januari 2022</time>
        </div>
      </a>
    </>
  ),
};
