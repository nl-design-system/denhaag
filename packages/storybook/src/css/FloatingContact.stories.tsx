import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/floating-contact';

import readme from '../../../../components/FloatingContact/README.md?raw';
import '../../../../components/FloatingContact/src/stories.js';
import './_storybook.scss';

import { useEffect, useMemo } from 'storybook/preview-api';

const meta = {
  title: 'CSS/Page Elements/Floating Contact',
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
  decorators: [
    (Story) => {
      let applied = false;
      if (!applied && window.location.search.indexOf('css-page-elements-floating-contact--live-chat') !== -1) {
        useEffect(() => {
          // useEffect is called Multiple Times. Therefore, the useMemo.
          applied = true;
        });
        useMemo(() => {
          document.body.insertAdjacentHTML(
            'beforeend',
            `<!-- BEGIN LIVECOM COMMUNICATION SCRIPT --><span className="lc5element"><!-- lcType="page" lcAccount="pZoMWhgBAAA=" lcTag="Storybook" --></span><span className="lc5element"><!-- lcType="mod" lcKey="LTR" lcGroup="1" --></span><div style="display: none;" id="LCcopyright"><a href="http://www.livecom.net">livecom.net chat</a></div><script charset="ISO-8859-1" type="text/javascript" defer="defer" src="//c60.livecom.net/5g/ws/pZoMWhgBAAA"></script><!-- END LIVECOM COMMUNICATION SCRIPT -->`,
          );
        }, [applied]);
      }
      return <Story />;
    },
  ],
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch"
          aria-expanded="false"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--online">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Open chatgesprek
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};

export const Hover: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch denhaag-floating-contact-switch--hover"
          aria-expanded="false"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--online">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Open chatgesprek
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};

export const Focus: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch denhaag-floating-contact-switch--focus"
          aria-expanded="false"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--online">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Open chatgesprek
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};

export const ChatOffline: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch"
          aria-expanded="false"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--offline">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              Offline
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};

export const ItemHover: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch"
          aria-expanded="true"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--online">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="#example-link">
                Open chatgesprek
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--hover">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};

export const ItemFocus: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch"
          aria-expanded="true"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--online">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="#example-link">
                Open chatgesprek
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--focus">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};

export const LiveChat: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch"
          aria-expanded="true"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--online">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              <a id="livecom-trigger" className="denhaag-floating-contact__item-link" tabIndex={0} href="#example-link">
                Open chatgesprek
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={0} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};

export const Zoomed: Story = {
  render: () => (
    <main className="denhaag-storybook-floating-contact-wrapper">
      <div id="denhaag-floating-contact" className="denhaag-floating-contact denhaag-floating-contact--zoomed">
        <button
          id="denhaag-floating-contact-switch"
          className="denhaag-floating-contact-switch"
          aria-expanded="false"
          aria-label="Contact"
        >
          <div id="denhaag-floating-contact__label" className="denhaag-floating-contact-switch__label">
            Contact
          </div>
          <div className="denhaag-floating-contact-switch__icons">
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V9.33464C13.6671 10.071 13.0701 10.668 12.3337 10.668H9.27655L7.47181 12.4727C7.21146 12.7331 6.78935 12.7331 6.529 12.4727L4.72427 10.668H1.66707C0.930694 10.668 0.33374 10.071 0.33374 9.33464V2.0013ZM12.3337 2.0013H1.66707V9.33464H5.00041C5.17722 9.33464 5.34679 9.40487 5.47181 9.5299L7.00041 11.0585L8.529 9.5299C8.65403 9.40487 8.8236 9.33464 9.00041 9.33464H12.3337V2.0013ZM3.00041 4.33464C3.00041 3.96645 3.29888 3.66797 3.66707 3.66797H10.3337C10.7019 3.66797 11.0004 3.96645 11.0004 4.33464C11.0004 4.70283 10.7019 5.0013 10.3337 5.0013H3.66707C3.29888 5.0013 3.00041 4.70283 3.00041 4.33464ZM3.00041 7.0013C3.00041 6.63311 3.29888 6.33464 3.66707 6.33464H7.66707C8.03526 6.33464 8.33374 6.63311 8.33374 7.0013C8.33374 7.36949 8.03526 7.66797 7.66707 7.66797H3.66707C3.29888 7.66797 3.00041 7.36949 3.00041 7.0013Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.55562 1.66146H4.54892L5.51373 4.07348L3.96381 5.10676C3.77834 5.2304 3.66694 5.43856 3.66694 5.66146C3.66863 5.72388 3.66694 5.66213 3.66694 5.66213L3.66694 5.66282L3.66695 5.66432L3.66697 5.66768L3.66706 5.6759C3.66716 5.68205 3.66733 5.68951 3.66761 5.69825C3.66818 5.71573 3.6692 5.73832 3.67102 5.7657C3.67467 5.82043 3.68155 5.89442 3.69447 5.98491C3.72031 6.16577 3.77046 6.41353 3.86782 6.70561C4.06331 7.29208 4.44743 8.05142 5.19554 8.79953C5.94364 9.54764 6.70298 9.93176 7.28945 10.1272C7.58153 10.2246 7.8293 10.2748 8.01016 10.3006C8.10065 10.3135 8.17463 10.3204 8.22936 10.324C8.25674 10.3259 8.27934 10.3269 8.29681 10.3275C8.30555 10.3277 8.31301 10.3279 8.31916 10.328L8.32738 10.3281L8.33075 10.3281L8.33224 10.3281L8.33294 10.3281C8.33294 10.3281 8.40736 10.324 8.3336 10.3281C8.58612 10.3281 8.81696 10.1855 8.92989 9.9596L9.37636 9.06667L12.3336 9.55954V12.4394C10.9262 12.643 7.12521 12.8436 4.13834 9.85672C1.15148 6.86985 1.35209 3.06886 1.55562 1.66146ZM5.04937 5.98552L6.25333 5.18288C6.77795 4.83313 6.98586 4.16371 6.75169 3.57829L5.78689 1.16627C5.5844 0.66006 5.09412 0.328125 4.54892 0.328125H1.52079C0.915117 0.328125 0.344998 0.7489 0.245568 1.40606C0.0193612 2.90113 -0.288537 7.31546 3.19554 10.7995C6.67961 14.2836 11.0939 13.9757 12.589 13.7495C13.2462 13.6501 13.6669 13.0799 13.6669 12.4743V9.55954C13.6669 8.90776 13.1957 8.3515 12.5528 8.24435L9.59555 7.75148C9.01818 7.65525 8.44556 7.94684 8.18379 8.47038L7.95279 8.93238C7.88019 8.91456 7.79914 8.89169 7.71109 8.86234C7.29756 8.72449 6.72357 8.44195 6.13834 7.85672C5.55312 7.2715 5.27057 6.6975 5.13273 6.28397C5.09548 6.17223 5.06867 6.07176 5.04937 5.98552Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.33374 2.0013C0.33374 1.26492 0.930694 0.667969 1.66707 0.667969H12.3337C13.0701 0.667969 13.6671 1.26492 13.6671 2.0013V10.0013C13.6671 10.7377 13.0701 11.3346 12.3337 11.3346H1.66707C0.930695 11.3346 0.33374 10.7377 0.33374 10.0013V2.0013ZM2.67947 2.0013L7.00041 5.78212L11.3213 2.0013H2.67947ZM12.3337 2.88715L7.43941 7.16969C7.18806 7.38962 6.81275 7.38962 6.5614 7.16969L1.66707 2.88715V10.0013H12.3337V2.88715Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="denhaag-floating-contact-switch__icons-inner">
              <div className="denhaag-floating-contact-switch__icon">
                <svg
                  className="denhaag-icon"
                  aria-hidden="true"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.528026 0.527293C0.788375 0.266944 1.21048 0.266944 1.47083 0.527293L4.99943 4.05589L8.52802 0.527293C8.78837 0.266944 9.21048 0.266944 9.47083 0.527293C9.73118 0.787643 9.73118 1.20975 9.47083 1.4701L5.94224 4.9987L9.47083 8.52729C9.73118 8.78764 9.73118 9.20975 9.47083 9.4701C9.21048 9.73045 8.78837 9.73045 8.52802 9.4701L4.99943 5.9415L1.47083 9.4701C1.21048 9.73045 0.788375 9.73045 0.528026 9.4701C0.267676 9.20975 0.267676 8.78764 0.528026 8.52729L4.05662 4.9987L0.528026 1.4701C0.267676 1.20975 0.267676 0.787643 0.528026 0.527293Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
        <div className="denhaag-floating-contact-overlay">
          <h2 className="denhaag-floating-contact__heading denhaag-floating-contact__heading--zoomed-visible">
            Contact
          </h2>
          <h3 className="denhaag-floating-contact__heading">Hoe kunnen we je helpen?</h3>
          <div className="denhaag-floating-contact__item denhaag-floating-contact__item--online">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="25"
              viewBox="0 0 28 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86066 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V18.1673C27.3334 19.6401 26.1395 20.834 24.6667 20.834H18.5524L14.9429 24.4435C14.4222 24.9642 13.578 24.9642 13.0573 24.4435L9.4478 20.834H3.33341C1.86066 20.834 0.666748 19.6401 0.666748 18.1673V3.50065ZM24.6667 3.50065H3.33341V18.1673H10.0001C10.3537 18.1673 10.6928 18.3078 10.9429 18.5578L14.0001 21.615L17.0573 18.5578C17.3073 18.3078 17.6465 18.1673 18.0001 18.1673H24.6667V3.50065ZM6.00008 8.16732C6.00008 7.43094 6.59704 6.83398 7.33342 6.83398H20.6667C21.4031 6.83398 22.0001 7.43094 22.0001 8.16732C22.0001 8.9037 21.4031 9.50065 20.6667 9.50065H7.33342C6.59704 9.50065 6.00008 8.9037 6.00008 8.16732ZM6.00008 13.5007C6.00008 12.7643 6.59704 12.1673 7.33342 12.1673H15.3334C16.0698 12.1673 16.6667 12.7643 16.6667 13.5007C16.6667 14.237 16.0698 14.834 15.3334 14.834H7.33342C6.59704 14.834 6.00008 14.237 6.00008 13.5007Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Chat</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Open chatgesprek
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11076 2.83268H9.09735L11.027 7.65672L7.92712 9.72328C7.55619 9.97057 7.33339 10.3869 7.33339 10.8327C7.33678 10.9575 7.33339 10.834 7.33339 10.834L7.33339 10.8354L7.3334 10.8384L7.33344 10.8451L7.33364 10.8616C7.33384 10.8739 7.33417 10.8888 7.33473 10.9063C7.33586 10.9412 7.3379 10.9864 7.34155 11.0412C7.34885 11.1506 7.3626 11.2986 7.38846 11.4796C7.44013 11.8413 7.54043 12.3368 7.73515 12.921C8.12613 14.0939 8.89437 15.6126 10.3906 17.1088C11.8868 18.605 13.4055 19.3733 14.5784 19.7643C15.1626 19.959 15.6581 20.0593 16.0198 20.1109C16.2008 20.1368 16.3488 20.1506 16.4582 20.1579C16.513 20.1615 16.5582 20.1635 16.5931 20.1647C16.6106 20.1652 16.6255 20.1656 16.6378 20.1658L16.6543 20.166L16.661 20.166L16.664 20.166L16.6654 20.166C16.6654 20.166 16.8142 20.1579 16.6667 20.166C17.1718 20.166 17.6334 19.8807 17.8593 19.429L18.7522 17.6431L24.6667 18.6289V24.3887C21.8519 24.7957 14.2499 25.1969 8.2762 19.2232C2.30247 13.2495 2.70368 5.64748 3.11076 2.83268ZM10.0983 11.4808L12.5062 9.87552C13.5554 9.17603 13.9712 7.83718 13.5029 6.66635L11.5733 1.84231C11.1683 0.829885 10.1878 0.166016 9.09735 0.166016H3.04109C1.82975 0.166016 0.689507 1.00756 0.490647 2.32189C0.038234 5.31202 -0.577562 14.1407 6.39058 21.1088C13.3587 28.077 22.1874 27.4612 25.1775 27.0088C26.4918 26.8099 27.3334 25.6697 27.3334 24.4583V18.6289C27.3334 17.3253 26.391 16.2128 25.1051 15.9985L19.1906 15.0127C18.0359 14.8203 16.8906 15.4034 16.3671 16.4505L15.9051 17.3745C15.7599 17.3389 15.5978 17.2931 15.4217 17.2344C14.5946 16.9588 13.4466 16.3937 12.2762 15.2232C11.1058 14.0528 10.5407 12.9048 10.265 12.0777C10.1905 11.8542 10.1368 11.6533 10.0983 11.4808Z"
                fill="white"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Telefoon</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="tel:+3107014070">
                070 14 070
              </a>
            </div>
          </div>
          <div className="denhaag-floating-contact__item">
            <svg
              className="denhaag-icon"
              aria-hidden="true"
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.666748 3.50065C0.666748 2.02789 1.86065 0.833984 3.33341 0.833984H24.6667C26.1395 0.833984 27.3334 2.02789 27.3334 3.50065V19.5007C27.3334 20.9734 26.1395 22.1673 24.6667 22.1673H3.33342C1.86066 22.1673 0.666748 20.9734 0.666748 19.5007V3.50065ZM5.3582 3.50065L14.0001 11.0623L22.642 3.50065H5.3582ZM24.6667 5.27234L14.8781 13.8374C14.3754 14.2773 13.6248 14.2773 13.1221 13.8374L3.33341 5.27234V19.5007H24.6667V5.27234Z"
                fill="#F8F7F5"
              />
            </svg>
            <div className="denhaag-floating-contact__item-meta">
              <h4 className="denhaag-floating-contact__item-title">Contactformulier</h4>
              <a className="denhaag-floating-contact__item-link" tabIndex={-1} href="#example-link">
                Stel uw vraag aan de gemeente
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ),
};
