import React from "react";
import { Meta, Story } from "@storybook/react";
import Card, { CardProps } from ".";
import pkg from "../package.json";

const date = new Date("2020-01-21");

export default {
  title: "Components/Cards/Card",
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Card
} as Meta;


const Template: Story<CardProps> = (args: unknown) => (
  <Card {...args} title="Shrimp and Chorizo Paella" 
    subTitle="This impressive paella is a perfect party dish and a fun meal to cook."
    date={date}/>
);

/**
 * Implementation of Card
 */
export const Default = Template.bind({});

/**
 * Case variant of Card component
 */
export const Case = Template.bind({});
Case.args = {
  variant: "case"
};
