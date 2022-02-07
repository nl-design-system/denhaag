import * as React from 'react';
import Timeline, { Step } from '../src';

describe('Timeline tests', () => {
  it('completed step can show description', () => {
    cy.mount(
      <Timeline activeStep={1}>
        <Step label="Label tekst" description="Description" completed={true} />
      </Timeline>,
    );

    cy.get('.denhaag-timeline__step').should('not.contain', 'Description');
    cy.get('.denhaag-timeline__step-label').click();
    cy.get('.denhaag-timeline__step').should('contain', 'Description');
  });

  it('not active step cannot show description', () => {
    cy.mount(
      <Timeline activeStep={-1}>
        <Step label="Label tekst" description="Description" completed={false} />
      </Timeline>,
    );

    cy.get('.denhaag-timeline__step').should('not.contain', 'Description');
    cy.get('.denhaag-timeline__step-label').click();
    cy.get('.denhaag-timeline__step').should('not.contain', 'Description');
  });

  it('active step cannot hide description', () => {
    cy.mount(
      <Timeline activeStep={0}>
        <Step label="Label tekst" description="Description" completed={false} />
      </Timeline>,
    );

    cy.get('.denhaag-timeline__step').should('contain', 'Description');
    cy.get('.denhaag-timeline__step-label').click();
    cy.get('.denhaag-timeline__step').should('contain', 'Description');
  });

  it('a11y and snapshots', () => {
    const steps = [
      {
        label: 'First Step in a Timeline!',
        description: 'This is the first Step component of many in a Timeline component.',
      },
      {
        label: 'Second Step in a Timeline!',
      },
      {
        label: 'Third Step in a Timeline!',
        disabled: true,
      },
      {
        label: 'Fourth Step in a Timeline!',
        description: 'This is the fourth Step component of many in a Timeline component.',
      },
    ];

    cy.snapshots(
      <div>
        {[0, 1, 3, 4].map((activeStep) => (
          <Timeline activeStep={activeStep} key={activeStep}>
            {steps.map(({ label, ...props }, index) => (
              <Step key={label} label={label} {...props} completed={activeStep > index && !props.disabled} />
            ))}
          </Timeline>
        ))}
      </div>,
      {},
      [
        {
          selector: '.denhaag-timeline__step',
          states: {
            focus: 'denhaag-timeline__step--focus',
          },
        },
        {
          selector: '.denhaag-timeline__step-label--completed',
          states: {
            hover: 'denhaag-timeline__step-label--completed--hover',
          },
        },
      ],
      [
        { id: 'color-contrast', issue: 412 },
        { id: 'aria-allowed-attr', issue: 731 },
      ],
      'Timeline',
    );
  });
});
