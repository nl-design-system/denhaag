import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/card-news';

import readme from '../../../../components/CardNews/README.md?raw';
import './_storybook.scss';

const meta = {
  title: 'CSS/News Card',
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
    <div className="denhaag-card-news">
      <img
        className="denhaag-card-news__image"
        src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173"
        alt=""
      />
      <div className="denhaag-card-news__content">
        <h4 className="utrecht-heading-4 denhaag-card-news__heading">
          <a className="denhaag-card-news__link" href="#example-url">
            Fietsflat Rijnstraat: opknappen fietsenstalling
          </a>
        </h4>
        <p className="utrecht-paragraph denhaag-card-news__paragraph">
          Het weekend van 15 en 16 januari in beide richtingen dicht.
        </p>
        <div className="denhaag-card-news__icon">
          <svg
            aria-hidden="true"
            className="denhaag-icon"
            focusable="false"
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  ),
};

export const Hover: Story = {
  render: () => (
    <div className="denhaag-card-news denhaag-card-news--hover">
      <img
        className="denhaag-card-news__image"
        src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173"
        alt=""
      />
      <div className="denhaag-card-news__content">
        <h4 className="utrecht-heading-4 denhaag-card-news__heading">
          <a className="denhaag-card-news__link" href="#example-url">
            Fietsflat Rijnstraat: opknappen fietsenstalling
          </a>
        </h4>
        <p className="utrecht-paragraph denhaag-card-news__paragraph">
          Het weekend van 15 en 16 januari in beide richtingen dicht.
        </p>
        <div className="denhaag-card-news__icon">
          <svg
            aria-hidden="true"
            className="denhaag-icon"
            focusable="false"
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  ),
};

export const Focus: Story = {
  render: () => (
    <div className="denhaag-card-news denhaag-card-news--focus">
      <img
        className="denhaag-card-news__image"
        src="https://images.unsplash.com/photo-1612799675078-ac368b17e488?w=307&h=173"
        alt=""
      />
      <div className="denhaag-card-news__content">
        <h4 className="utrecht-heading-4 denhaag-card-news__heading">
          <a className="denhaag-card-news__link" href="#example-url">
            Fietsflat Rijnstraat: opknappen fietsenstalling
          </a>
        </h4>
        <p className="utrecht-paragraph denhaag-card-news__paragraph">
          Het weekend van 15 en 16 januari in beide richtingen dicht.
        </p>
        <div className="denhaag-card-news__icon">
          <svg
            aria-hidden="true"
            className="denhaag-icon"
            focusable="false"
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  ),
};
