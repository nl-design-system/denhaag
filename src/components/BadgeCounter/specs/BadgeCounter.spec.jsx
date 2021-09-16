import * as React from 'react';
import BadgeCounter from '../src/index';

describe(`BadgeCounter tests`, () => {
  it('a11y and snapshots', () => {
    cy.snapshots(<BadgeCounter>13</BadgeCounter>, {});
  });
});
