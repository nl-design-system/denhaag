import React from 'react';
import clsx from 'clsx';

interface AuthenticationBlockImage {
  alt: string;
  src: string;
  height?: number;
  width?: number;
}

interface AuthenticationBlockLink {
  href: string;
  type: 'internal' | 'external';
  textContent: string;
}

interface AuthenticationBlockProps {
  type: 'landscape' | 'portrait';
  header: { title: string; subtitle: string; image?: AuthenticationBlockImage };
  content: { links: AuthenticationBlockLink[] };
  footer?: {
    label: string;
    link: AuthenticationBlockLink;
    image: AuthenticationBlockImage;
  };
}

export const defaultArgs: AuthenticationBlockProps = {
  type: 'landscape',
  header: {
    title: 'Title',
    subtitle: 'Subtitle',
  },
  content: {
    links: [{ href: '#example-link', type: 'internal', textContent: 'Internal link' }],
  },
};

export const AuthenticationBlock = ({ type, header, content, footer }: AuthenticationBlockProps = defaultArgs) => (
  <div className={clsx('denhaag-authentication', `denhaag-authentication--${type}`)}>
    <div className="denhaag-authentication__card">
      <header className="denhaag-authentication__header">
        {header.image && (
          <figure className="denhaag-image">
            <img
              alt={header.image.alt}
              className="denhaag-image__image"
              height={header.image.height || '80'}
              loading="lazy"
              src={header.image.src}
              width={header.image.width || '80'}
            />
          </figure>
        )}
        <h3 className="utrecht-heading-3">{header.title}</h3>
        <p className="utrecht-paragraph">{header.subtitle}</p>
      </header>
      <div className="denhaag-authentication__content">
        <div
          className={clsx(
            'denhaag-button-group',
            `denhaag-button-group--${content.links.length > 1 ? 'multiple' : 'single'}`,
          )}
        >
          {content.links.map(({ type, href, textContent }) => (
            <a
              key={href}
              className="denhaag-button denhaag-button--end-icon denhaag-button--large"
              href={href}
              target={type === 'internal' ? '_self' : '_blank'}
              rel="noreferrer"
            >
              {textContent}
              <span className="denhaag-button__icon">
                {type === 'internal' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
                  <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 2C10.4477 2 10 1.55228 10 1C10 0.447715 10.4477 0 11 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292894C17.8946 0.48043 18 0.734784 18 1L18 7C18 7.55229 17.5523 8 17 8C16.4477 8 16 7.55228 16 7L16 3.41422L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L14.5858 2H11ZM0 4C0 2.89543 0.895431 2 2 2H7C7.55228 2 8 2.44772 8 3C8 3.55228 7.55228 4 7 4H2V16H14V11C14 10.4477 14.4477 10 15 10C15.5523 10 16 10.4477 16 11V16C16 17.1046 15.1046 18 14 18H2C0.895431 18 0 17.1046 0 16V4Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
              </span>
            </a>
          ))}
        </div>
      </div>
      {footer && (
        <footer className="denhaag-authentication__footer">
          <div className="denhaag-authentication__footer-divider">
            <hr className="denhaag-divider" role="presentation" />
            <div className="denhaag-authentication__footer-label">{footer.label}</div>
          </div>
          <a
            className="denhaag-authentication-item"
            href={footer.link.href}
            rel="noreferrer noopener nofollow"
            target="_blank"
            title={footer.link.textContent}
          >
            <img
              alt={footer.image.alt}
              className="denhaag-authentication-item__image"
              height={footer.image.height || '40'}
              loading="lazy"
              src={footer.image.src}
              width={footer.image.width || '40'}
            />
            {footer.link.textContent}
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
          </a>
        </footer>
      )}
    </div>
  </div>
);

export const AuthenticationBlockMultipleCards = () => (
  <div className="denhaag-authentication denhaag-authentication--portrait">
    <div className="denhaag-authentication__card">
      <header className="denhaag-authentication__header">
        <figure className="denhaag-image">
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1541723011216-c57eaed19919?fit=crop&w=80&h=80"
            className="denhaag-image__image"
            alt="regenboog merk"
            loading="lazy"
          />
        </figure>
        <h3 className="utrecht-heading-3">Title</h3>
        <p className="utrecht-paragraph">Subtitle</p>
      </header>
      <div className="denhaag-authentication__content">
        <div className="denhaag-button-group denhaag-button-group--single">
          <a
            className="denhaag-button denhaag-button--end-icon denhaag-button--large"
            href="#example-link"
            target="_self"
          >
            Internal link
            <span className="denhaag-button__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <footer className="denhaag-authentication__footer">
        <div className="denhaag-authentication__footer-divider">
          <hr className="denhaag-divider" role="presentation" />
          <div className="denhaag-authentication__footer-label">or</div>
        </div>
        <a
          className="denhaag-authentication-item"
          href="#example-link"
          target="_blank"
          title="Gebruik een Europees erkend middel"
          rel="noreferrer noopener nofollow"
        >
          <img
            width="40"
            height="40"
            src="https://images.unsplash.com/photo-1541723011216-c57eaed19919?fit=crop&w=40&h=40"
            className="denhaag-authentication-item__image"
            alt="regenboog merk"
            loading="lazy"
          />
          Gebruik een Europees erkend middel
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
        </a>
      </footer>
    </div>
    <div className="denhaag-authentication__card">
      <header className="denhaag-authentication__header">
        <figure className="denhaag-image">
          <img
            width="80"
            height="80"
            src={'https://images.unsplash.com/photo-1541723011216-c57eaed19919?fit=crop&w=80&h=80'}
            className="denhaag-image__image"
            alt="regenboog merk"
            loading="lazy"
          />
        </figure>
        <h3 className="utrecht-heading-3">Title</h3>
        <p className="utrecht-paragraph">Subtitle</p>
      </header>
      <div className="denhaag-authentication__content">
        <div className="denhaag-button-group denhaag-button-group--single">
          <a
            className="denhaag-button denhaag-button--end-icon denhaag-button--large"
            href="#example-link"
            target="_self"
          >
            Internal link
            <span className="denhaag-button__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <footer className="denhaag-authentication__footer">
        <div className="denhaag-authentication__footer-divider">
          <hr className="denhaag-divider" role="presentation" />
          <div className="denhaag-authentication__footer-label">or</div>
        </div>
        <a
          className="denhaag-authentication-item"
          href="#example-link"
          target="_blank"
          title="Gebruik een Europees erkend middel"
          rel="noreferrer noopener nofollow"
        >
          <img
            width="40"
            height="40"
            src="https://images.unsplash.com/photo-1541723011216-c57eaed19919?fit=crop&w=40&h=40"
            className="denhaag-authentication-item__image"
            alt="regenboog merk"
            loading="lazy"
          />
          Gebruik een Europees erkend middel
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
        </a>
      </footer>
    </div>
    <div className="denhaag-authentication__card">
      <header className="denhaag-authentication__header">
        <figure className="denhaag-image">
          <img
            width="80"
            height="80"
            src="https://images.unsplash.com/photo-1541723011216-c57eaed19919?fit=crop&w=80&h=80"
            className="denhaag-image__image"
            alt="regenboog merk"
            loading="lazy"
          />
        </figure>
        <h3 className="utrecht-heading-3">Title</h3>
        <p className="utrecht-paragraph">Subtitle</p>
      </header>
      <div className="denhaag-authentication__content">
        <div className="denhaag-button-group denhaag-button-group--single">
          <a
            className="denhaag-button denhaag-button--end-icon denhaag-button--large"
            href="#example-link"
            target="_self"
          >
            Internal link
            <span className="denhaag-button__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <footer className="denhaag-authentication__footer">
        <div className="denhaag-authentication__footer-divider">
          <hr className="denhaag-divider" role="presentation" />
          <div className="denhaag-authentication__footer-label">or</div>
        </div>
        <a
          className="denhaag-authentication-item"
          href="#example-link"
          target="_blank"
          title="Gebruik een Europees erkend middel"
          rel="noreferrer noopener nofollow"
        >
          <img
            width="40"
            height="40"
            src="https://images.unsplash.com/photo-1541723011216-c57eaed19919?fit=crop&w=40&h=40"
            className="denhaag-authentication-item__image"
            alt="regenboog merk"
            loading="lazy"
          />
          Gebruik een Europees erkend middel
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
        </a>
      </footer>
    </div>
  </div>
);

export default AuthenticationBlock;
