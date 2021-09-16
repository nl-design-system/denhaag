import * as React from 'react';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Paragraph, LeadParagraph } from '../src/index';

describe(`Typography tests`, () => {
  it('a11y and snapshots', () => {
    cy.snapshots(<Heading1>This is a bit of text inside a Heading1 component.</Heading1>, {});
    cy.snapshots(<Heading2>This is a bit of text inside a Heading2 component.</Heading2>, {});
    cy.snapshots(<Heading3>This is a bit of text inside a Heading3 component.</Heading3>, {});
    cy.snapshots(<Heading4>This is a bit of text inside a Heading4 component.</Heading4>, {});
    cy.snapshots(<Heading5>This is a bit of text inside a Heading5 component.</Heading5>, {});
    cy.snapshots(<Paragraph>This is a bit of text inside a Paragraph component.</Paragraph>, {});
    cy.snapshots(<LeadParagraph>This is a bit of text inside a LeadParagraph component.</LeadParagraph>, {});
  });
});
