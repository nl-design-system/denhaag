import React from "react";
import { Meta, Story } from "@storybook/react";
import SvgIcon, { SvgIconProps } from "./SvgIcon";
import pkg from "../package.json";

import Grid from "../../Grid";

import * as Icons from ".";

console.log();

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

const Template: Story<SvgIconProps> = (props: SvgIconProps) => {
  const children = Object.keys(Icons)
    .filter((iconName) => (iconName === "default" ? false : true))
    .map<React.ReactElement>((iconName) => {
      const IconElement = Icons[iconName];
      return (
        <Grid item xs={2} key={iconName}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <IconElement {...props} />
          </div>
          <p style={{ textAlign: "center", color: "#4B4B4B", fontFamily: "inherit" }}>{iconName}</p>
        </Grid>
      );
    });

  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
};
// (
//   // <SvgIcon component={RightArrowIcon} {...props}></SvgIcon>
//   <Icons.CalendarIcon></Icons.CalendarIcon>
// );

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
