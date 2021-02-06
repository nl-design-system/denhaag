import React from "react";
import { Meta, Story } from "@storybook/react";
import { Accordion, AccordionProps } from "../../components/surfaces/Accordion/Accordion";
import pkg from "../../components/surfaces/Accordion/package.json";
import AccordionSummary from "../../components/surfaces/AccordionSummary/AccordionSummary";
import { ExpandMore } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import AccordionDetails from "../../components/surfaces/AccordionDetails/AccordionDetails";

export default {
  title: "Components/Surfaces/Accordion",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: Accordion,
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
  defaultExpanded: true,
};

/**
 * A disabled Accordion
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

/**
 * An Accordion component with square edges.
 */
export const Squared = Template.bind({});
Squared.args = {
  square: true,
};
