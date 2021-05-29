import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import FormControlLabel from '@gemeente-denhaag/formcontrollabel';
import { ShowIcon, HideIcon } from '@gemeente-denhaag/icons';

import Radio, { RadioProps } from '..';
import pkg from '../../package.json';

export default {
  title: 'Components/Input/Radio/Radio',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args: RadioProps) => (
  <FormControlLabel label="Radio" control={<Radio {...args} />} />
);

export const Default: Story<RadioProps> = Template.bind({});
Default.args = {
  color: 'default',
  size: 'medium',
};

export const Primary: Story<RadioProps> = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary: Story<RadioProps> = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

// language=JS
const iconCode = `
 <FormControlLabel
   control={<Radio checkedIcon={<HideIcon/>} icon={<ShowIcon/>} onChange={() => {}}/>}
   label="Radio"
 />
`;

export const Icons: Story<RadioProps> = Template.bind({});
Icons.args = {
  icon: <ShowIcon />,
  checkedIcon: <HideIcon />,
};
Icons.parameters = {
  docs: {
    source: {
      // language=HTML
      code: iconCode,
    },
  },
};
