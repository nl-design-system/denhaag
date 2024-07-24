import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/cta-image-content';

import pkg from '../../../../components/CtaImageContent/package.json';
import readme from '../../../../components/CtaImageContent/README.md';

const meta = {
  title: 'CSS/Actions/Cta Image Content',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
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
    <div className="denhaag-cta-image-content">
      <img
        className="denhaag-cta-image-content__image"
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=650&h=350"
        alt=""
        loading="lazy"
      />
      <div className="denhaag-cta-image-content__content">
        <h3 className="utrecht-heading-2 denhaag-cta-image-content__title">Title</h3>
        <p className="utrecht-paragraph denhaag-cta-image-content__text">
          Explanational text about the image content link. Atque non nesciunt ducimus voluptas dolor voluptas fugit qui.
        </p>
        <a
          href="https://denhaag.nl"
          className="denhaag-button denhaag-button--large denhaag-button--end-icon denhaag-cta-image-content__button"
        >
          Link text
          <span className="denhaag-button__icon">
            <svg
              aria-hidden="true"
              className="denhaag-icon"
              focusable="false"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div className="denhaag-cta-image-content denhaag-cta-image-content--filled">
      <img
        className="denhaag-cta-image-content__image"
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce"
        alt=""
        loading="lazy"
      />
      <div className="denhaag-cta-image-content__content">
        <h3 className="utrecht-heading-2 denhaag-cta-image-content__title">Title</h3>
        <p className="utrecht-paragraph denhaag-cta-image-content__text">
          Explanational text about the image content link. Atque non nesciunt ducimus voluptas dolor voluptas fugit qui.
        </p>
        <a
          href="https://denhaag.nl"
          className="denhaag-button denhaag-button--large denhaag-button--end-icon denhaag-cta-image-content__button"
        >
          Link text
          <span className="denhaag-button__icon">
            <svg
              aria-hidden="true"
              className="denhaag-icon"
              focusable="false"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  ),
};

export const WithoutAction: Story = {
  render: () => (
    <div className="denhaag-cta-image-content">
      <img
        className="denhaag-cta-image-content__image"
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=650&h=350"
        alt=""
        loading="lazy"
      />
      <div className="denhaag-cta-image-content__content">
        <h3 className="utrecht-heading-2 denhaag-cta-image-content__title">Title</h3>
        <p className="utrecht-paragraph denhaag-cta-image-content__text">
          Explanational text about the image content link. Atque non nesciunt ducimus voluptas dolor voluptas fugit qui.
        </p>
      </div>
    </div>
  ),
};

export const Focus: Story = {
  render: () => (
    <div className="denhaag-cta-image-content denhaag-cta-image-content--focus">
      <img
        className="denhaag-cta-image-content__image"
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=650&h=350"
        alt=""
        loading="lazy"
      />
      <div className="denhaag-cta-image-content__content">
        <h3 className="utrecht-heading-2 denhaag-cta-image-content__title">Title</h3>
        <p className="utrecht-paragraph denhaag-cta-image-content__text">
          Explanational text about the image content link. Atque non nesciunt ducimus voluptas dolor voluptas fugit qui.
        </p>
        <a
          href="https://denhaag.nl"
          className="denhaag-button denhaag-button--large denhaag-button--end-icon denhaag-cta-image-content__button"
        >
          Link text
          <span className="denhaag-button__icon">
            <svg
              aria-hidden="true"
              className="denhaag-icon"
              focusable="false"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  ),
};

export const Hover: Story = {
  render: () => (
    <div className="denhaag-cta-image-content denhaag-cta-image-content--hover">
      <img
        className="denhaag-cta-image-content__image"
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=650&h=350"
        alt=""
        loading="lazy"
      />
      <div className="denhaag-cta-image-content__content">
        <h3 className="utrecht-heading-2 denhaag-cta-image-content__title">Title</h3>
        <p className="utrecht-paragraph denhaag-cta-image-content__text">
          Explanational text about the image content link. Atque non nesciunt ducimus voluptas dolor voluptas fugit qui.
        </p>
        <a
          href="https://denhaag.nl"
          className="denhaag-button denhaag-button--large denhaag-button--end-icon denhaag-cta-image-content__button"
        >
          Link text
          <span className="denhaag-button__icon">
            <svg
              aria-hidden="true"
              className="denhaag-icon"
              focusable="false"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  ),
};

export const Small: Story = {
  render: () => (
    <div className="denhaag-cta-image-content">
      <img
        className="denhaag-cta-image-content__image"
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=650&h=350"
        alt=""
        loading="lazy"
      />
      <div className="denhaag-cta-image-content__content">
        <h3 className="utrecht-heading-2 denhaag-cta-image-content__title denhaag-cta-image-content__title--small">
          Title
        </h3>
        <p className="utrecht-paragraph denhaag-cta-image-content__text denhaag-cta-image-content__text--small">
          Explanational text about the image content link. Atque non nesciunt ducimus voluptas dolor voluptas fugit qui.
        </p>
        <a
          href="https://denhaag.nl"
          className="denhaag-button denhaag-button--large denhaag-button--end-icon denhaag-cta-image-content__button"
        >
          Link text
          <span className="denhaag-button__icon">
            <svg
              aria-hidden="true"
              className="denhaag-icon"
              focusable="false"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  ),
};
