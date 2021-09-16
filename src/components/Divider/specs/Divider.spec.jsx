import * as React from 'react';
import Divider from '../src/index';

describe(`Divider tests`, () => {
  it('a11y and snapshots', () => {
    cy.snapshots(
      <div>
        <span>Before Divider</span>
        <Divider />
        <span>After Divider</span>
      </div>,
      {},
    );

    cy.snapshots(
      <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
        <span>Before Divider</span>
        <Divider orientation="vertical" />
        <span>After Divider</span>
      </div>,
      {},
    );
  });
});
