import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen, ByRoleOptions } from '@testing-library/react'

import { Button } from "../src/index";

import { axe, toHaveNoViolations } from 'jest-axe';


describe('Button Unit/Dom testing', function() {
  test("button is clickable", async () => {
    let clicked = 0;
    render(<Button color="primary" onClick={() => {clicked += 1;} }>Click this</Button>)

    // prefer getByRole since it uses the accessibility tree
    fireEvent.click(screen.getByRole('button', {name: 'Click this'} as ByRoleOptions))
    expect(clicked).toBe(1)
  });
});


describe("Button snapshot testing", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Button>{"Test"}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage with react', async () => {
  // const table = document.createElement('table')

  // const { container } = render(<Button>Click button</Button>, {
  //   container: document.body.appendChild(table),
  // })

  render(<Button>Click button</Button>, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})