import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/icons';
import '@gemeente-denhaag/link';
import '@gemeente-denhaag/link-group';

import pkg from '../../../../components/LinkGroup/package.json';
import readme from '../../../../components/LinkGroup/README.md?raw';

const meta = {
  title: 'CSS/Navigation/Link Group',
  tags: ['autodocs'],
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
    <div className="denhaag-link-group">
      <h4 className="utrecht-heading-4 denhaag-link-group__caption">Caption</h4>
      <ul className="utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list">
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Paspoort en identiteitskaart</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Rijbewijs</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Inburgeren en naturaliseren</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Akten</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Verklaringen</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="denhaag-link-group">
      <img
        className="denhaag-link-group__image"
        src="https://images.unsplash.com/photo-1569235186275-626cb53b83ce?w=140&h=140"
        alt="placeholder"
      />
      <h4 className="utrecht-heading-4 denhaag-link-group__caption">Caption</h4>
      <ul className="utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list">
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">
              Paspoort en identiteitskaart. Repudiandae rem voluptate ex. Autem est aut ratione beatae odit non
              dignissimos. Repudiandae rem voluptate ex. Autem est aut ratione beatae odit non dignissimos.
            </span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Rijbewijs</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Inburgeren en naturaliseren</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Akten</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Verklaringen</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

export const DarkBackground: Story = {
  render: () => (
    <div
      className="denhaag-link-group denhaag-link-group--dark"
      style={{ backgroundColor: '#2D2D2D', padding: '1rem' }}
    >
      <h4 className="utrecht-heading-4 denhaag-link-group__caption">Caption</h4>
      <ul className="utrecht-link-list utrecht-link-list--html-ul denhaag-link-group__list">
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Paspoort en identiteitskaart</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Rijbewijs</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Inburgeren en naturaliseren</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Akten</span>
          </a>
        </li>
        <li className="denhaag-link-group__list-item">
          <a
            href="https://nl-design-system.github.io/denhaag/"
            className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
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
            <span className="denhaag-link__label">Verklaringen</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};
