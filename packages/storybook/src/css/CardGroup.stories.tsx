import { Meta, StoryObj } from '@storybook/react-vite';
import '@gemeente-denhaag/card-group';
import readme from '../../../../components/CardGroup/README.md?raw';
import { getComponentDescription } from '../utils/getPackage';
import pkg from '../../../../components/CardGroup/package.json';
import { AuthenticationCardGroup } from './CardGroupUtils';

// TODO: create real generic AuthenticationCard and AuthenticationCardGroup components, and move them to the right packages.

const exampleArgs = { cards: ['DigiD', 'eHerkenning', ''] };

const meta = {
  component: AuthenticationCardGroup,
  args: exampleArgs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: getComponentDescription(pkg.name, pkg.version, readme),
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
