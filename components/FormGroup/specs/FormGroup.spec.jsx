import * as React from 'react';
import FormGroup from '../dist';
import Checkbox from '../../Checkbox';
import FormControlLabel from '../../FormControlLabel';

describe(`FormGroup tests`, () => {
  it('a11y and snapshots', () => {
    cy.snapshots(
      <FormGroup label="Label" helperText="Helper/Error text">
        <FormControlLabel label="Checkbox" control={<Checkbox error checked></Checkbox>}></FormControlLabel>
        <FormControlLabel label="Checkbox" control={<Checkbox disabled></Checkbox>}></FormControlLabel>
        <FormControlLabel label="Checkbox" control={<Checkbox checked></Checkbox>}></FormControlLabel>
        <FormControlLabel label="Checkbox" control={<Checkbox></Checkbox>}></FormControlLabel>
      </FormGroup>,
      {
        error: true,
      },
    );
  });
});
