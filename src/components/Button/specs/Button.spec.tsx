import * as React from "react";
import { mount } from "@cypress/react";
import Button, { ButtonProps } from "../src/index";

it("Button", async () => {
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
