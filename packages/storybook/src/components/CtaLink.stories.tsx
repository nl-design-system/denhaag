import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/ctalink';

import readme from '../../../../components/CtaLink/README.md?raw';

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
    <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg
          className="denhaag-icon"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
      </p>
    </a>
  ),
};

export const Hovered: Story = {
  render: () => (
    <a className="denhaag-cta-link denhaag-cta-link--hover" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg
          className="denhaag-icon"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
      </p>
    </a>
  ),
};

export const Focused: Story = {
  render: () => (
    <a className="denhaag-cta-link denhaag-cta-link--focus" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg
          className="denhaag-icon"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
      </p>
    </a>
  ),
};

export const Grouped: Story = {
  render: () => (
    <>
      <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
        <div className="denhaag-cta-link__dot">
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="denhaag-cta-link__excerpt">
          Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
        </p>
      </a>
      <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
        <div className="denhaag-cta-link__dot">
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="denhaag-cta-link__excerpt">
          Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
        </p>
      </a>
      <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
        <div className="denhaag-cta-link__dot">
          <svg
            className="denhaag-icon"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="denhaag-cta-link__excerpt">
          Zie ook: <span className="denhaag-cta-link__highlight">Met een link</span>
        </p>
      </a>
    </>
  ),
};

export const Long: Story = {
  render: () => (
    <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg
          className="denhaag-icon"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        Zie ook:{' '}
        <span className="denhaag-cta-link__highlight">
          Donec bibendum, mauris et laoreet euismod, nunc felis fermentum nisi, ut ultrices nisi nisi et
        </span>
      </p>
    </a>
  ),
};

export const Video: Story = {
  render: () => (
    <a className="denhaag-cta-link" href="#example-url" rel="nofollow noopener">
      <div className="denhaag-cta-link__dot">
        <svg
          className="denhaag-icon"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M6 6.74129C6 5.19771 7.67443 4.23597 9.00774 5.01374L18.0231 10.2727C19.3461 11.0445 19.3461 12.9561 18.0231 13.7278L9.00774 18.9868C7.67443 19.7645 6 18.8028 6 17.2592V6.74129ZM17.0154 12.0003L8 6.74129V17.2592L17.0154 12.0003Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="denhaag-cta-link__excerpt">
        <span className="denhaag-cta-link__highlight">Bekijk</span> een lange tekst over de video
      </p>
    </a>
  ),
};
