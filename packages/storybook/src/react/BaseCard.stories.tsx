import { Meta, StoryObj } from '@storybook/react-vite';
// TODO: change to @gemeente-denhaag/base-card package when published
import { BaseCard } from '../../../../components/BaseCard/src';
import readme from '../../../../components/BaseCard/README.md?raw';
import { templateLocale } from '../templates/util';
import { formatDate, longDateOptions } from '@gemeente-denhaag/utils';
import React from 'react';

type Story = StoryObj<typeof meta>;

const meta: Meta<typeof BaseCard> = {
  title: 'React/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    eyebrow: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    subTitle: {
      type: 'string',
    },
    headingLevel: {
      control: 'select',
      options: [undefined, 2, 3, 4, 5, 6],
    },
    context: {
      type: 'string',
    },
    href: {
      type: 'string',
    },
    appearance: {
      type: 'string',
      options: [undefined, 'archived', 'list'],
      control: {
        type: 'select',
      },
    },
    variant: {
      type: 'string',
      options: ['default', 'case'],
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
};

export default meta;

const decorators: typeof meta.decorators = [
  (Story) => (
    <div style={{ maxWidth: '360px' }}>
      <Story />
    </div>
  ),
];

// Default color theme, no decoration/paper fold — matches the
// "Tokens" (shared, non-variant-specific) styling from the NLDS core team's
// card-as-link proposal.
export const Default: Story = {
  args: {
    title: 'Shrimp and Chorizo Paella',
    subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
    context: '',
    href: '#',
    variant: 'default',
  },
  decorators,
};

// Explicit alias for Default, so the "case" color theme has its own
// clearly-named entry in the sidebar (identical args to Default for now,
// since Default already defaults to variant: 'case').
export const Case: Story = {
  args: {
    ...Default.args,
    variant: 'case',
  },
  decorators,
};

// --hover / --active / --focus-visible are not real DOM classes rendered by
// the component itself — they only exist as CSS modifier classes in the
// stylesheet as a fallback for consumers who can't rely on native
// :hover/:active/:focus-visible (e.g. some test setups). In the browser and
// in these stories, the native pseudo-classes are what actually apply, via
// the addon-pseudo-states `pseudo` parameter below.
export const CaseHover: Story = {
  args: {
    ...Case.args,
  },
  decorators,
  parameters: {
    pseudo: { hover: true },
  },
};

export const CaseActive: Story = {
  args: {
    ...Case.args,
  },
  decorators,
  parameters: {
    pseudo: { active: true },
  },
};

export const CaseFocusVisible: Story = {
  args: {
    ...Case.args,
  },
  decorators,
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const WithEyebrow: Story = {
  args: {
    ...Default.args,
    eyebrow: 'Lopende aanvraag',
  },
  decorators,
};

export const WithHeadingLevel: Story = {
  args: {
    ...Default.args,
    eyebrow: 'Lopende aanvraag',
    headingLevel: 2,
  },
  decorators,
};

export const WithDate: Story = {
  args: {
    ...Default.args,
    context: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
  decorators,
};

export const WithBaseNumber: Story = {
  args: {
    ...Default.args,
    context: 'VTH-TEST-2024-02437',
  },
  decorators,
};

// Archived only has real styling nested under the "case" variant right now
// (denhaag-base-card--case.denhaag-base-card--archived in _base.scss) — the
// kernteam tokens nest archived per-variant (case.archived.*), there is no
// bare/"default"-variant archived styling yet. So these use variant: 'case'
// explicitly, via Case.args, not Default.args' variant: 'default'.
export const Archived: Story = {
  args: {
    ...Case.args,
    appearance: 'archived',
  },
  decorators,
};

// Same pseudo-state caveat as CaseHover/CaseActive/CaseFocusVisible above:
// these simulate the native :hover/:active/:focus-visible pseudo-classes,
// not the --hover/--active/--focus-visible fallback modifier classes.
export const ArchivedHover: Story = {
  args: {
    ...Archived.args,
  },
  decorators,
  parameters: {
    pseudo: { hover: true },
  },
};

export const ArchivedActive: Story = {
  args: {
    ...Archived.args,
  },
  decorators,
  parameters: {
    pseudo: { active: true },
  },
};

export const ArchivedFocusVisible: Story = {
  args: {
    ...Archived.args,
  },
  decorators,
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const Inactive: Story = {
  args: { ...Case.args, appearance: 'archived' },
  decorators,
};

export const InactiveWithDate: Story = {
  args: {
    ...Case.args,
    appearance: 'archived',
    context: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
  decorators,
};

export const InactiveWithBaseNumber: Story = {
  args: {
    ...Case.args,
    appearance: 'archived',
    context: 'VTH-TEST-2024-02437',
  },
  decorators,
};

// TODO: the "list" appearance is currently color-neutral (only affects
// layout) and does not force a specific variant — it inherits whichever
// variant is active. These stories use Default.args (variant: 'default')
// to show list layout on its own; add a CaseList story if a combined
// case+list example is needed.
export const List: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
  },
};

export const ListWithDate: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
    context: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
};

export const ListWithBaseNumber: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
    context: 'VTH-TEST-2024-02437',
  },
};

// --hover / --active / --focus-visible are not real DOM classes rendered by
// the component itself — they only exist as CSS modifier classes in the
// stylesheet as a fallback for consumers who can't rely on native
// :hover/:active/:focus-visible (e.g. some test setups). In the browser and
// in these stories, the native pseudo-classes are what actually apply, via
// the addon-pseudo-states `pseudo` parameter below.
export const Hover: Story = {
  args: {
    ...Default.args,
  },
  decorators,
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
  },
  decorators,
  parameters: {
    pseudo: { active: true },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
  },
  decorators,
  parameters: {
    pseudo: { focusVisible: true },
  },
};
