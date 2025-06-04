import React from 'react';
import '@gemeente-denhaag/button';
import '@gemeente-denhaag/button-group';
import '@gemeente-denhaag/card-authentication';
import '@gemeente-denhaag/card-group';
import '@gemeente-denhaag/icons';
import '@gemeente-denhaag/image';
import '@gemeente-denhaag/link';
import '@gemeente-denhaag/typography';
import clsx from 'clsx';

// TODO: create real generic AuthenticationCard and AuthenticationCardGroup components, and move them to the right packages.

type AuthProvider = '' | 'DigiD' | 'eHerkenning' | 'eIDAS';

interface AuthenticationCardProps {
  authProvider: AuthProvider;
  portrait?: boolean;
}

export const AuthenticationCard = ({ authProvider = '', portrait = false }: AuthenticationCardProps) => {
  const title = !authProvider
    ? 'Als gast doorgaan'
    : authProvider === 'eIDAS'
      ? 'Log in met uw Europese digitale identiteit'
      : `Inloggen met ${authProvider}`;

  const subtitle = !authProvider
    ? 'u hoeft niet in te loggen'
    : authProvider === 'DigiD'
      ? 'Laat zien wie u bent'
      : authProvider === 'eHerkenning'
        ? 'Voor bedrijf of instelling'
        : '';

  const imageSrc = {
    DigiD: 'digid.svg',
    eHerkenning: 'eherkenning.png',
    eIDAS: 'eidas.svg',
  };

  return (
    <section className={clsx('denhaag-card-authentication', portrait && 'denhaag-card-authentication--portrait')}>
      <header className="denhaag-card-authentication__header">
        <hgroup className="denhaag-card-authentication__heading">
          <h3 className="utrecht-heading-3 denhaag-card-authentication__title">{title}</h3>
          <p className={clsx('utrecht-paragraph', 'denhaag-card-authentication__subtitle')}>{subtitle}</p>
        </hgroup>
        {authProvider && (
          <p className={clsx('denhaag-image', 'denhaag-card-authentication__logo')}>
            <img
              width="80"
              height="80"
              src={imageSrc[authProvider]}
              className="denhaag-image__image"
              alt={`${authProvider} logo`}
              loading="lazy"
            />
          </p>
        )}
      </header>
      <div className="denhaag-card-authentication__cta">
        <div className="denhaag-button-group">
          <a
            className="denhaag-card-authentication__cta-link denhaag-button denhaag-button--large denhaag-button--primary-action denhaag-button--end-icon"
            href="#example-link"
            target="_self"
            title={title}
          >
            Inloggen
            <svg
              aria-hidden="true"
              className="denhaag-icon denhaag-button__icon"
              focusable="false"
              height="1em"
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
            </svg>
          </a>
        </div>
      </div>
      {authProvider && (
        <footer className="denhaag-card-authentication__footer">
          <p className="utrecht-paragraph">
            {authProvider !== 'eIDAS' && `Geen ${authProvider}? `}
            <a
              href="#example-link"
              className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-end denhaag-link--external"
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
                shapeRendering="auto"
              >
                <path
                  d="M14 5C13.4477 5 13 4.55228 13 4C13 3.44772 13.4477 3 14 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4L21 10C21 10.5523 20.5523 11 20 11C19.4477 11 19 10.5523 19 10L19 6.41422L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L17.5858 5H14ZM3 7C3 5.89543 3.89543 5 5 5H10C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7H5V19H17V14C17 13.4477 17.4477 13 18 13C18.5523 13 19 13.4477 19 14V19C19 20.1046 18.1046 21 17 21H5C3.89543 21 3 20.1046 3 19V7Z"
                  fill="currentColor"
                />
              </svg>
              <span className="denhaag-link__label">
                {authProvider === 'eIDAS' ? 'How does eIDAS work?' : `Vraag ${authProvider} aan`}
              </span>
            </a>
          </p>
        </footer>
      )}
    </section>
  );
};

export interface AuthenticationCardGroupProps {
  cards: AuthProvider[];
  rows?: boolean;
  responsive?: boolean;
  distanced?: boolean;
}

export const AuthenticationCardGroup = ({
  cards = [],
  rows = false,
  responsive = false,
  distanced = true,
}: AuthenticationCardGroupProps) => (
  <div
    className={clsx(
      'denhaag-card-group',
      rows && 'denhaag-card-group--rows',
      responsive && 'denhaag-card-group--responsive',
      distanced && 'denhaag-card-group--distanced',
    )}
  >
    {cards.map((authProvider, index) => (
      <AuthenticationCard authProvider={authProvider} key={index} />
    ))}
  </div>
);
