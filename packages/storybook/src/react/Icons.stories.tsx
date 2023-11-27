import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@gemeente-denhaag/icons';
import SvgIcon, { ArrowLeftIcon } from '@gemeente-denhaag/icons';
import readme from '../../../../components/Icons/README.md';

const allIcons = Object.entries(Icons).filter(([key]) => (key === 'default' ? false : true));

const exampleArgs = {};

const meta = {
  id: 'react-data-display-icons',
  title: 'React/Data Display/Icons',
  component: SvgIcon,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    chromatic: { viewports: [1768, 1280, 768, 360] },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO: add controls to select icon
export const Default: Story = {
  args: { ...exampleArgs, component: ArrowLeftIcon },
};

export const All: Story = {
  render: (args) => {
    const children = allIcons.map<React.ReactElement>(([key, value]) => {
      const IconElement = value;

      return (
        <div key={key} style={{ flexBasis: '16.666667%' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconElement {...args} />
          </div>
          <p style={{ textAlign: 'center', color: '#4B4B4B', fontFamily: 'monospace' }}>{key}</p>
        </div>
      );
    });

    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</div>;
  },
};

// export default {
//   title: 'React/Data Display/Icons',
//   parameters: {
//     componentSubtitle: `${pkg.name} - ${pkg.version}`,
//     docs: {
//       source: {
//         type: 'dynamic',
//       },
//     },
//     status: {
//       type: 'ALPHA',
//     },
//   },
//   argTypes: {
//     component: {
//       options: allIconNames,
//       defaultValue: 'ArrowLeftIcon',
//     },
//   },
//   component: SvgIcon,
// } as Meta;

// const AllTemplate: Story<SvgIconProps> = (props: SvgIconProps) => {
//   const children = allIconNames.map<React.ReactElement>((iconName) => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const IconElement = (Icons as any)[iconName];
//     return (
//       <div style={{ flexBasis: '16.666667%' }} key={iconName}>
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <IconElement {...props} />
//         </div>
//         <p style={{ textAlign: 'center', color: '#4B4B4B', fontFamily: 'monospace' }}>{iconName}</p>
//       </div>
//     );
//   });

//   return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</div>;
// };

// const SingleTemplate: Story<SvgIconProps> = ({ ...props }: SvgIconProps) => {
//   return <SvgIcon {...props} />;
// };

// const defaultCode = `
// // Update RightArrowIcon to the icon you would like to use.
// import { RightArrowIcon } from "@gemeente-denhaag/icons";
// <RightArrowIcon />
// `;

// export const AllIcons = AllTemplate.bind({});
// AllIcons.parameters = {
//   controls: { exclude: ['component', 'children', 'classes'] },
//   docs: {
//     source: {
//       code: defaultCode,
//     },
//   },
// };

// export const SingleIcon = SingleTemplate.bind({});
// SingleIcon.parameters = {
//   docs: {
//     source: {
//       code: defaultCode,
//     },
//   },
// };
