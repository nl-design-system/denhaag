import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/icons';
import '@gemeente-denhaag/link';
import '@gemeente-denhaag/note';

import readme from '../../../../components/Note/README.md?raw';

const meta = {
  title: 'CSS/Surfaces/Note',
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
    <div className="denhaag-note" role="note">
      <svg
        aria-label="Note:"
        role="img"
        className="denhaag-note__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
          fill="#F1F1F1"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16.5V12.5"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8.5H12.01"
        />
      </svg>
      <div>Note</div>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div className="denhaag-note denhaag-note--info" role="note">
      <svg
        aria-label="Info:"
        role="img"
        className="denhaag-note__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
          fill="#1261A3"
          stroke="#1261A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill="#fff"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16.5V12.5"
        />
        <path
          fill="#fff"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8.5H12.01"
        />
      </svg>
      <div>Note info</div>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="denhaag-note denhaag-note--warning" role="note">
      <svg
        aria-label="Warning:"
        role="img"
        className="denhaag-note__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#F18700"
          stroke="#F18700"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.2898 4.35923L1.81978 18.4992C1.64514 18.8017 1.55274 19.1445 1.55177 19.4937C1.55079 19.843 1.64127 20.1864 1.8142 20.4898C1.98714 20.7931 2.2365 21.046 2.53748 21.2231C2.83847 21.4002 3.18058 21.4954 3.52978 21.4992H20.4698C20.819 21.4954 21.1611 21.4002 21.4621 21.2231C21.7631 21.046 22.0124 20.7931 22.1854 20.4898C22.3583 20.1864 22.4488 19.843 22.4478 19.4937C22.4468 19.1445 22.3544 18.8017 22.1798 18.4992L13.7098 4.35923C13.5315 4.06533 13.2805 3.82235 12.981 3.65371C12.6814 3.48508 12.3435 3.39648 11.9998 3.39648C11.656 3.39648 11.3181 3.48508 11.0186 3.65371C10.7191 3.82235 10.468 4.06533 10.2898 4.35923Z"
        />
        <path
          fill="#fff"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 17.5H12.01"
        />
        <path
          fill="#fff"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 9.5V13.5"
        />
      </svg>
      <div>Note warning</div>
    </div>
  ),
};

export const AriaLive: Story = {
  render: () => (
    <div className="denhaag-note" role="note" aria-atomic="true" aria-live="polite">
      <svg
        aria-label="Note:"
        role="img"
        className="denhaag-note__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
          fill="#F1F1F1"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16.5V12.5"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8.5H12.01"
        />
      </svg>
      <div>Note</div>
    </div>
  ),
};

export const Long: Story = {
  render: () => (
    <div className="denhaag-note" role="note">
      <svg
        aria-label="Note:"
        role="img"
        className="denhaag-note__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
          fill="#F1F1F1"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16.5V12.5"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8.5H12.01"
        />
      </svg>
      <div>
        Etiam sed lectus ultricies tellus iaculis blandit ac eget lacus. Cras et aliquet ipsum, ac dignissim justo.
        Curabitur sodales metus non efficitur interdum. Morbi condimentum placerat fermentum. Vivamus eget risus in nisl
        scelerisque lacinia.{' '}
        <a href="https://denhaag.nl" className="denhaag-link">
          <span>Den Haag website</span>
        </a>
      </div>
    </div>
  ),
};

export const IconLink: Story = {
  render: () => (
    <div className="denhaag-note" role="note" aria-atomic="true" aria-live="polite">
      <svg
        aria-label="Note:"
        role="img"
        className="denhaag-note__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
          fill="#F1F1F1"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16.5V12.5"
        />
        <path
          fill="#4B4B4B"
          stroke="#4B4B4B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 8.5H12.01"
        />
      </svg>
      <div>
        Note with an link with icon{' '}
        <a
          href="#example-link"
          tabIndex={0}
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end"
        >
          <span className="denhaag-link__icon">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="denhaag-icon"
              focusable="false"
              aria-hidden="true"
              shape-rendering="auto"
            >
              <path
                d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span>Link with icon after</span>
        </a>
      </div>
    </div>
  ),
};
