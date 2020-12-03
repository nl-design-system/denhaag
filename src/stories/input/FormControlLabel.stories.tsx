import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox from '../../components/input/Checkbox/Checkbox'
import FormControlLabel, { FormControlLabelProps } from '../../components/input/FormControlLabel/FormControlLabel'
import pkg from '../../components/input/FormControlLabel/package.json'

export default {
  title: 'Components/Input/FormControlLabel',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: FormControlLabel
} as Meta

const Template: Story<FormControlLabelProps> = (args: any) => (
  <FormControlLabel
    label='Checkbox'
    control={<Checkbox {...args} />}
    {...args}
  />
)

/**
 * Default FormControlLabel
 */
export const Default: Story<FormControlLabelProps> = Template.bind({})

/**
 * FormControlLabel with label before the FormControl
 */
export const Start: Story<FormControlLabelProps> = Template.bind({})
Start.args = {
  labelPlacement: 'start'
}

/**
 * FormControlLabel with label on top of the FormControl
 */
export const Top: Story<FormControlLabelProps> = Template.bind({})
Top.args = {
  labelPlacement: 'top'
}

/**
 * FormControlLabel with label on the bottom of the FormControl
 */
export const Bottom: Story<FormControlLabelProps> = Template.bind({})
Bottom.args = {
  labelPlacement: 'bottom'
}

/**
 * FormControlLabel with label after the FormControl
 */
export const End: Story<FormControlLabelProps> = Template.bind({})
End.args = {
  labelPlacement: 'end'
}
