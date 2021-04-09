import React from "react";
import { Story, Meta } from "@storybook/react";
import DateFnsUtils from "@date-io/date-fns";
import DatePicker, { DatePickerProps } from "../../components/Pickers/DatePicker/DatePicker";
import { PickersUtilsProvider } from "../../components/PickersUtilsProvider/PickersUtilsProvider";
import pkg from "../../components/Pickers/package.json";

export default {
  title: "Components/Input/DatePicker",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = (args: any) => {
  const [value, setValue] = React.useState("1970-01-01");
  args.onChange = (newValue: any) => {
    setValue(newValue);
  };
  args.value = value;

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker {...args} />
    </PickersUtilsProvider>
  );
};

/**
 * Default Datepicker
 */
export const Default: Story<DatePickerProps> = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code:
`
import DateFnsUtils from "@date-io/date-fns";

const [value, setValue] = React.useState("1970-01-01");

<PickersUtilsProvider utils={DateFnsUtils}>
  <DatePicker value={value} onChange={(newValue: any) => {
    setValue(newValue);
  }} />
</PickersUtilsProvider>
`
    }
  }
}

/**
 * Inline Datepicker
 */
export const Inline: Story<DatePickerProps> = Template.bind({});
Inline.args = {
  variant: "inline",
};

Inline.parameters = {
  docs: {
    source: {
      code:
`
import DateFnsUtils from "@date-io/date-fns";

const [value, setValue] = React.useState("1970-01-01");

<PickersUtilsProvider utils={DateFnsUtils}>
  <DatePicker variant="inline" value={value} onChange={(newValue: any) => {
    setValue(newValue);
  }} />
</PickersUtilsProvider>
`
    }
  }
}

/**
 * Static Datepicker
 */
export const Static: Story<DatePickerProps> = Template.bind({});
Static.args = {
  variant: "static",
};
Static.parameters = {
  docs: {
    source: {
      code:
`
import DateFnsUtils from "@date-io/date-fns";

const [value, setValue] = React.useState("1970-01-01");

<PickersUtilsProvider utils={DateFnsUtils}>
  <DatePicker variant="static" value={value} onChange={(newValue: any) => {
    setValue(newValue);
  }} />
</PickersUtilsProvider>
`
    }
  }
}
