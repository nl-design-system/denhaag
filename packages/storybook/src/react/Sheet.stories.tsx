import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Sheet,
  SheetDialog,
  SheetContainer,
  SheetProps,
  ResponsiveContent,
  IconButton,
  CloseIcon,
} from '@gemeente-denhaag/components-react';
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
