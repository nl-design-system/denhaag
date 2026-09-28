import React, { useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from '@gemeente-denhaag/skip-link';
import readme from '../../../../components/SkipLink/README.md?raw';

const meta = {
  component: SkipLink,
  tags: ['autodocs'],
  args: {
    href: '#',
    children: 'Skip to main content',
    style: { marginTop: '1rem', marginLeft: '1rem' },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    useEffect(() => {
      window.parent.location.hash = '';
      window.parent.history.replaceState(null, '', window.parent.location.pathname + window.parent.location.search);
    }, []);

    useEffect(() => {
      const scrollToHash = () => {
        const hash = window.parent.location.hash;
        if (!hash) return;
        const id = hash.substring(1); // "main-content"
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      };

      // Bij eerste render (als de URL al een hash had)
      scrollToHash();

      // Luisteren naar hash-wijzigingen
      window.parent.addEventListener('hashchange', scrollToHash);
      return () => window.parent.removeEventListener('hashchange', scrollToHash);
    }, []);

    return (
      <>
        <div style={{ height: '150vh' }}>Tab to show the Skip Link</div>
        <SkipLink {...args} href={`${window.parent.location.pathname + window.parent.location.search}#main-content`} />
        <main id="main-content">
          <h1>Main Content</h1>
          <p>This is the main content area.</p>
        </main>
      </>
    );
  },
};

export const Focus: Story = {
  play: async ({ canvasElement }) => {
    const link = canvasElement.querySelector('a');

    // Simuleer keyboard interaction
    link?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }));

    // Geef focus
    link?.focus();
  },
};
