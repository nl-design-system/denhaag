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
    preHeading: {
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
    metadata: {
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

export const Default: Story = {
  args: {
    title: 'Shrimp and Chorizo Paella',
    subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
    metadata: '',
    variant: 'default',
    headingLevel: 2,
  },
  decorators,
};

export const DefaultWithFooterLink: Story = {
  args: {
    title: 'Delicious dishes',
    metadata: '',
    href: '#',
    variant: 'default',
    headingLevel: 2,
  },
  decorators,
};

export const WithPreHeading: Story = {
  args: {
    ...Default.args,
    preHeading: 'Dishes category',
    headingLevel: 2,
    subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
  },
  decorators,
};

// Explicit alias so the "case" color theme has its own clearly-named entry
// in the sidebar. All Case/CaseArchived stories get a real Heading (not a
// Label), since a Case represents its own subject/informatieblok per the
// NLDS card-as-link guidance.
export const Case: Story = {
  args: {
    ...Default.args,
    variant: 'case',
    headingLevel: 2,
    subTitle: 'This impressive paella is a perfect party dish and a fun meal to cook.',
    href: '#',
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

// The following Case sub-examples all use h3, one level below the base
// Case story's h2, and all belong to the "case" variant — they previously
// spread ...Default.args, which put them in the wrong section entirely.
export const CaseWithHeadingLevel: Story = {
  args: {
    ...Case.args,
    preHeading: 'Lopende aanvraag',
    headingLevel: 3,
  },
  decorators,
};

export const CaseWithDate: Story = {
  args: {
    ...Case.args,
    headingLevel: 3,
    metadata: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
  decorators,
};

export const CaseWithMetaData: Story = {
  args: {
    ...Case.args,
    headingLevel: 3,
    metadata: 'VTH-TEST-2024-02437',
  },
  decorators,
};

// Archived is a grey state of the Case variant, not its own color theme —
// hence "CaseArchived", not a standalone "Archived". Real styling for this
// only exists nested under --case (denhaag-base-card--case.denhaag-base-card--archived
// in _base.scss).
export const CaseArchived: Story = {
  args: {
    ...Case.args,
    headingLevel: 3,
    appearance: 'archived',
  },
  decorators,
};

export const CaseArchivedHover: Story = {
  args: {
    ...CaseArchived.args,
  },
  decorators,
  parameters: {
    pseudo: { hover: true },
  },
};

export const CaseArchivedActive: Story = {
  args: {
    ...CaseArchived.args,
  },
  decorators,
  parameters: {
    pseudo: { active: true },
  },
};

export const CaseArchivedFocusVisible: Story = {
  args: {
    ...CaseArchived.args,
  },
  decorators,
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const CaseArchivedWithDate: Story = {
  args: {
    ...CaseArchived.args,
    metadata: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
  },
  decorators,
};

export const CaseArchivedWithMetaData: Story = {
  args: {
    ...CaseArchived.args,
    metadata: 'VTH-TEST-2024-02437',
  },
  decorators,
};

export const List: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
    href: '#',
  },
};

export const ListWithDate: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
    metadata: (
      <time dateTime={new Date('2020-01-22').toISOString()}>
        {formatDate({ dateTime: '2020-01-22', locale: templateLocale, format: longDateOptions })[0]}
      </time>
    ),
    href: '#',
  },
};

export const ListWithMetaData: Story = {
  args: {
    ...Default.args,
    appearance: 'list',
    metadata: 'VTH-TEST-2024-02437',
    href: '#',
  },
};
