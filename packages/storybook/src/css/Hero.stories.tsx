import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/button';
import '@gemeente-denhaag/hero';
import '@gemeente-denhaag/icons';

import readme from '../../../../components/Hero/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/Hero/package.json';

import './_storybook.scss';

const heroImage = (h: number, w: number, id = 'photo-1513384312027-9fa69a360337') =>
  `https://images.unsplash.com/${id}?fit=crop&w=${w}&h=${h}`;

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

export const Routing: Story = {
  render: () => (
    <section className="denhaag-hero denhaag-hero--routing">
      <div className="denhaag-hero__container">
        <div className="denhaag-hero__content">
          <h1 className="denhaag-hero__title nl-heading nl-heading--level-1">Parkeren</h1>
        </div>
      </div>
      <img
        className="denhaag-hero__image"
        src={heroImage(400, 560, 'photo-1470224114660-3f6686c562eb')}
        alt="auto in parkeervak"
      />
    </section>
  ),
};

export const RoutingMultiline: Story = {
  render: () => (
    <section className="denhaag-hero denhaag-hero--routing">
      <div className="denhaag-hero__container">
        <div className="denhaag-hero__content">
          <h1 className="denhaag-hero__title nl-heading nl-heading--level-1">Betalen, wijzigen of opzeggen</h1>
        </div>
      </div>
      <img
        className="denhaag-hero__image"
        src={heroImage(400, 560, 'photo-1634733988138-bf2c3a2a13fa')}
        alt="pinautomaat"
      />
    </section>
  ),
};

export const Home: Story = {
  render: () => (
    <section className="denhaag-hero denhaag-hero--home">
      <div className="denhaag-hero__container">
        <div className="denhaag-hero__content">
          <h1 className="denhaag-hero__title nl-heading nl-heading--level-1">
            <strong>Goedemorgen!</strong> Waar bent u naar op zoek?
          </h1>
        </div>
      </div>
      <img className="denhaag-hero__image" src={heroImage(800, 800)} alt="hero" />
    </section>
  ),
};

export const ThemePage: Story = {
  render: () => (
    <section className="denhaag-hero denhaag-hero--theme-page">
      <div className="denhaag-hero__container">
        <div className="denhaag-hero__content">
          <h1 className="denhaag-hero__title nl-heading nl-heading--level-1">Parkeren</h1>
          <p className="nl-paragraph denhaag-hero__text">
            Et fugit est tenetur labore corporis. Magnam doloremque cum sapiente et quisquam saepe rerum. Dolorum
            tenetur incidunt a dolorum incidunt sit.
          </p>
          <button className="denhaag-button denhaag-button--end-icon">
            Button
            <span className="denhaag-button__icon">
              <svg
                aria-hidden="true"
                className="denhaag-icon"
                width="1em"
                height="1em"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.792893 0.292893C1.18342 -0.0976311 1.81658 -0.0976311 2.20711 0.292893L7.5 5.58579L12.7929 0.292893C13.1834 -0.0976311 13.8166 -0.0976311 14.2071 0.292893C14.5976 0.683418 14.5976 1.31658 14.2071 1.70711L8.20711 7.70711C7.81658 8.09763 7.18342 8.09763 6.79289 7.70711L0.792893 1.70711C0.402369 1.31658 0.402369 0.683418 0.792893 0.292893Z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <img
        className="denhaag-hero__image"
        src={heroImage(400, 560, 'photo-1470224114660-3f6686c562eb')}
        alt="auto in parkeervak"
      />
    </section>
  ),
};
