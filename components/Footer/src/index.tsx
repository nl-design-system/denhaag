import React from 'react';
import { ButtonLink } from '@gemeente-denhaag/button-link';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import '@gemeente-denhaag/button-group';
import '@gemeente-denhaag/icons';
import '@gemeente-denhaag/list';
import '@gemeente-denhaag/link';
import '@utrecht/link-social-css';
import '@utrecht/list-social-css';
import clsx from 'clsx';
import './index.scss';
import { LinkList } from '@gemeente-denhaag/link-list';
import { Heading } from '@gemeente-denhaag/heading';

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
            <div className="denhaag-footer-group-item">
              <Heading level={4}>{props.newsletterData.title}</Heading>
              <Paragraph>{props.newsletterData.text}</Paragraph>
              <div className="denhaag-button-group">
                <ButtonLink appearance="primary-action-button" href={props.newsletterData.href}>
                  {props.newsletterData.buttonLabel}
                </ButtonLink>
              </div>
            </div>
          )}
          {props.socialData && (
            <div className="denhaag-footer-group-item">
              <Heading level={4}>{props.socialData.title}</Heading>
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
            <div className="denhaag-footer-group-item">
              <Heading level={4}>{props.contactData.title}</Heading>
              <LinkList items={props.contactData.links} />
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
