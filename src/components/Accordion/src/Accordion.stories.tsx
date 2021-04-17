import React from "react";
import { Meta, Story } from "@storybook/react";
import { ExpandMore } from "@material-ui/icons";
import Accordion, { AccordionProps } from ".";
import AccordionSummary from "../../AccordionSummary";
import Typography from "../../Typography";
import AccordionDetails from "../../AccordionDetails";
import pkg from "../package.json";

export default {
  title: "Components/Surfaces/Accordion",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Accordion
} as Meta;

const Template: Story<AccordionProps> = (args: any) => (
  <Accordion {...args}>
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography>Click me to collapse me!</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
);

/**
 * Implementation of Accordion
 */
export const Default = Template.bind({});

/**
 * A tab which is expanded by default
 */
export const DefaultExpanded = Template.bind({});
DefaultExpanded.args = {
  defaultExpanded: true
};

/**
 * A disabled Accordion
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

/**
 * An Accordion component with square edges.
 */
export const Squared = Template.bind({});
Squared.args = {
  square: true
};
