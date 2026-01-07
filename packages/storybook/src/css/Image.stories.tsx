import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/image';

import readme from '../../../../components/Image/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/Image/package.json';

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
    <figure className="denhaag-image">
      <img
        className="denhaag-image__image"
        srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
        src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
        alt="Distinctio cupiditate"
        loading="lazy"
      />
      <figcaption className="denhaag-image__figcaption">
        <span className="denhaag-image__figcaption-text">
          Distinctio cupiditate repellat placeat itaque velit iure qui Distinctio cupiditate repellat placeat itaque
          velit iure qui.
        </span>
        <a
          className="denhaag-image__figcaption-download"
          href="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
          download="distinctio-cupiditate"
          type="application/image"
          aria-label="Download image: [READABLE_FILENAME] ([FILE_EXTENSION], [FILE_SIZE])"
        >
          <svg
            className="denhaag-image__icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="#1261A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="#1261A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M12 15V3" stroke="#1261A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="denhaag-image__download-text">Download afbeelding</span>
        </a>
      </figcaption>
      <hr className="denhaag-divider" role="presentation" />
    </figure>
  ),
};

export const ImageWithCaptionText: Story = {
  render: () => (
    <figure className="denhaag-image">
      <img
        className="denhaag-image__image"
        srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
        src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
        alt="Istinctio cupiditate repellat"
        loading="lazy"
      />
      <figcaption className="denhaag-image__figcaption">
        <span className="denhaag-image__figcaption-text">
          Istinctio cupiditate repellat placeat itaque velit iure qui Distinctio.
        </span>
      </figcaption>
      <hr className="denhaag-divider" role="presentation" />
    </figure>
  ),
};

export const ImageWithDownloadLink: Story = {
  render: () => (
    <figure className="denhaag-image">
      <img
        className="denhaag-image__image"
        srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
        src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
        alt="Distinctio cupiditate"
        loading="lazy"
      />
      <figcaption className="denhaag-image__figcaption">
        <a
          className="denhaag-image__figcaption-download"
          href="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
          download="distinctio-cupiditate"
          type="application/image"
          aria-label="Download image: [READABLE_FILENAME] ([FILE_EXTENSION], [FILE_SIZE])"
        >
          <svg
            className="denhaag-image__icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="#1261A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="#1261A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M12 15V3" stroke="#1261A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="denhaag-image__download-text">Download afbeelding</span>
        </a>
      </figcaption>
      <hr className="denhaag-divider" role="presentation" />
    </figure>
  ),
};

export const ImageOnly: Story = {
  render: () => (
    <figure className="denhaag-image denhaag-image--figcaption-only">
      <img
        className="denhaag-image__image"
        srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
        src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
        alt="Placeat itaque velit iure"
        loading="lazy"
      />
    </figure>
  ),
};

export const Portrait: Story = {
  render: () => (
    <figure className="denhaag-image">
      <img
        className="denhaag-image__image"
        srcSet="https://images.unsplash.com/photo-1611402881804-8fde5b755174?h=480 480h,
                https://images.unsplash.com/photo-1611402881804-8fde5b755174?h=768 768h,
                https://images.unsplash.com/photo-1611402881804-8fde5b755174?h=1290 1290h"
        src="https://images.unsplash.com/photo-1611402881804-8fde5b755174?h=1290"
        alt="Distinctio cupiditate"
        loading="lazy"
      />
      <figcaption className="denhaag-image__figcaption">
        <span className="denhaag-image__figcaption-text">
          Distinctio cupiditate repellat placeat itaque velit iure qui Distinctio cupiditate repellat placeat itaque
          velit iure qui.
        </span>
        <a
          className="denhaag-image__figcaption-download"
          href="https://images.unsplash.com/photo-1611402881804-8fde5b755174"
          download="distinctio-cupiditate"
          type="application/image"
          aria-label="Download image: [READABLE_FILENAME] ([FILE_EXTENSION], [FILE_SIZE])"
        >
          <svg
            className="denhaag-image__icon"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="#1261A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="#1261A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M12 15V3" stroke="#1261A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span className="denhaag-image__download-text">Download afbeelding</span>
        </a>
      </figcaption>
      <hr className="denhaag-divider" role="presentation" />
    </figure>
  ),
};
