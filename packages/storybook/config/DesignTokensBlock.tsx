import { CopyButton } from '@nl-design-system-unstable/theme-toolkit/dist/CopyButton.js';
import { createEmptyDesignTokenTree } from '@nl-design-system-unstable/theme-toolkit/dist/design-tokens.js';
import { useOf } from '@storybook/addon-docs/blocks';
import { StoryObj } from '@storybook/react-vite';
import React from 'react';

type JsonTokensSectionProps = {
  copyLabel?: React.ReactNode;
  definition: Parameters<typeof createEmptyDesignTokenTree>[0];
  description?: React.ReactNode;
  title?: React.ReactNode;
};

type TokenDefinition = JsonTokensSectionProps['definition'];

const tokenDefinitionFiles = import.meta.glob('../../../proprietary/tokens/src/components/**/*.tokens.json', {
  eager: true,
  import: 'default',
}) as Record<string, TokenDefinition>;

const reactTokenDefinitionPaths: Record<string, string | string[]> = {
  'react-accordion': '../../../proprietary/tokens/src/components/denhaag/accordion.tokens.json',
  'react-action': '../../../proprietary/tokens/src/components/denhaag/action.tokens.json',
  'react-action-multiple': '../../../proprietary/tokens/src/components/denhaag/action.tokens.json',
  'react-alert': '../../../proprietary/tokens/src/components/denhaag/alert.tokens.json',
  'react-breadcrumb': '../../../proprietary/tokens/src/components/denhaag/breadcrumb.tokens.json',
  'react-button': '../../../proprietary/tokens/src/components/denhaag/button.tokens.json',
  'react-button-link': '../../../proprietary/tokens/src/components/utrecht/button.tokens.json',
  'react-case-card': '../../../proprietary/tokens/src/components/denhaag/case-card.tokens.json',
  'react-checkbox': '../../../proprietary/tokens/src/components/utrecht/checkbox.tokens.json',
  'react-contact-timeline': '../../../proprietary/tokens/src/components/denhaag/contact-timeline.tokens.json',
  'react-data-badge': '../../../proprietary/tokens/src/components/nl/data-badge.tokens.json',
  'react-description-list': '../../../proprietary/tokens/src/components/denhaag/description-list.tokens.json',
  'react-divider': '../../../proprietary/tokens/src/components/denhaag/divider.tokens.json',
  'react-dot-indicator': '../../../proprietary/tokens/src/components/denhaag/dot-indicator.tokens.json',
  'react-file': '../../../proprietary/tokens/src/components/denhaag/file.tokens.json',
  'react-file-upload': '../../../proprietary/tokens/src/components/denhaag/file-upload.tokens.json',
  'react-footer': '../../../proprietary/tokens/src/components/denhaag/footer.tokens.json',
  'react-form-field': '../../../proprietary/tokens/src/components/utrecht/form-field.tokens.json',
  'react-form-field-description':
    '../../../proprietary/tokens/src/components/utrecht/form-field-description.tokens.json',
  'react-form-field-error-message':
    '../../../proprietary/tokens/src/components/utrecht/form-field-error-message.tokens.json',
  'react-form-label': '../../../proprietary/tokens/src/components/utrecht/form-label.tokens.json',
  'react-form-progress': '../../../proprietary/tokens/src/components/denhaag/form-progress.tokens.json',
  'react-header': '../../../proprietary/tokens/src/components/denhaag/header.tokens.json',
  'react-heading': '../../../proprietary/tokens/src/components/nl/heading.tokens.json',
  'react-icon-button': '../../../proprietary/tokens/src/components/denhaag/icon-button.tokens.json',
  'react-link': [
    '../../../proprietary/tokens/src/components/nl/link.tokens.json',
    '../../../proprietary/tokens/src/components/denhaag/link.tokens.json',
  ],
  'react-link-list': '../../../proprietary/tokens/src/components/utrecht/link-list.tokens.json',
  'react-list': '../../../proprietary/tokens/src/components/denhaag/list.tokens.json',
  'react-menu': '../../../proprietary/tokens/src/components/denhaag/menu.tokens.json',
  'react-modal': '../../../proprietary/tokens/src/components/denhaag/modal.tokens.json',
  'react-number-badge': '../../../proprietary/tokens/src/components/nl/number-badge.tokens.json',
  'react-ordered-list': '../../../proprietary/tokens/src/components/utrecht/ordered-list.tokens.json',
  'react-page-index': '../../../proprietary/tokens/src/components/denhaag/page-index.tokens.json',
  'react-pagination': '../../../proprietary/tokens/src/components/denhaag/pagination.tokens.json',
  'react-paragraph': '../../../proprietary/tokens/src/components/nl/paragraph.tokens.json',
  'react-process-steps': '../../../proprietary/tokens/src/components/denhaag/process-steps.tokens.json',
  'react-radio-button': '../../../proprietary/tokens/src/components/utrecht/radio-button.tokens.json',
  'react-rich-text': '../../../proprietary/tokens/src/components/denhaag/rich-text.tokens.json',
  'react-select': [
    '../../../proprietary/tokens/src/components/utrecht/select.tokens.json',
    '../../../proprietary/tokens/src/components/denhaag/select.tokens.json',
  ],
  'react-sheet': '../../../proprietary/tokens/src/components/denhaag/sheet.tokens.json',
  'react-side-navigation': '../../../proprietary/tokens/src/components/denhaag/side-navigation.tokens.json',
  'react-skip-link': '../../../proprietary/tokens/src/components/nl/skip-link.tokens.json',
  'react-step-marker': '../../../proprietary/tokens/src/components/denhaag/step-marker.tokens.json',
  'react-table': '../../../proprietary/tokens/src/components/denhaag/table.tokens.json',
  'react-tabs': '../../../proprietary/tokens/src/components/denhaag/tabs.tokens.json',
  'react-text-input': '../../../proprietary/tokens/src/components/utrecht/text-input.tokens.json',
  'react-textarea': '../../../proprietary/tokens/src/components/utrecht/textarea.tokens.json',
  'react-unordered-list': '../../../proprietary/tokens/src/components/denhaag/unordered-list.tokens.json',
};

function JsonTokensSection({
  copyLabel = 'Copy JSON',
  definition,
  description,
  title = <>Tokens</>,
}: JsonTokensSectionProps) {
  const code = JSON.stringify(createEmptyDesignTokenTree(definition), null, '  ');

  return (
    <section>
      <h2>{title}</h2>
      {description}
      <br />
      <pre>{code}</pre>
      <br />
      <div>
        <CopyButton value={code} textContent={copyLabel} />
      </div>
    </section>
  );
}

export function DesignTokensBlock() {
  const resolvedOf = useOf('story', ['story', 'meta', 'component']);
  const storyObj: (StoryObj & { id?: string }) | undefined = (
    resolvedOf as typeof resolvedOf & { story?: StoryObj & { id?: string } }
  )?.story;
  const componentId = storyObj?.id?.split('--')[0];
  const tokenDefinitionPaths = componentId
    ? Object.entries(reactTokenDefinitionPaths).find(
        ([storyId]) => storyId.replace(/-/g, '') === componentId.replace(/-/g, ''),
      )?.[1]
    : undefined;
  const mappedTokensDefinition = tokenDefinitionPaths
    ? Object.assign(
        {},
        ...(Array.isArray(tokenDefinitionPaths) ? tokenDefinitionPaths : [tokenDefinitionPaths]).map(
          (path) => tokenDefinitionFiles[path],
        ),
      )
    : undefined;
  const tokensDefinition = storyObj?.parameters?.tokensDefinition ?? mappedTokensDefinition;

  if (storyObj && tokensDefinition) {
    return (
      <JsonTokensSection
        copyLabel={storyObj.parameters.tokensJsonCopyLabel}
        definition={tokensDefinition}
        description={storyObj.parameters.tokensJsonDescription}
        title={storyObj.parameters.tokensJsonTitle}
      />
    );
  }

  return null;
}
