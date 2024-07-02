import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from '@gemeente-denhaag/modal';
import readme from '../../../../components/Modal/README.md';

const exampleArgs = {
  open: true,
  children: (
    <>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem massa
      auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et netus et
      malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui pellentesque
      pharetra eget non nunc.
    </>
  ),
};

const meta = {
  id: 'react-feedback-modal',
  title: 'React/Feedback/Modal',
  component: Modal,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Actions: Story = {
  args: {
    actions: [
      {
        label: 'Confirm',
        onClick: () => console.log('Confirm'),
      },
      {
        label: 'Cancel',
        type: 'secondary',
        onClick: () => console.log('Cancel'),
      },
    ],
  },
};

export const Scrollable: Story = {
  args: {
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem massa
        auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui pellentesque
        pharetra eget non nunc.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem massa
        auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui pellentesque
        pharetra eget non nunc.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem massa
        auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui pellentesque
        pharetra eget non nunc.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem massa
        auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui pellentesque
        pharetra eget non nunc.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem massa
        auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui pellentesque
        pharetra eget non nunc.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem massa
        auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui pellentesque
        pharetra eget non nunc.
      </>
    ),
  },
};

export const Button = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal open={open} onToggle={setOpen} actions={[{ label: 'Sluiten', onClick: () => setOpen(false) }]}>
        <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt, quam eu ultrices lacinia, lorem
          massa auctor mauris, id pulvinar tellus lacus eget lectus. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Proin sodales euismod ante eu finibus. Ut quis elit eu dui
          pellentesque pharetra eget non nunc.
        </>
      </Modal>
    </>
  );
};
