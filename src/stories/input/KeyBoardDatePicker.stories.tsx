import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  KeyboardDatePicker,
  KeyboardDatePickerProps,
} from "../../components/Pickers/KeyboardDatePicker/KeyboardDatePicker";
import { PickersUtilsProvider } from "../../components/PickersUtilsProvider/PickersUtilsProvider";
import DateFnsUtils from "@date-io/date-fns";
import pkg from "../../components/Pickers/package.json";

export default {
  title: "Components/Input/KeyboardDatePicker",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "code"
      }
    }
  },
  component: KeyboardDatePicker,
} as Meta;

const Template: Story<KeyboardDatePickerProps> = (args: any) => {
  const [value, setValue] = React.useState("1970-01-01");
  args.onChange = (newValue: any) => {
    setValue(newValue);
  };
  args.value = value;

  return (
    <PickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker {...args} />
    </PickersUtilsProvider>
  );
};

/**
 * Default KeyboardDatePicker
 */
export const Default: Story<KeyboardDatePickerProps> = Template.bind({});
Default.args = {
  clearable: true,
};
