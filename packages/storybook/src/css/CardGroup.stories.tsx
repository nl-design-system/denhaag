import { Meta, StoryObj } from '@storybook/react';
import '@gemeente-denhaag/card-group';
import readme from '../../../../components/CardGroup/README.md?raw';
import { AuthenticationCardGroup } from './CardGroupUtils';

// TODO: create real generic AuthenticationCard and AuthenticationCardGroup components, and move them to the right packages.

const exampleArgs = { cards: ['DigiD', 'eHerkenning', ''] };

const meta = {
  title: 'CSS/Cards/Card Group',
  id: 'css-card-group',
  component: AuthenticationCardGroup,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof AuthenticationCardGroup>;

export default meta;

type Story = StoryObj<typeof meta>;
export const AuthenticationCardGroupDefault: Story = {};

export const AuthenticationCardGroupRows: Story = {
  args: { cards: ['DigiD', 'eHerkenning', ''], rows: true },
};

export const ResponsiveAuthenticationCardGroup: Story = {
  args: { cards: ['DigiD', 'eHerkenning', 'eIDAS', ''], responsive: true },
};
