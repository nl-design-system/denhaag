import * as React from 'react';
import Link from '../dist';
import { ChevronRightIcon } from '../../Icons';

describe('Link tests', () => {
  // Starting with functionality tests
  it('can be clicked', () => {
    cy.mount(<Link href="#test">Link text</Link>);

    cy.get('.denhaag-link').click();

    cy.location('hash').should('eq', '#test');
  });

  it('cannot be clicked when disabled', () => {
    cy.mount(
      <Link href="#test2" disabled>
        Link text
      </Link>,
    );

    cy.get('.denhaag-link').should('have.css', 'pointer-events', 'none');
  });

  it('can be operated with keyboard', () => {
    cy.mount(<Link href="#test">Link text</Link>);

    cy.get('.denhaag-link').type('{enter}');

    cy.location('hash').should('eq', '#test');
  });

  it('a11y and snapshots', () => {
    cy.snapshots(
      <Link href="#test">Test link</Link>,
      {
        disabled: true,
      },
      {
        selector: '.denhaag-link',
        states: {
          hover: 'denhaag-link--hover',
          focus: 'denhaag-link--focus',
        },
      },
      [{ id: 'color-contrast', issue: 408 }],
    );

    cy.snapshots(
      <Link href="#test" icon={<ChevronRightIcon />}>
        Test link
      </Link>,
      {
        disabled: true,
        iconAlign: 'start',
      },
      {
        selector: '.denhaag-link',
        states: {
          hover: 'denhaag-link--hover',
          focus: 'denhaag-link--focus',
        },
      },
      [{ id: 'color-contrast', issue: 408 }],
    );
  });
});
