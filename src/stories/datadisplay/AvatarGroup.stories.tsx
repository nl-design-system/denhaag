import React from "react";
import { Meta, Story } from "@storybook/react";
import Avatar from "../../components/Avatar/Avatar";
import { AvatarGroup, AvatarGroupProps } from "../../components/AvatarGroup/AvatarGroup";
import pkg from "../../components/AvatarGroup/package.json";

export default {
  title: "Components/Data Display/AvatarGroup",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
  },
  component: AvatarGroup,
} as Meta;

const Template: Story<AvatarGroupProps> = (args: any) => (
  <AvatarGroup {...args}>
    <Avatar src={"https://c1.staticflickr.com/9/8486/8245351490_2746ef972c_b.jpg"} alt="Planet Earth" />
    <Avatar>DH</Avatar>
    <Avatar
      src={"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-portal-aged-pixel.jpg"}
      alt="Woman staring into a portal"
    />
  </AvatarGroup>
);

/**
 * Implementation of AvatarGroup
 */
export const Default = Template.bind({});

/**
 * Implementation of AvatarGroup using small spacing
 */
export const SmallSpacing = Template.bind({});
SmallSpacing.args = {
  spacing: "small",
};
