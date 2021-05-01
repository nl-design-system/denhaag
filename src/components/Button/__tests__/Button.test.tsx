import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen, ByRoleOptions } from '@testing-library/react'

import { Button } from "../src/index";

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
