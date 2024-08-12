import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/accordion';

import readme from '../../../../components/Accordion/README.md?raw';

const meta = {
  title: 'CSS/Surfaces/Accordion',
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
    <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="default-accordion-details-one"
            className="denhaag-accordion__title"
            id="default-accordion1id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="default-accordion-details-one"
          role="region"
          aria-labelledby="default-accordion1id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="default-accordion-details-two"
            className="denhaag-accordion__title"
            id="default-accordion2id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="default-accordion-details-two"
          role="region"
          aria-labelledby="default-accordion2id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="default-accordion-details-three"
            className="denhaag-accordion__title"
            id="default-accordion3id"
          >
            Integer blandit libero quis risus maximus auctor. Proin ullamcorper, metus.
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="default-accordion-details-three"
          role="region"
          aria-labelledby="default-accordion3id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="disabled-accordion-details-one"
            className="denhaag-accordion__title"
            id="disabled-accordion1id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="disabled-accordion-details-one"
          role="region"
          aria-labelledby="disabled-accordion1id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="disabled-accordion-details-two"
            className="denhaag-accordion__title denhaag-accordion__title--disabled"
            id="disabled-accordion2id"
            disabled
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="disabled-accordion-details-two"
          role="region"
          aria-labelledby="disabled-accordion2id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="disabled-accordion-details-three"
            className="denhaag-accordion__title"
            id="disabled-accordion3id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="disabled-accordion-details-three"
          role="region"
          aria-labelledby="disabled-accordion3id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
  ),
};

export const Focus: Story = {
  render: () => (
    <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="focus-accordion-details-one"
            className="denhaag-accordion__title"
            id="focus-accordion1id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="focus-accordion-details-one"
          role="region"
          aria-labelledby="focus-accordion1id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="focus-accordion-details-two"
            className="denhaag-accordion__title denhaag-accordion__title--focus"
            id="focus-accordion2id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="focus-accordion-details-two"
          role="region"
          aria-labelledby="focus-accordion2id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="focus-accordion-details-three"
            className="denhaag-accordion__title"
            id="focus-accordion3id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="focus-accordion-details-three"
          role="region"
          aria-labelledby="focus-accordion3id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
  ),
};
export const Hover: Story = {
  render: () => (
    <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="hover-accordion-details-one"
            className="denhaag-accordion__title"
            id="hover-accordion1id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="hover-accordion-details-one"
          role="region"
          aria-labelledby="hover-accordion1id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel denhaag-accordion__panel--hover">
          <button
            aria-expanded="false"
            aria-controls="hover-accordion-details-two"
            className="denhaag-accordion__title"
            id="hover-accordion2id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="hover-accordion-details-two"
          role="region"
          aria-labelledby="hover-accordion2id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="hover-accordion-details-three"
            className="denhaag-accordion__title"
            id="hover-accordion3id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="hover-accordion-details-three"
          role="region"
          aria-labelledby="hover-accordion3id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
  ),
};
export const Open: Story = {
  render: () => (
    <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="open-accordion-details-one"
            className="denhaag-accordion__title"
            id="open-accordion1id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-one"
          role="region"
          aria-labelledby="open-accordion1id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container denhaag-accordion__container--open">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="true"
            aria-controls="open-accordion-details-two"
            className="denhaag-accordion__title"
            id="open-accordion2id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-two"
          role="region"
          aria-labelledby="open-accordion2id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="open-accordion-details-three"
            className="denhaag-accordion__title"
            id="open-accordion3id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-three"
          role="region"
          aria-labelledby="open-accordion3id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
  ),
};
export const OpenHover: Story = {
  render: () => (
    <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="open-accordion-details-one"
            className="denhaag-accordion__title"
            id="open-accordion1id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-one"
          role="region"
          aria-labelledby="open-accordion1id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container denhaag-accordion__container--open">
        <h3 className="denhaag-accordion__panel denhaag-accordion__panel--hover">
          <button
            aria-expanded="true"
            aria-controls="open-accordion-details-two"
            className="denhaag-accordion__title"
            id="open-accordion2id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-two"
          role="region"
          aria-labelledby="open-accordion2id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="open-accordion-details-three"
            className="denhaag-accordion__title"
            id="open-accordion3id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-three"
          role="region"
          aria-labelledby="open-accordion3id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
  ),
};
export const OpenFocus: Story = {
  render: () => (
    <div className="denhaag-accordion">
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="open-accordion-details-one"
            className="denhaag-accordion__title"
            id="open-accordion1id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-one"
          role="region"
          aria-labelledby="open-accordion1id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container denhaag-accordion__container--open">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="true"
            aria-controls="open-accordion-details-two"
            className="denhaag-accordion__title denhaag-accordion__title--focus"
            id="open-accordion2id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-two"
          role="region"
          aria-labelledby="open-accordion2id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
      <div className="denhaag-accordion__container">
        <h3 className="denhaag-accordion__panel">
          <button
            aria-expanded="false"
            aria-controls="open-accordion-details-three"
            className="denhaag-accordion__title"
            id="open-accordion3id"
          >
            Accordion
          </button>
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
            shape-rendering="auto"
          >
            <path
              d="M5.293 8.293a1 1 0 011.414 0L12 13.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
              fill="currentColor"
            ></path>
          </svg>
        </h3>
        <div
          id="open-accordion-details-three"
          role="region"
          aria-labelledby="open-accordion3id"
          className="denhaag-accordion__details"
        >
          <p className="utrecht-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </p>
        </div>
      </div>
    </div>
  ),
};
