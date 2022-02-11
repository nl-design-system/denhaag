import * as React from 'react';
import BadgeCounter from '../dist';

describe(`BadgeCounter tests`, () => {
  it('a11y and snapshots', () => {
    cy.snapshots(<BadgeCounter>13</BadgeCounter>, {});
  });
});
