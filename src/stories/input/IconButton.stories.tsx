import React from 'react'
import { Meta, Story } from '@storybook/react'
import { IconButton, IconButtonProps } from '../../components/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import pkg from '../../components/IconButton/package.json'

export default {
  title: 'Components/Input/IconButton',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  },
  component: IconButton
} as Meta

const Template: Story<IconButtonProps> = (args: IconButtonProps) => (
  <IconButton {...args}>
    <DeleteIcon />
  </IconButton>
)

/**
 * Implementation of IconButton
 */
export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <IconButton>
          <DeleteIcon />
        </IconButton>
      `
    }
  }
}

/**
 * Implementation of IconButton with primary coloured components.
 */
export const PrimaryColoured = Template.bind({})
PrimaryColoured.args = {
  color: 'primary'
}

PrimaryColoured.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <IconButton color='primary'>
          <DeleteIcon />
        </IconButton>
      `
    }
  }
}

export const SmallSized = Template.bind({})
SmallSized.args = {
  size: 'small'
}

SmallSized.parameters = {
  docs: {
    source: {
      // language=HTML
      code: `
        <IconButton size="small">
          <DeleteIcon />
        </IconButton>
      `
    }
  }
}
