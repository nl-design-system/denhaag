import tokens from '@gemeente-denhaag/design-tokens-components/dist/list.json';
import { Meta, StoryObj } from '@storybook/react';
import { headerProps } from '../templates/util';
import { HeaderLogic, HeaderLogicProps } from '@gemeente-denhaag/header';

const overviewHeaderProps: HeaderLogicProps = {
  ...headerProps,
  breadcrumbs: {
    navigationPath: [{ label: 'Home', href: 'https://denhaag.nl/' }, { label: 'MijnDenHaag' }],
  },
};

const meta = {
  id: 'react-page-elements-header',
  title: 'React/Page Elements/Header',
  component: HeaderLogic,
  args: overviewHeaderProps,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    tokens,
  },
} as Meta<typeof HeaderLogic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
