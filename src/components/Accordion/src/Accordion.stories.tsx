import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import { Paragraph } from '@gemeente-denhaag/typography';
import Accordion, { AccordionDetails, AccordionProps, AccordionSummary } from '.';
import pkg from '../package.json';

export default {
  title: 'Components/Surfaces/Accordion',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args: AccordionProps) => (
  <div>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ChevronDownIcon />}>Click me to collapse me!</AccordionSummary>
      <AccordionDetails>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Paragraph>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ChevronDownIcon />}>Click to collapse this second section</AccordionSummary>
      <AccordionDetails>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Paragraph>
      </AccordionDetails>
    </Accordion>
    <Accordion {...args}>
      <AccordionSummary expandIcon={<ChevronDownIcon />}>Click to collapse this third section</AccordionSummary>
      <AccordionDetails>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </Paragraph>
      </AccordionDetails>
    </Accordion>
  </div>
);

// language=JS
const defaultCode = `
// In order to use the Den Haag icons, make sure you install the @gemeente-denhaag/icons package
  import { Accordion, AccordionDetails, AccordionSummary, Paragraph } from "@gemeente-denhaag/denhaag-component-library";
  import { ChevronDownIcon } from "@gemeente-denhaag/icons";

  function App() {
    return (
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ChevronDownIcon/>}>
            Click to collapse me!
          </AccordionSummary>
          <AccordionDetails>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo
              lobortis eget.
            </Paragraph>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ChevronDownIcon/>}>
            Click to collapse this second section
          </AccordionSummary>
          <AccordionDetails>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo
              lobortis eget.
            </Paragraph>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ChevronDownIcon/>}>
            Click to collapse this third section
          </AccordionSummary>
          <AccordionDetails>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo
              lobortis eget.
            </Paragraph>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
`;

/**
 * Implementation of Accordion
 */
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

// language=JS
const defaultExpandedCode = `
  import { Accordion, AccordionDetails, AccordionSummary, Paragraph } from "@gemeente-denhaag/denhaag-component-library";
  import { ChevronDownIcon } from "@gemeente-denhaag/icons";

  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ChevronDownIcon/>}>
      Click to collapse me!
    </AccordionSummary>
    <AccordionDetails>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo
        lobortis eget.
      </Paragraph>
    </AccordionDetails>
  </Accordion>
`;

/**
 * A tab which is expanded by default
 */
export const DefaultExpanded = Template.bind({});
DefaultExpanded.args = {
  defaultExpanded: true,
};

DefaultExpanded.parameters = {
  docs: {
    source: {
      code: defaultExpandedCode,
    },
  },
};

// language=JS
const disabledCode = `
  import { Accordion, AccordionDetails, AccordionSummary, Paragraph } from "@gemeente-denhaag/denhaag-component-library";
  import { ChevronDownIcon } from "@gemeente-denhaag/icons";

  <Accordion disabled>
    <AccordionSummary expandIcon={<ChevronDownIcon/>}>
      Click to collapse me!
    </AccordionSummary>
    <AccordionDetails>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
        leo
        lobortis eget.
      </Paragraph>
    </AccordionDetails>
  </Accordion>
`;

/**
 * A disabled Accordion
 */
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

Disabled.parameters = {
  docs: {
    source: {
      // language=JS
      code: disabledCode,
    },
  },
};
