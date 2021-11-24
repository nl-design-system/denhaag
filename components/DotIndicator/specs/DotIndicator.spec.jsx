import * as React from 'react';
import DotIndicator from '../src';
import Button from '../../Button';
import Avatar from '../../Avatar';

describe(`DotIndicator tests`, () => {
  it('a11y and snapshots', () => {
    cy.snapshots(
      <DotIndicator overlap={'rectangle'}>
        <Button variant={'secondary'}>Read messages</Button>
      </DotIndicator>,
      {},
    );
    cy.snapshots(
      <DotIndicator overlap={'circle'}>
        <Avatar></Avatar>
      </DotIndicator>,
      {},
    );
  });
});
