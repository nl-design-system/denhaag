import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/dynamic-content';

import readme from '../../../../components/DynamicContent/README.md?raw';

const meta = {
  title: 'CSS/Layout/Dynamic content',
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
    <section className="denhaag-dynamic-content denhaag-dynamic-content--grid">
      <div className="denhaag-dynamic-content__grid container">
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card denhaag-dynamic-content__card--hover">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title hovered
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card denhaag-dynamic-content__card--focus">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title focused
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
      </div>
    </section>
  ),
};

export const List: Story = {
  render: () => (
    <section className="denhaag-dynamic-content denhaag-dynamic-content--list">
      <div className="denhaag-dynamic-content__grid container">
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Proin vel purus posuere elit gravida pellentesque."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Proin vel purus posuere elit gravida pellentesque.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start denhaag-link--hover"
          title="Mauris pharetra luctus nulla, at tristique nulla cursus."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Mauris pharetra luctus nulla, at tristique nulla cursus.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start denhaag-link--focus"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Sed in ante convallis, aliquet ante imperdiet."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Sed in ante convallis, aliquet ante imperdiet.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Sed in ante convallis, aliquet ante imperdiet."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Sed in ante convallis, aliquet ante imperdiet.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Phasellus cursus pulvinar lacus et."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Phasellus cursus pulvinar lacus et.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Phasellus cursus pulvinar lacus et."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Phasellus cursus pulvinar lacus et.</span>
        </a>
      </div>
    </section>
  ),
};

export const ListMultipleColumns: Story = {
  render: () => (
    <section className="denhaag-dynamic-content denhaag-dynamic-content--list denhaag-dynamic-content--list-2">
      <div className="denhaag-dynamic-content__grid container">
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Proin vel purus posuere elit gravida pellentesque."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Proin vel purus posuere elit gravida pellentesque.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start denhaag-link--hover"
          title="Mauris pharetra luctus nulla, at tristique nulla cursus."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Mauris pharetra luctus nulla, at tristique nulla cursus.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start denhaag-link--focus"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Sed in ante convallis, aliquet ante imperdiet."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Sed in ante convallis, aliquet ante imperdiet.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Sed in ante convallis, aliquet ante imperdiet."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Sed in ante convallis, aliquet ante imperdiet.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Phasellus cursus pulvinar lacus et."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Phasellus cursus pulvinar lacus et.</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Example link"
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Example link</span>
        </a>
        <a
          href="#example-link"
          className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start"
          title="Phasellus cursus pulvinar lacus et."
        >
          <span className="denhaag-link__icon">
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
              ></path>
            </svg>
          </span>
          <span className="denhaag-link__label">Phasellus cursus pulvinar lacus et.</span>
        </a>
      </div>
    </section>
  ),
};

export const Pagination: Story = {
  render: () => (
    <section className="denhaag-dynamic-content denhaag-dynamic-content--grid denhaag-dynamic-content--has-pagination">
      <div className="denhaag-dynamic-content__grid container">
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
        <article className="denhaag-dynamic-content__card">
          <img
            className="denhaag-dynamic-content__card-image denhaag-image__image"
            srcSet="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=480 480w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=768 768w,
                https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290 1290w"
            src="https://images.unsplash.com/photo-1562013042-abdaf4dc98b9?w=1290"
            alt=""
            loading="lazy"
          />
          <div className="denhaag-dynamic-content__card-content">
            <div className="denhaag-dynamic-content__card-caption">
              <a href="#example-link" className="denhaag-dynamic-content__card-link">
                <h3 className="denhaag-dynamic-content__card-title">Persons name</h3>
              </a>
              Function title
            </div>
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
              ></path>
            </svg>
          </div>
        </article>
      </div>
      <nav className="denhaag-dynamic-content__pagination denhaag-pagination denhaag-pagination--center">
        <button
          aria-label="Vorige pagina"
          className="denhaag-pagination__button denhaag-pagination__button--arrow denhaag-pagination__button--disabled"
          rel="prev"
        >
          <svg
            aria-hidden="true"
            className="denhaag-icon"
            fill="none"
            height="1em"
            viewBox="0 0 7 12"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.9921 10.8143C5.36382 11.1914 5.97222 11.1914 6.34393 10.8143C6.7079 10.4451 6.70822 9.8521 6.34466 9.48248L3.36315 6.45123C2.98039 6.06209 2.98039 5.43791 3.36315 5.04877L6.34466 2.01752C6.70822 1.6479 6.7079 1.05492 6.34394 0.685696C5.97222 0.308599 5.36382 0.308599 4.9921 0.685695L0.692003 5.04799C0.308224 5.43732 0.308224 6.06268 0.692003 6.45201L4.9921 10.8143Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <span className="denhaag-pagination__list" role="group">
          <button className="denhaag-pagination__button" aria-label="Page: 1" data-page="1">
            1
          </button>
          <button
            className="denhaag-pagination__button denhaag-pagination__button--current"
            aria-current="page"
            data-page="2"
            aria-label="Page: 2"
          >
            2
          </button>
          <button className="denhaag-pagination__button" data-page="3" aria-label="Page: 3" rel="next">
            3
          </button>
          <button className="denhaag-pagination__button" data-page="4" aria-label="Page: 4">
            4
          </button>
          <button className="denhaag-pagination__button" data-page="5" aria-label="Page: 5">
            5
          </button>
        </span>
        <button
          aria-label="Volgende pagina"
          className="denhaag-pagination__button denhaag-pagination__button--arrow"
          rel="next"
        >
          <svg
            aria-hidden="true"
            className="denhaag-icon"
            fill="none"
            height="1em"
            viewBox="0 0 7 12"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.0079 1.1857C1.63618 0.8086 1.02778 0.8086 0.656065 1.18569V1.18569C0.292103 1.55492 0.291779 2.1479 0.655339 2.51752L3.63685 5.54877C4.01961 5.93791 4.01961 6.56209 3.63686 6.95123L0.655339 9.98248C0.291779 10.3521 0.292102 10.9451 0.656065 11.3143V11.3143C1.02778 11.6914 1.63618 11.6914 2.0079 11.3143L6.308 6.95201C6.69178 6.56268 6.69178 5.93732 6.308 5.54799L2.0079 1.1857Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </nav>
    </section>
  ),
};
