import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CloseIcon } from '@gemeente-denhaag/icons';
import { IconButton } from '@gemeente-denhaag/iconbutton';
import { Sheet, SheetContainer, SheetDialog, SheetProps } from '@gemeente-denhaag/sheet';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';
import pkg from '../../../../components/Sheet/package.json';

export default {
  title: 'React/Page Elements/Sheet',
  parameters: {
    componentSubtitle: `${pkg.name} - ${pkg.version}`,
    docs: {
      source: {
        type: 'code',
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

export const Default: Story<SheetProps> = Template.bind({});

export const MobileDialog: Story<SheetProps> = DialogTemplate.bind({});
