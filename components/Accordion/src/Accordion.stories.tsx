import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ChevronDownIcon } from '@gemeente-denhaag/icons';
import { Paragraph } from '@gemeente-denhaag/typography';
import Accordion, { AccordionDetails, AccordionProps, AccordionSummary } from './index';
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
  <Accordion {...args}>
    <AccordionSummary expandIcon={<ChevronDownIcon />}>
      <Paragraph>Click me to collapse me!</Paragraph>
    </AccordionSummary>
    <AccordionDetails>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </Paragraph>
    </AccordionDetails>
  </Accordion>
);

// language=JS
const defaultCode = `
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Paragraph>Click me to collapse me!</Paragraph>
    </AccordionSummary>
    <AccordionDetails>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </Paragraph>
    </AccordionDetails>
  </Accordion>
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
  <Accordion defaultExpanded>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Paragraph>Click me to collapse me!</Paragraph>
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
  <Accordion disabled>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Paragraph>Click me to collapse me!</Paragraph>
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

// language=JS
const squaredCode = `
  <Accordion square>
    <AccordionSummary expandIcon={<ExpandMore/>}>
      <Paragraph>Click me to collapse me!</Paragraph>
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
 * An Accordion component with square edges.
 */
export const Squared = Template.bind({});
Squared.args = {
  square: true,
};

Squared.parameters = {
  docs: {
    source: {
      // language=JS
      code: squaredCode,
    },
  },
};
