import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FormControlLabel } from '../../components/input/FormControlLabel/FormControlLabel'
import { Radio } from '../..'
import { RadioProps } from '../../components/input/Radio/Radio'
import pkg from '../../components/input/Radio/package.json'

import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'

export default {
  title: 'Components/Input/Radio',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Radio
} as Meta

const Template: Story<RadioProps> = (args: any) => {
  return (
    <div>
      <FormControlLabel label='Radio' control={<Radio {...args} />} />
    </div>
  )
}

export const Default: Story<RadioProps> = Template.bind({})
Default.args = {
  color: 'default',
  size: 'medium'
}

export const Primary: Story<RadioProps> = Template.bind({})
Primary.args = {
  color: 'primary'
}

export const Secondary: Story<RadioProps> = Template.bind({})
Secondary.args = {
  color: 'secondary'
}

export const Icons: Story<RadioProps> = Template.bind({})
Icons.args = {
  icon: <ThumbDownIcon />,
  checkedIcon: <ThumbUpIcon />
}
