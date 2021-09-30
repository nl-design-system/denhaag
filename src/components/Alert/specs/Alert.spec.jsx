import * as React from 'react';
import Alert from '../src/index';
import { MegaphoneIcon } from '@gemeente-denhaag/icons';

describe(`Alerts tests`, () => {
  it('has clickable close and action buttons', () => {
    const props = {
      close: () => {
        console.log('Clicked');
      },
      action: {
        buttonText: 'Continue',
        onClick: () => {
          console.log('Action clicked');
        },
      },
    };

    const closeSpy = cy.spy(props, 'close').as('Alert close');
    const actionSpy = cy.spy(props.action, 'onClick').as('Alert action');

    cy.mount(<Alert variant="success" title="Title" text="Text content" close={props.close} action={props.action} />);

    cy.get('.denhaag-alert').contains('Title');
    cy.get('.denhaag-alert').contains('Text content');
    cy.get('.denhaag-alert').contains('Continue');

    cy.get('.denhaag-alert__close .denhaag-icon-button')
      .click()
      .then(() => expect(closeSpy).to.have.been.calledOnce);

    cy.get('.denhaag-alert__content .denhaag-button')
      .click()
      .then(() => expect(actionSpy).to.have.been.calledOnce);
  });

  it('a11y and snapshots', () => {
    const props = {
      text: 'Here comes text. This text provides additional details and actionable steps the user can take.',
      title: 'This is the title of the Alert',
    };

    cy.snapshots(
      <Alert {...props} />,
      {
        variant: ['error', 'info', 'success', 'warning'],
      },
      {},
      [
        { id: 'duplicate-id', issue: 406 },
        { id: 'color-contrast', issue: 407 },
      ],
    );

    cy.snapshots(
      <Alert {...props} supportIcon={<MegaphoneIcon />} />,
      {
        variant: ['error', 'info', 'success', 'warning'],
      },
      {},
      [
        { id: 'duplicate-id', issue: 406 },
        { id: 'color-contrast', issue: 407 },
      ],
    );

    cy.snapshots(
      <Alert
        {...props}
        close={() => {
          console.log('Closed');
        }}
      />,
      {
        variant: ['error', 'info', 'success', 'warning'],
      },
      {
        selector: '.denhaag-icon-button',
        states: {
          hover: 'denhaag-icon-button--hover',
          focus: 'denhaag-icon-button--focus',
        },
      },
      [
        { id: 'duplicate-id', issue: 406 },
        { id: 'color-contrast', issue: 407 },
      ],
    );

    cy.snapshots(
      <Alert
        {...props}
        action={{
          buttonText: 'Continue',
          onClick: () => {
            console.log('Action clicked');
          },
        }}
      />,
      {
        variant: ['error', 'info', 'success', 'warning'],
      },
      {
        selector: '.denhaag-button',
        states: {
          hover: 'denhaag-button--hover',
          focus: 'denhaag-button--focus',
        },
      },
      [
        { id: 'duplicate-id', issue: 406 },
        { id: 'color-contrast', issue: 407 },
      ],
    );
  });
});
