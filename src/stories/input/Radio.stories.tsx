import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Radio } from '../..'
import { RadioProps } from '../../components/input/Radio/Radio'
import pkg from '../../components/input/Radio/package.json'

export default {
  title: 'Components/Input/Radio',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Radio
} as Meta

const Template: Story<RadioProps> = (args: any) => <Radio {...args} />

export const Default = Template.bind({})
