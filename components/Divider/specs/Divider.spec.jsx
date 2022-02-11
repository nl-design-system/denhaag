import * as React from 'react';
import Divider from '../dist';

describe(`Divider tests`, () => {
  it('a11y and snapshots', () => {
    cy.snapshots(
      <div>
        <span>Before Divider</span>
        <Divider />
        <span>After Divider</span>
      </div>,
      {},
      {},
      [],
      'Divider',
    );

    cy.snapshots(
      <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
        <span>Before Divider</span>
        <Divider orientation="vertical" />
        <span>After Divider</span>
      </div>,
      {},
      {},
      [],
      'Divider',
    );
  });
});
