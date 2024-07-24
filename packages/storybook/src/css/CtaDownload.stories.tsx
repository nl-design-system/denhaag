import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/ctadownload';

import pkg from '../../../../components/CtaDownload/package.json';
import readme from '../../../../components/CtaDownload/README.md';

export const fileImage = (h: number, w: number) =>
  `https://images.unsplash.com/photo-1569235186275-626cb53b83ce?fit=crop&w=${w}&h=${h}`;

const meta = {
  title: 'CSS/Actions/CTA Download',
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
    <a
      className="denhaag-cta-download"
      href={fileImage(800, 800)}
      download="pretty-file-name-without-spaces"
      type="application/pdf"
      aria-label="Download: [READABLE_FILENAME] (PDF, 763,8 kB)"
    >
      <div className="denhaag-cta-link__dot">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="denhaag-cta-download__excerpt">
        <h3 className="denhaag-cta-download__title">Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst</h3>
        (PDF, 763,8 kB)
      </div>
    </a>
  ),
};

export const Hovered: Story = {
  render: () => (
    <a
      className="denhaag-cta-download denhaag-cta-download--hover"
      href={fileImage(800, 800)}
      download="pretty-file-name-without-spaces"
      type="application/pdf"
      aria-label="Download: [READABLE_FILENAME] (PDF, 763,8 kB)"
    >
      <div className="denhaag-cta-link__dot">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="denhaag-cta-download__excerpt">
        <h3 className="denhaag-cta-download__title">Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst</h3>
        (PDF, 763,8 kB)
      </div>
    </a>
  ),
};

export const Focused: Story = {
  render: () => (
    <a
      className="denhaag-cta-download denhaag-cta-download--focus"
      href={fileImage(800, 800)}
      download="pretty-file-name-without-spaces"
      type="application/pdf"
      aria-label="Download: [READABLE_FILENAME] (PDF, 763,8 kB)"
    >
      <div className="denhaag-cta-link__dot">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M7 10L12 15L17 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="denhaag-cta-download__excerpt">
        <h3 className="denhaag-cta-download__title">Staat van wijzigingen herstelbesluit 1B Omgevingsplan Binkhorst</h3>
        (PDF, 763,8 kB)
      </div>
    </a>
  ),
};

export const Grouped: Story = {
  render: () => (
    <>
      <a
        className="denhaag-cta-download"
        href={fileImage(800, 800)}
        download="pretty-file-name-without-spaces"
        type="application/pdf"
        aria-label="Download: Verslag dienstreis naar Delhi (PDF, 126,5 kB)"
      >
        <div className="denhaag-cta-link__dot">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="denhaag-cta-download__excerpt">
          <h3 className="denhaag-cta-download__title">Verslag dienstreis naar Delhi</h3>
          (PDF, 126,5 kB)
        </div>
      </a>
      <a
        className="denhaag-cta-download"
        href={fileImage(800, 800)}
        download="pretty-file-name-without-spaces"
        type="application/msword"
        aria-label="Download: [READABLE_FILENAME] (DOC, 763,8 kB)"
      >
        <div className="denhaag-cta-link__dot">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="denhaag-cta-download__excerpt">
          <h3 className="denhaag-cta-download__title">Bijlage: aanvulling Omgeving Effect Rapport (OER)</h3>
          (DOC, 763,8 kB)
        </div>
      </a>
      <a
        className="denhaag-cta-download"
        href={fileImage(800, 800)}
        download="pretty-file-name-without-spaces"
        type="image/jpeg"
        aria-label="Download: [READABLE_FILENAME] (JPG, 600 kB)"
      >
        <div className="denhaag-cta-link__dot">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 10L12 15L17 10"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M12 15V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className="denhaag-cta-download__excerpt">
          <h3 className="denhaag-cta-download__title">Bijlage: Factsheets Omgevingslawaai</h3>
          (JPG, 600 kB)
        </div>
      </a>
    </>
  ),
};
