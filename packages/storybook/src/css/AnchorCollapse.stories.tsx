import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/anchor-collapse';

import readme from '../../../../components/AnchorCollapse/README.md?raw';
import '../../../../components/AnchorCollapse/src/anchorCollapses';
import '../../../../components/AnchorCollapse/src/stories.js';

const meta = {
  title: 'CSS/Navigation/Anchor Collapse',
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
    <>
      <section className="denhaag-anchor-collapse" id="in-het-kort">
        <h2 className="denhaag-anchor-collapse__summary">
          <button
            aria-controls="denhaag-anchor-collapse-content-in-het-kort"
            aria-expanded="false"
            className="denhaag-anchor-collapse__toggle"
            id="denhaag-anchor-collapse-label-in-het-kort"
          >
            In het kort
          </button>
          <svg
            aria-hidden="true"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
              fill="currentColor"
            />
          </svg>
        </h2>
        <div
          aria-labelledby="denhaag-anchor-collapse-label-in-het-kort"
          className="denhaag-anchor-collapse__content"
          id="denhaag-anchor-collapse-content-in-het-kort"
          role="region"
        >
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="voorwaarden">
        <h2 className="denhaag-anchor-collapse__summary">
          <button
            aria-controls="denhaag-anchor-collapse-content-voorwaarden"
            aria-expanded="false"
            className="denhaag-anchor-collapse__toggle"
            id="denhaag-anchor-collapse-label-voorwaarden"
          >
            Voorwaarden
          </button>
          <svg
            aria-hidden="true"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
              fill="currentColor"
            />
          </svg>
        </h2>
        <div
          aria-labelledby="denhaag-anchor-collapse-label-voorwaarden"
          className="denhaag-anchor-collapse__content"
          id="denhaag-anchor-collapse-content-voorwaarden"
          role="region"
        >
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="process">
        <h2 className="denhaag-anchor-collapse__summary">
          <button
            aria-controls="denhaag-anchor-collapse-content-process"
            aria-expanded="false"
            className="denhaag-anchor-collapse__toggle"
            id="denhaag-anchor-collapse-label-process"
          >
            Process
          </button>
          <svg
            aria-hidden="true"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
              fill="currentColor"
            />
          </svg>
        </h2>
        <div
          aria-labelledby="denhaag-anchor-collapse-label-process"
          className="denhaag-anchor-collapse__content"
          role="region"
          id="denhaag-anchor-collapse-content-process"
        >
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="kosten">
        <h2 className="denhaag-anchor-collapse__summary">
          <button
            aria-controls="denhaag-anchor-collapse-content-kosten"
            aria-expanded="false"
            className="denhaag-anchor-collapse__toggle"
            id="denhaag-anchor-collapse-label-kosten"
          >
            Kosten
          </button>
          <svg
            aria-hidden="true"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
              fill="currentColor"
            />
          </svg>
        </h2>
        <div
          aria-labelledby="denhaag-anchor-collapse-label-kosten"
          className="denhaag-anchor-collapse__content"
          role="region"
          id="denhaag-anchor-collapse-content-kosten"
        >
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="aanvragen">
        <h2 className="denhaag-anchor-collapse__summary">
          <button
            aria-expanded="false"
            aria-controls="denhaag-anchor-collapse-content-aanvragen"
            className="denhaag-anchor-collapse__toggle"
            id="denhaag-anchor-collapse-label-aanvragen"
          >
            Aanvragen
          </button>
          <svg
            aria-hidden="true"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
              fill="currentColor"
            />
          </svg>
        </h2>
        <div
          aria-labelledby="denhaag-anchor-collapse-label-aanvragen"
          className="denhaag-anchor-collapse__content"
          role="region"
        >
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
      <section className="denhaag-anchor-collapse" id="veelgestelde-vragen">
        <h2 className="denhaag-anchor-collapse__summary">
          <button
            aria-controls="denhaag-anchor-collapse-content-veelgestelde-vragen"
            aria-expanded="false"
            className="denhaag-anchor-collapse__toggle"
            id="denhaag-anchor-collapse-label-veelgestelde-vragen"
          >
            Veelgestelde vragen
          </button>
          <svg
            aria-hidden="true"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
              fill="currentColor"
            />
          </svg>
        </h2>
        <div
          aria-labelledby="denhaag-anchor-collapse-label-veelgestelde-vragen"
          className="denhaag-anchor-collapse__content"
          role="region"
          id="denhaag-anchor-collapse-content-veelgestelde-vragen"
        >
          <p className="utrecht-paragraph">
            Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
            sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
            nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
            libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
            risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
            dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            auctor ex metus, quis gravida odio elementum sed.
          </p>
        </div>
      </section>
    </>
  ),
};

export const Focus: Story = {
  render: () => (
    <section className="denhaag-anchor-collapse" id="focus">
      <h2 className="denhaag-anchor-collapse__summary denhaag-anchor-collapse__summary--focus">
        <button
          aria-controls="denhaag-anchor-collapse-content-focus"
          aria-expanded="false"
          className="denhaag-anchor-collapse__toggle"
          id="denhaag-anchor-collapse-label-focus"
        >
          In het kort
        </button>
        <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
            fill="currentColor"
          />
        </svg>
      </h2>
      <div
        aria-labelledby="denhaag-anchor-collapse-label-focus"
        className="denhaag-anchor-collapse__content"
        id="denhaag-anchor-collapse-content-focus"
        role="region"
      >
        <p className="utrecht-paragraph">
          Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
          sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
          nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
          libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
          risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
          dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          auctor ex metus, quis gravida odio elementum sed.
        </p>
      </div>
    </section>
  ),
};
export const Hover: Story = {
  render: () => (
    <section className="denhaag-anchor-collapse" id="hover">
      <h2 className="denhaag-anchor-collapse__summary denhaag-anchor-collapse__summary--hover">
        <button
          aria-controls="denhaag-anchor-collapse-content-hover"
          aria-expanded="false"
          className="denhaag-anchor-collapse__toggle"
          id="denhaag-anchor-collapse-label-hover"
        >
          In het kort
        </button>
        <svg aria-hidden="true" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.4107 1.07806C5.73614 0.752625 6.26378 0.752625 6.58922 1.07806L11.5892 6.07806C11.9147 6.4035 11.9147 6.93114 11.5892 7.25657C11.2638 7.58201 10.7361 7.58201 10.4107 7.25657L5.99996 2.84583L1.58922 7.25657C1.26378 7.58201 0.736141 7.58201 0.410704 7.25657C0.0852667 6.93114 0.0852667 6.4035 0.410704 6.07806L5.4107 1.07806Z"
            fill="currentColor"
          />
        </svg>
      </h2>
      <div
        aria-labelledby="denhaag-anchor-collapse-label-hover"
        className="denhaag-anchor-collapse__content"
        id="denhaag-anchor-collapse-content-hover"
        role="region"
      >
        <p className="utrecht-paragraph">
          Mauris non sagittis ipsum. Donec elementum libero at gravida ullamcorper. Suspendisse consequat gravida est,
          sed condimentum eros convallis vitae. Cras interdum ornare nisl id hendrerit. Curabitur ullamcorper vel nisi
          nec malesuada. Integer hendrerit urna ac tincidunt pellentesque. Curabitur laoreet, ipsum ac semper ornare,
          libero lacus pretium turpis, nec fermentum odio nulla sit amet nisi. In sed facilisis neque, vel maximus
          risus. Aliquam porttitor magna nec justo facilisis imperdiet. Fusce malesuada purus nec sem auctor pretium.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras malesuada condimentum convallis. Cras
          dignissim sit amet arcu non ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          auctor ex metus, quis gravida odio elementum sed.
        </p>
      </div>
    </section>
  ),
};
