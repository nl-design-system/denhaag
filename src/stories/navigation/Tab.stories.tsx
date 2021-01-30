import React from 'react'
import { Meta, Story } from '@storybook/react'
import Tab, { TabProps } from '../../components/navigation/Tab/Tab'
import pkg from '../../components/navigation/Tab/package.json'
import TabContext from '../../components/navigation/TabContext/TabContext'
import Tabs from '../../components/navigation/Tabs/Tabs'
import TabPanel from '../../components/navigation/TabPanel/TabPanel'

export default {
  title: 'Components/Navigation/Tabs/Tab',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`
  },
  component: Tab
} as Meta

const Template: Story<TabProps> = (args: any) => {
  const [value, setValue] = React.useState(0)

  return (
    <TabContext value={value.toString()}>
      <Tabs
        value={value}
        onChange={

          (event: React.ChangeEvent<unknown>, newValue: number) => {
            setValue(newValue)
          }
        }
      >
        <Tab {...args} />
        <Tab label='Another tab' value={1} />
        <Tab label='Yet another tab' value={2} />
      </Tabs>
      <TabPanel value='1'>Item One</TabPanel>
      <TabPanel value='2'>Item Two</TabPanel>
      <TabPanel value='3'>Item Three</TabPanel>
    </TabContext>
  )
}

/**
 * Implementation of Tab
 */
export const Default = Template.bind({})
Default.args = {
  label: 'A tab'
}

/**
 * Implementation of Tab which is disabled
 */
export const Disabled = Template.bind({})
Disabled.args = {
  label: 'A disabled tab',
  disabled: true
}

/**
 * Implementation of Tab without a ripple effect.
 */
export const DisabledRipple = Template.bind({})
DisabledRipple.args = {
  label: 'A disabled ripple tab',
  disableRipple: true,
  disableFocusRipple: true
}

/**
 * Implementation of Tab with wrapped labels
 */
export const Wrapped = Template.bind({})
Wrapped.args = {
  label: 'This label is very long since it needs to be wrapped around the tab',
  wrapped: true
}
