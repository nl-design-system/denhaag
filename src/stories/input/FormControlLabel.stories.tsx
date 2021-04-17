import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import Checkbox from "../../components/Checkbox/Checkbox";
import FormControlLabel, { FormControlLabelProps } from "../../components/FormControlLabel";
import pkg from "../../components/FormControlLabel/package.json";

export default {
  title: "Components/Input/FormControlLabel",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic"
      }
    }
  },
  component: FormControlLabel
} as Meta;

const Template: Story<FormControlLabelProps> = (args: any) => (
  <FormControlLabel label="Checkbox" control={<Checkbox {...args} />} {...args} />
);

/**
 * Default FormControlLabel
 */
export const Default: Story<FormControlLabelProps> = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <FormControlLabel
          label="Checkbox"
          control='{<Checkbox onChange={} />}'
          onChange='{() => {}}'
        />
      `
    }
  }
}

/**
 * FormControlLabel with label before the FormControl
 */
export const Start: Story<FormControlLabelProps> = Template.bind({});
Start.args = {
  labelPlacement: "start"
};

Start.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <FormControlLabel
          label="Checkbox"
          labelPlacement='start'
          control='{<Checkbox onChange={} />}'
          onChange='{() => {}}'
        />
      `
    }
  }
}

/**
 * FormControlLabel with label on top of the FormControl
 */
export const Top: Story<FormControlLabelProps> = Template.bind({});
Top.args = {
  labelPlacement: "top"
};

Top.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <FormControlLabel
          label="Checkbox"
          labelPlacement="top"
          control='{<Checkbox onChange={} />}'
          onChange='{() => {}}'
        />
      `
    }
  }
}

/**
 * FormControlLabel with label on the bottom of the FormControl
 */
export const Bottom: Story<FormControlLabelProps> = Template.bind({});
Bottom.args = {
  labelPlacement: "bottom"
};

Bottom.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <FormControlLabel
          label="Checkbox"
          labelPlacement="bottom"
          control='{<Checkbox onChange={} />}'
          onChange='{() => {}}'
        />
      `
    }
  }
}

/**
 * FormControlLabel with label after the FormControl
 */
export const End: Story<FormControlLabelProps> = Template.bind({});
End.args = {
  labelPlacement: "end"
};

End.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <FormControlLabel
          label="Checkbox"
          labelPlacement="end"
          control='{<Checkbox onChange={} />}'
          onChange='{() => {}}'
        />
      `
    }
  }
}
