import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { CloseIcon } from '@gemeente-denhaag/icons';
import { IconButton } from '@gemeente-denhaag/iconbutton';
import { Sheet, SheetContainer, SheetDialog, SheetProps } from '@gemeente-denhaag/sheet';
import { ResponsiveContent } from '@gemeente-denhaag/responsive-content';

import readme from '../../../../components/Sheet/README.md?raw';

const exampleArgs: SheetProps = {
  children: 'Sheet',
};

const meta = {
  component: Sheet,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <ResponsiveContent>
        <IconButton className="denhaag-sheet__close-button">
          <CloseIcon />
        </IconButton>
        <SheetContainer>Content</SheetContainer>
      </ResponsiveContent>
    </Sheet>
  ),
};

export const MobileDialog: Story = {
  render: () => (
    <SheetDialog open>
      <ResponsiveContent>Content</ResponsiveContent>
    </SheetDialog>
  ),
};
