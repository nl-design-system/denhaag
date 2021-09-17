import * as React from 'react';
import * as Icons from '../src/index';

const allIconNames = Object.keys(Icons).filter((iconName) => (iconName === 'default' ? false : true));

describe(`Icons tests`, () => {
  it('a11y and snapshots', () => {
    allIconNames.forEach((iconName) => {
      cy.mount(<div>{iconName}</div>);

      const IconElement = Icons[iconName];
      cy.snapshots(
        <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconElement />
          </div>
          <p style={{ textAlign: 'center', color: '#4B4B4B', fontFamily: 'monospace' }}>{iconName}</p>
        </div>,
        {},
      );
    });
  });
});
