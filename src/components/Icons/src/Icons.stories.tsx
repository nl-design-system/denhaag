import React from "react";
import { Meta, Story } from "@storybook/react";
import SvgIcon, { SvgIconProps } from "./SvgIcon";
import pkg from "../package.json";

import RightArrowIcon from "./svg/arrow-right.svg";

export default {
  title: "Components/Data Display/Icons",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
  component: SvgIcon,
} as Meta;

const Template: Story<SvgIconProps> = (props: SvgIconProps) => (
  <SvgIcon component={RightArrowIcon} {...props}></SvgIcon>
);

const defaultCode = `
import RightArrowIcon from "./svg/arrow-right.svg";

<SvgIcon component={RightArrowIcon}></SvgIcon>
`;

/**
 * Default SvgIcon
 */
export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};
