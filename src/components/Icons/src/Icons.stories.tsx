import React from 'react';
import { Meta, Story } from '@storybook/react';
import Grid from '../../Grid';
import SvgIcon, { SvgIconProps } from '.';
import * as Icons from '.';
import pkg from '../package.json';

const allIconNames = Object.keys(Icons).filter((iconName) => (iconName === 'default' ? false : true));

export default {
  title: 'Components/Data Display/Icons',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  argTypes: {
    component: {
      options: allIconNames,
      defaultValue: 'ArrowLeftIcon',
    },
  },
  component: SvgIcon,
} as Meta;

const AllTemplate: Story<SvgIconProps> = (props: SvgIconProps) => {
  const children = allIconNames.map<React.ReactElement>((iconName) => {
    const IconElement = Icons[iconName];
    return (
      <Grid item xs={2} key={iconName}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IconElement {...props} />
        </div>
        <p style={{ textAlign: 'center', color: '#4B4B4B', fontFamily: 'monospace' }}>{iconName}</p>
      </Grid>
    );
  });

  return (
    <Grid container spacing={3}>
      {children}
    </Grid>
  );
};

const SingleTemplate: Story<SvgIconProps> = ({ component, ...props }: SvgIconProps) => {
  if (typeof component === 'string') {
    return <SvgIcon component={Icons[component]} {...props} />;
  } else {
    return <SvgIcon {...props} />;
  }
};

const defaultCode = `
// Update RightArrowIcon to the icon you would like to use.
import { RightArrowIcon } from "@gemeente-denhaag/icons";
<RightArrowIcon />
`;

export const AllIcons = AllTemplate.bind({});
AllIcons.parameters = {
  controls: { exclude: ['component', 'children', 'classes'] },
  docs: {
    source: {
      code: defaultCode,
    },
  },
};

export const SingleIcon = SingleTemplate.bind({});
SingleIcon.parameters = {
  docs: {
    source: {
      code: defaultCode,
    },
  },
};
