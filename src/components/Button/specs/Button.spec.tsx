import * as React from "react";
import { mount } from "@cypress/react";
import Button, { ButtonProps } from "../src/index";

describe("Button tests", () => {
  it("can be clicked", () => {
    const props: ButtonProps = {
      onClick: () => {
        console.log("Clicked");
      },
    };

    const spy = cy.spy(props, "onClick").as("Button click");

    mount(<Button onClick={props.onClick}>Test button</Button>);

    cy.get("button")
      .contains("Test button")
      .click()
      .then(() => expect(spy).to.have.been.calledOnce);
  });

  it("does not violate any accessibility rules", () => {
    mount(<Button>Test button</Button>);
    cy.injectAxe()
    cy.checkA11y('button')
  });
});
