import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Sheet, SheetDialog, SheetContainer, SheetProps } from '../index';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import { IconButton } from '@gemeente-denhaag/iconbutton';
import { CloseIcon } from '@gemeente-denhaag/icons';
import pkg from '../../package.json';
import readme from '../../README.md';

export default {
  title: 'React/Page Elements/Sheet',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: readme,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  component: Sheet,
} as Meta;

const Template: Story<SheetProps> = () => {
  return (
    <Sheet>
      <ResponsiveContent>
        <IconButton className="denhaag-sheet__close-button">
          <CloseIcon />
        </IconButton>
        <SheetContainer>Content</SheetContainer>
      </ResponsiveContent>
    </Sheet>
  );
};

const DialogTemplate: Story<SheetProps> = () => {
  return (
    <SheetDialog open>
      <ResponsiveContent>Content</ResponsiveContent>
    </SheetDialog>
  );
};

/**
 * Implementation of Timeline
 * "activeStep" property set to enforce step visibility.
 */
export const Default: Story<SheetProps> = Template.bind({});

export const MobileDialog: Story<SheetProps> = DialogTemplate.bind({});
