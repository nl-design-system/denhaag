import React from 'react';
import { ButtonLink } from '@gemeente-denhaag/button-link';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { LinkList } from '@gemeente-denhaag/link-list';
import { Heading } from '@gemeente-denhaag/heading';
import '@gemeente-denhaag/button-group';
import '@gemeente-denhaag/icons';
import '@gemeente-denhaag/list';
import '@gemeente-denhaag/link';
import '@utrecht/link-social-css';
import '@utrecht/list-social-css';
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

export const FooterLegal = ({ legalData, copyrightLabel }: FooterLegalProps) => {
  if (!legalData && !copyrightLabel) return null;

  return (
    <section className="denhaag-footer__legal">
      <ResponsiveContent className="denhaag-footer__legal-container">
        {legalData && (
          <ul className="denhaag-list denhaag-footer__legal-links">
            {legalData?.map((item, key) => (
              <li className="denhaag-list__item" key={key}>
                <a href={item.href} className="denhaag-link">
                  <span className="denhaag-link__label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        {copyrightLabel && (
          <div className="denhaag-footer__legal-copyright">
            <Paragraph>{copyrightLabel}</Paragraph>
          </div>
        )}
      </ResponsiveContent>
    </section>
  );
};

export const FooterContact = ({ newsletterData, socialData, contactData }: FooterContactProps) => {
  if (!newsletterData && !socialData && !contactData) return null;

  return (
    <section className="denhaag-footer__contact">
      <ResponsiveContent>
        <div className="denhaag-footer-group">
          {newsletterData && (
            <div className="denhaag-footer-group-item">
              <Heading level={4}>{newsletterData.title}</Heading>
              <Paragraph>{newsletterData.text}</Paragraph>
              <div className="denhaag-button-group">
                <ButtonLink appearance="primary-action-button" href={newsletterData.href}>
                  {newsletterData.buttonLabel}
                </ButtonLink>
              </div>
            </div>
          )}
          {socialData && (
            <div className="denhaag-footer-group-item">
              <Heading level={4}>{socialData.title}</Heading>
              <ul className="utrecht-list-social">
                {socialData.links.map((item, key) => (
                  <li className="utrecht-list-social__item" key={key}>
                    <a href={item.href} className="utrecht-link-social" title={item.label}>
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {contactData && (
            <div className="denhaag-footer-group-item">
              <Heading level={4}>{contactData.title}</Heading>
              <LinkList items={contactData.links} />
              {contactData.buttonLabel && contactData.href && (
                <div className="denhaag-button-group">
                  <ButtonLink appearance="primary-action-button" href={contactData.href}>
                    {contactData.buttonLabel}
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

export const Footer = ({
  className,
  socialData,
  newsletterData,
  contactData,
  legalData,
  copyrightLabel,
}: FooterProps) => {
  const rootClassNames = clsx('denhaag-footer', className);

  return (
    <footer className={rootClassNames}>
      <FooterContact socialData={socialData} newsletterData={newsletterData} contactData={contactData} />
      <FooterLegal legalData={legalData} copyrightLabel={copyrightLabel} />
    </footer>
  );
};
