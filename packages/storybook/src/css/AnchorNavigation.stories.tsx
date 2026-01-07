import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/anchor-navigation';

import readme from '../../../../components/AnchorNavigation/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/AnchorNavigation/package.json';

const meta = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
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
    <>
      <nav className="denhaag-anchor-navigation" aria-label="Op deze pagina">
        <ol className="denhaag-anchor-navigation__list">
          <li>
            <a href="#in-het-kort" className="denhaag-anchor-navigation__link">
              In het kort
            </a>
          </li>
          <li>
            <a href="#voorwaarden" className="denhaag-anchor-navigation__link">
              Voorwaarden
            </a>
          </li>
          <li>
            <a href="#proces" className="denhaag-anchor-navigation__link">
              Proces
            </a>
          </li>
          <li>
            <a href="#kosten" className="denhaag-anchor-navigation__link">
              Kosten
            </a>
          </li>
          <li>
            <a href="#aanvragen" className="denhaag-anchor-navigation__link">
              Aanvragen
            </a>
          </li>
          <li>
            <a href="#veelgestelde-vragen" className="denhaag-anchor-navigation__link">
              Veelgestelde vragen
            </a>
          </li>
        </ol>
      </nav>
      <button className="denhaag-button denhaag-button--start-icon">
        <span className="denhaag-button__icon">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="denhaag-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </span>
        Direct aanvragen
      </button>
    </>
  ),
};

export const Hover: Story = {
  render: () => (
    <>
      <nav className="denhaag-anchor-navigation" aria-label="Op deze pagina">
        <ol className="denhaag-anchor-navigation__list">
          <li>
            <a href="#in-het-kort" className="denhaag-anchor-navigation__link">
              In het kort
            </a>
          </li>
          <li>
            <a href="#voorwaarden" className="denhaag-anchor-navigation__link denhaag-anchor-navigation__link--hover">
              Voorwaarden
            </a>
          </li>
          <li>
            <a href="#proces" className="denhaag-anchor-navigation__link">
              Proces
            </a>
          </li>
          <li>
            <a href="#kosten" className="denhaag-anchor-navigation__link">
              Kosten
            </a>
          </li>
          <li>
            <a href="#aanvragen" className="denhaag-anchor-navigation__link">
              Aanvragen
            </a>
          </li>
          <li>
            <a href="#veelgestelde-vragen" className="denhaag-anchor-navigation__link">
              Veelgestelde vragen
            </a>
          </li>
        </ol>
      </nav>
      <button className="denhaag-button denhaag-button--start-icon">
        <span className="denhaag-button__icon">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="denhaag-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </span>
        Direct aanvragen
      </button>
    </>
  ),
};

export const Focus: Story = {
  render: () => (
    <>
      <nav className="denhaag-anchor-navigation" aria-label="Op deze pagina">
        <ol className="denhaag-anchor-navigation__list">
          <li>
            <a href="#in-het-kort" className="denhaag-anchor-navigation__link">
              In het kort
            </a>
          </li>
          <li>
            <a href="#voorwaarden" className="denhaag-anchor-navigation__link denhaag-anchor-navigation__link--focus">
              Voorwaarden
            </a>
          </li>
          <li>
            <a href="#proces" className="denhaag-anchor-navigation__link">
              Proces
            </a>
          </li>
          <li>
            <a href="#kosten" className="denhaag-anchor-navigation__link">
              Kosten
            </a>
          </li>
          <li>
            <a href="#aanvragen" className="denhaag-anchor-navigation__link">
              Aanvragen
            </a>
          </li>
          <li>
            <a href="#veelgestelde-vragen" className="denhaag-anchor-navigation__link">
              Veelgestelde vragen
            </a>
          </li>
        </ol>
      </nav>
      <button className="denhaag-button denhaag-button--start-icon">
        <span className="denhaag-button__icon">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="denhaag-icon"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
          </svg>
        </span>
        Direct aanvragen
      </button>
    </>
  ),
};
