import React from "react";
import { Meta, Story } from "@storybook/react";
import { ExpandMore } from "@material-ui/icons";
import Accordion, { AccordionProps } from "../../components/Accordion";
import AccordionSummary from "../../components/AccordionSummary";
import Typography from "../../components/Typography";
import AccordionDetails from "../../components/AccordionDetails";
import pkg from "../../components/Accordion/package.json";

export default {
  title: "Components/Surfaces/Accordion",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic"
      }
    }
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
Default.parameters = {
  docs: {
    source: {
      // language=JS
      code: `
        <Accordion>
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
      `
    }
  }
}

/**
 * A tab which is expanded by default
 */
export const DefaultExpanded = Template.bind({});
DefaultExpanded.args = {
  defaultExpanded: true
};

DefaultExpanded.parameters = {
  docs: {
    source: {
      // language=JS
      code: `
        <Accordion defaultExpanded>
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
      `
    }
  }
}

/**
 * A disabled Accordion
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

Disabled.parameters = {
  docs: {
    source: {
      // language=JS
      code: `
        <Accordion disabled>
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
      `
    }
  }
}

/**
 * An Accordion component with square edges.
 */
export const Squared = Template.bind({});
Squared.args = {
  square: true
};

Squared.parameters = {
  docs: {
    source: {
      // language=JS
      code: `
        <Accordion square>
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
      `
    }
  }
}
