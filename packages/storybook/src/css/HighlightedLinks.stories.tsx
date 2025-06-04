import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/highlighted-links';
import '@gemeente-denhaag/icons';
import '@gemeente-denhaag/link';
import '@gemeente-denhaag/link-group';

import readme from '../../../../components/HighlightedLinks/README.md?raw';

const meta = {
  title: 'CSS/Navigation/Highlighted Links',
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
    <div className="denhaag-link-group denhaag-highlighted-links">
      <h4 className="utrecht-heading-4 denhaag-link-group__caption">Caption</h4>
      <ul className="utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list denhaag-highlighted-links__list">
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="denhaag-icon denhaag-link__icon"
              focusable="false"
              aria-hidden="true"
              shape-rendering="auto"
            >
              <path
                d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Paspoort en identiteitskaart. Repudiandae rem voluptate ex.</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="denhaag-icon denhaag-link__icon"
              focusable="false"
              aria-hidden="true"
              shape-rendering="auto"
            >
              <path
                d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Rijbewijs</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="denhaag-icon denhaag-link__icon"
              focusable="false"
              aria-hidden="true"
              shape-rendering="auto"
            >
              <path
                d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Inburgeren en naturaliseren</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="denhaag-icon denhaag-link__icon"
              focusable="false"
              aria-hidden="true"
              shape-rendering="auto"
            >
              <path
                d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Akten</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="denhaag-icon denhaag-link__icon"
              focusable="false"
              aria-hidden="true"
              shape-rendering="auto"
            >
              <path
                d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Verklaringen</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};
