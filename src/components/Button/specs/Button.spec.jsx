import * as React from 'react'
import { mount } from '@cypress/react'
import Button from '../src/index'

it('Button', () => {
  mount(<Button>Test button</Button>)
  cy.get('button').contains('Test button').click()
})
