import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button } from '../..'
import { ButtonProps } from '../../components/input/Button/Button'
import pkg from '../../components/input/Button/package.json'
import { makeStyles } from "@material-ui/core";

export default {
  title: 'Components/Input/Button',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Button
} as Meta

const useStyles = makeStyles({
  contained: {
    backgroundColor: 'var(--mdh-button-background-color)',
    fontFamily: 'var(--mdh-button-font-family)',
    // '&.Primary': {
    //   color: 'white',
    // },
    // '&.Secondary': {
    //   color: 'var(--mdh-button-secondary-background-color)'
    // },
    '&:hover': {
      backgroundColor: 'var(--mdh-button-hover-background-color)',
      color: 'var(--mdh-button-hover-text-color)'
    },
    '&:focus': {
      backgroundColor: 'var(--mdh-button-focus-background-color)',
      color: 'var(--mdh-button-focus-text-color)'
    },
    '&$disabled': {
      backgroundColor: 'var(--mdh-button-disabled-background-color)'
    }
  },
  containedPrimary: {
    color: 'var(--mdh-button-background-color)'
  },
  containedSecondary: {
    color: 'var(--mdh-button-secondary-background-color)'
  },
  outlined: {
    borderRightColor: 'var(--mdh-button-background-color)',
    borderLeftColor: 'var(--mdh-button-background-color)',
    borderTopColor: 'var(--mdh-button-background-color)',
    borderBottomColor: 'var(--mdh-button-background-color)',
    '&:hover': {
      borderRightColor: 'var(--mdh-button-hover-background-color)',
      borderLeftColor: 'var(--mdh-button-hover-background-color)',
      borderTopColor: 'var(--mdh-button-hover-background-color)',
      borderBottomColor: 'var(--mdh-button-hover-background-color)'
    },
    '&:focus': {
      borderRightColor: 'var(--mdh-button-focus-background-color)',
      borderLeftColor: 'var(--mdh-button-focus-background-color)',
      borderTopColor: 'var(--mdh-button-focus-background-color)',
      borderBottomColor: 'var(--mdh-button-focus-background-color)'
    },
  },
  outlinedPrimary: {
    color: 'var(--mdh-button-background-color)'
  },
  outlinedSecondary: {
    color: 'var(--mdh-button-secondary-background-color)'
  },
  textPrimary: {
    color: 'var(--mdh-button-background-color)',
    '&:hover': {
      color: 'var(--mdh-button-disabled-background-color)',
    },
    '&:focus': {
      color: 'var(--mdh-button-disabled-background-color)',
    }
  },
  textSecondary: {
    color: 'var(--mdh-button-secondary-background-color)',
    '&:hover': {
      color: 'var(--mdh-button-disabled-background-color)',
    },
    '&:focus': {
      color: 'var(--mdh-button-disabled-background-color)'
    }
  }
})

const Template: Story<ButtonProps> = (args: any) => {
  const classes = useStyles()

  args.classes = {
    'contained': classes.contained, 'outlined': classes.outlined,
    'containedPrimary': classes.containedPrimary, 'containedSecondary': classes.containedSecondary,
    'textPrimary': classes.textPrimary, 'textSecondary': classes.textSecondary,
    'outlinedPrimary': classes.outlinedPrimary, 'outlinedSecondary': classes.outlinedSecondary }
  return <Button {...args}>Button</Button>
}

/**
 * Default Button
 */
export const Default = Template.bind({})
Default.args = {
  variant: 'contained'
}

/**
 * Primary Button
 */
export const Primary: Story<ButtonProps> = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'contained'
}

/**
 * Secondary Button
 */
export const Secondary: Story<ButtonProps> = Template.bind({})
Secondary.args = {
  color: 'secondary',
  variant: 'contained'
}

/**
 * Outlined Button
 */
export const Outlined: Story<ButtonProps> = Template.bind({})
Outlined.args = {
  variant: 'outlined'
}

/**
 * Text button
 */
export const Text: Story<ButtonProps> = Template.bind({})
Text.args = {
  variant: 'text'
}

/**
 * Small button
 */
export const Small: Story<ButtonProps> = Template.bind({})
Small.args = {
  size: 'small'
}

/**
 * Medium button
 */
export const Medium: Story<ButtonProps> = Template.bind({})
Medium.args = {
  size: 'medium'
}

/**
 * Large button
 */
export const Large: Story<ButtonProps> = Template.bind({})
Large.args = {
  size: 'large'
}

/**
 * Disabled Button
 */
export const Disabled: Story<ButtonProps> = Template.bind({})
Disabled.args = {
  disabled: true,
  className: 'mdh-button mdh-button-disabled'
}
