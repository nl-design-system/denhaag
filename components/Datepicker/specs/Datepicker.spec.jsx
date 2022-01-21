import * as React from 'react';
import { formatISO, format, subMonths } from 'date-fns';
import Datepicker from '../src';
import { nl, enUS } from '../src/locale';

describe(`Datepicker tests`, () => {
  it('can be opened', () => {
    cy.mount(<Datepicker></Datepicker>);

    cy.get('.denhaag-datepicker__button').click();
    cy.get('.denhaag-datepicker__calendar').should('be.visible');
  });

  it('can be changed', () => {
    const props = {
      onChange: (event) => {
        expect(event.target.value).to.equal(formatISO(new Date(), { representation: 'date' }));
      },
    };

    const spy = cy.spy(props, 'onChange').as('Input Change');

    cy.mount(<Datepicker onChange={props.onChange}></Datepicker>);

    cy.get('.denhaag-datepicker__button').click();
    cy.get('.denhaag-datepicker__calendar-day--current')
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);
    cy.get('.denhaag-datepicker__calendar').should('not.be.visible');
  });

  it('can change months', () => {
    cy.mount(<Datepicker></Datepicker>);

    cy.get('.denhaag-datepicker__button').click();
    cy.get('.denhaag-datepicker__calendar-month time')
      .invoke('attr', 'datetime')
      .should('eq', format(new Date(), 'yyyy-MM'));
    cy.get('.denhaag-datepicker__calendar-navigation:first-of-type').click();
    cy.get('.denhaag-datepicker__calendar-month time')
      .invoke('attr', 'datetime')
      .should('eq', format(subMonths(new Date(), 1), 'yyyy-MM'));
    cy.get('.denhaag-datepicker__calendar-navigation:last-of-type').click();
    cy.get('.denhaag-datepicker__calendar-month time')
      .invoke('attr', 'datetime')
      .should('eq', format(new Date(), 'yyyy-MM'));
  });

  it('supports locales', () => {
    cy.mount(<Datepicker locale={enUS}></Datepicker>);

    cy.get('.denhaag-datepicker__button').click();
    cy.get('.denhaag-datepicker__calendar-month time').should(
      'have.text',
      format(new Date(), 'MMMM yyyy', { locale: enUS }),
    );
    cy.get('.denhaag-datepicker__calendar-heading:first-of-type')
      .invoke('attr', 'abbr')
      .should('eq', enUS.localize?.day(enUS.options?.weekStartsOn || 0));

    cy.mount(<Datepicker locale={nl}></Datepicker>);

    cy.get('.denhaag-datepicker__button').click();
    cy.get('.denhaag-datepicker__calendar-month time').should(
      'have.text',
      format(new Date(), 'MMMM yyyy', { locale: nl }),
    );
    cy.get('.denhaag-datepicker__calendar-heading:first-of-type')
      .invoke('attr', 'abbr')
      .should('eq', nl.localize?.day(nl.options?.weekStartsOn || 0));
  });

  it('can be disabled', () => {
    cy.mount(<Datepicker disabled={true}></Datepicker>);

    cy.get('.denhaag-datepicker__input').should('have.attr', 'disabled');
  });

  // Some magic happens here to ensure the HTML stays the same independent of current date
  it('a11y and snapshots', () => {
    // closed datepicker variants
    cy.snapshots(
      <Datepicker startDate={new Date('2021-01-22')}></Datepicker>,
      {
        error: true,
        disabled: true,
      },
      {
        selector: '.denhaag-datepicker__input',
        states: {
          hover: 'denhaag-datepicker__input--hover',
          focus: 'denhaag-datepicker__input--focus',
        },
      },
      [{ id: 'label', logDisabled: true }],
      undefined,
      () => {
        cy.get('.denhaag-datepicker__calendar-day').invoke('removeClass', 'denhaag-datepicker__calendar-day--current');
        cy.get('.denhaag-datepicker__calendar-day')
          .contains('21')
          .invoke('addClass', 'denhaag-datepicker__calendar-day--current');
      },
    );

    // opened datepicker with selected date
    cy.snapshots(
      <Datepicker startDate={new Date('2021-01-22')}></Datepicker>,
      {},
      {
        selector: '.denhaag-datepicker__calendar-day',
        states: {
          hover: 'denhaag-datepicker__calendar-day--hover',
          focus: 'denhaag-datepicker__calendar-day--focus',
        },
      },
      [{ id: 'label', logDisabled: true }],
      undefined,
      () => {
        cy.get('#wrapper').invoke('css', 'width', '348px');
        cy.get('#wrapper').invoke('css', 'height', '378px');
        cy.get('.denhaag-datepicker__calendar-day').invoke('removeClass', 'denhaag-datepicker__calendar-day--current');
        cy.get('.denhaag-datepicker__calendar-day')
          .contains('21')
          .invoke('addClass', 'denhaag-datepicker__calendar-day--current');
        cy.get('.denhaag-datepicker__button').click();
        cy.get('.denhaag-datepicker__calendar-day').contains('12').click();
        cy.get('.denhaag-datepicker__button').click();
      },
    );
  });
});
