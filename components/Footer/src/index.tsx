import React from 'react';
import { ButtonLink } from '@utrecht/component-library-react';
import ResponsiveContent from '@gemeente-denhaag/responsive-content';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import '@gemeente-denhaag/button-group';
import '@gemeente-denhaag/icons';
import '@gemeente-denhaag/list';
import '@gemeente-denhaag/link';
import '@gemeente-denhaag/link-group';
import clsx from 'clsx';
import './index.scss';

export interface FooterListItemData {
  label: string;
  href: string;
}

export interface FooterLegalProps {
  legalData?: Array<FooterListItemData>;
  copyrightLabel?: string;
}

export interface FooterSocialLinks {
  icon: React.ReactElement;
  label: string;
  href: string;
}

export interface FooterSocialData {
  links: Array<FooterSocialLinks>;
  title: string;
}

export interface NewsLetterData {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
}

export interface ContactData {
  title: string;
  links: Array<FooterListItemData>;
  buttonLabel?: string;
  href?: string;
}

export interface FooterContactProps {
  socialData?: FooterSocialData;
  newsletterData?: NewsLetterData;
  contactData?: ContactData;
}

export interface FooterProps {
  className?: string;
  legalData?: Array<FooterListItemData>;
  copyrightLabel?: string;
  socialData?: FooterSocialData;
  newsletterData?: NewsLetterData;
  contactData?: ContactData;
}

export const FooterLegal: React.FC<FooterLegalProps> = (props: FooterLegalProps) => {
  return (
    <section className="denhaag-footer__legal">
      <ResponsiveContent className="denhaag-footer__legal-container">
        {props.legalData && (
          <ul className="denhaag-list denhaag-footer__legal-links">
            {props.legalData?.map((item, key) => (
              <li className="denhaag-list__item" key={key}>
                <a href={item.href} className="denhaag-link">
                  <span className="denhaag-link__label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {props.copyrightLabel && (
          <div className="denhaag-footer__legal-copyright">
            <Paragraph>{props.copyrightLabel}</Paragraph>
          </div>
        )}
      </ResponsiveContent>
    </section>
  );
};

export const FooterContact: React.FC<FooterContactProps> = (props: FooterContactProps) => {
  return (
    <section className="denhaag-footer__contact">
      <ResponsiveContent>
        <div className="denhaag-footer-group">
          {props.newsletterData && (
            <div className="denhaag-link-group denhaag-link-group--dark">
              <h4 className="utrecht-heading-4 denhaag-link-group__caption">{props.newsletterData.title}</h4>
              <Paragraph>{props.newsletterData.text}</Paragraph>
              <div className="denhaag-button-group">
                <ButtonLink appearance="primary-action-button" href={props.newsletterData.href}>
                  {props.newsletterData.buttonLabel}
                </ButtonLink>
              </div>
            </div>
          )}
          {props.socialData && (
            <div className="denhaag-link-group denhaag-link-group--dark">
              <h4 className="utrecht-heading-4 denhaag-link-group__caption">{props.socialData.title}</h4>
              <ul className="utrecht-list-social">
                {props.socialData.links.map((item, key) => (
                  <li className="utrecht-list-social__item" key={key}>
                    <a href={item.href} className="utrecht-link-social" title={item.label}>
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {props.contactData && (
            <div className="denhaag-link-group denhaag-link-group--dark">
              <h4 className="utrecht-heading-4 denhaag-link-group__caption">{props.contactData.title}</h4>
              <ul className="denhaag-link-group__list">
                {props.contactData.links.map((item, key) => (
                  <li className="denhaag-link-group__list-item" key={key}>
                    <a href={item.href} className="denhaag-link denhaag-link--with-icon denhaag-link--with-icon-start">
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
                          shapeRendering="auto"
                        >
                          <path
                            d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="denhaag-link__label">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              {props.contactData.buttonLabel && props.contactData.href && (
                <div className="denhaag-button-group">
                  <ButtonLink appearance="primary-action-button" href={props.contactData.href}>
                    {props.contactData.buttonLabel}
                  </ButtonLink>
                </div>
              )}
            </div>
          )}
        </div>
      </ResponsiveContent>
    </section>
  );
};

export const Footer = (props: FooterProps) => {
  const rootClassNames = clsx('denhaag-footer', props.className);

  return (
    <footer className={rootClassNames}>
      <FooterContact
        socialData={props.socialData}
        newsletterData={props.newsletterData}
        contactData={props.contactData}
      />
      <FooterLegal legalData={props.legalData} copyrightLabel={props.copyrightLabel} />
    </footer>
  );
};

export default Footer;
