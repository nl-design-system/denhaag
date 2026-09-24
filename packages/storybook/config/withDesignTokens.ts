import type { Decorator } from '@storybook/react-vite';
import { useChannel, useEffect } from 'storybook/preview-api';
import { DESIGN_TOKENS_UPDATE_EVENT } from './designTokensConstants';

type TokenDefinition = Record<string, unknown>;

const tokenDefinitionFiles = import.meta.glob('../../../proprietary/tokens/src/components/**/*.tokens.json', {
  eager: true,
  import: 'default',
}) as Record<string, TokenDefinition>;

const tokenDefinitionPaths: Record<string, string | string[]> = {
  accordion: '../../../proprietary/tokens/src/components/denhaag/accordion.tokens.json',
  action: '../../../proprietary/tokens/src/components/denhaag/action.tokens.json',
  'action-multiple': '../../../proprietary/tokens/src/components/denhaag/action.tokens.json',
  alert: '../../../proprietary/tokens/src/components/denhaag/alert.tokens.json',
  'anchor-collapse': '../../../proprietary/tokens/src/components/denhaag/anchor-collapse.tokens.json',
  'anchor-navigation': '../../../proprietary/tokens/src/components/denhaag/anchor-navigation.tokens.json',
  'article-meta': '../../../proprietary/tokens/src/components/denhaag/article-meta.tokens.json',
  blockquote: '../../../proprietary/tokens/src/components/denhaag/blockquote.tokens.json',
  breadcrumb: '../../../proprietary/tokens/src/components/denhaag/breadcrumb.tokens.json',
  button: '../../../proprietary/tokens/src/components/denhaag/button.tokens.json',
  'button-group': '../../../proprietary/tokens/src/components/denhaag/button-group.tokens.json',
  'button-link': '../../../proprietary/tokens/src/components/utrecht/button.tokens.json',
  'card-authentication': '../../../proprietary/tokens/src/components/denhaag/card-authentication.tokens.json',
  'card-group': '../../../proprietary/tokens/src/components/denhaag/card-group.tokens.json',
  'card-news': '../../../proprietary/tokens/src/components/denhaag/card-news.tokens.json',
  'case-card': '../../../proprietary/tokens/src/components/denhaag/case-card.tokens.json',
  checkbox: '../../../proprietary/tokens/src/components/utrecht/checkbox.tokens.json',
  'contact-timeline': '../../../proprietary/tokens/src/components/denhaag/contact-timeline.tokens.json',
  'cta-download': '../../../proprietary/tokens/src/components/denhaag/cta-download.tokens.json',
  'cta-event': '../../../proprietary/tokens/src/components/denhaag/cta-event.tokens.json',
  'cta-image-content': '../../../proprietary/tokens/src/components/denhaag/cta-image-content.tokens.json',
  'cta-link': '../../../proprietary/tokens/src/components/denhaag/cta-link.tokens.json',
  'data-badge': '../../../proprietary/tokens/src/components/nl/data-badge.tokens.json',
  'description-list': '../../../proprietary/tokens/src/components/denhaag/description-list.tokens.json',
  divider: '../../../proprietary/tokens/src/components/denhaag/divider.tokens.json',
  'dot-indicator': '../../../proprietary/tokens/src/components/denhaag/dot-indicator.tokens.json',
  'dynamic-content': '../../../proprietary/tokens/src/components/denhaag/dynamic-content.tokens.json',
  'event-date': '../../../proprietary/tokens/src/components/denhaag/eventdate.tokens.json',
  file: '../../../proprietary/tokens/src/components/denhaag/file.tokens.json',
  'file-upload': '../../../proprietary/tokens/src/components/denhaag/file-upload.tokens.json',
  'floating-contact': '../../../proprietary/tokens/src/components/denhaag/floating-contact.tokens.json',
  footer: '../../../proprietary/tokens/src/components/denhaag/footer.tokens.json',
  'form-field': '../../../proprietary/tokens/src/components/utrecht/form-field.tokens.json',
  'form-field-description': '../../../proprietary/tokens/src/components/utrecht/form-field-description.tokens.json',
  'form-field-error-message': '../../../proprietary/tokens/src/components/utrecht/form-field-error-message.tokens.json',
  'form-label': '../../../proprietary/tokens/src/components/utrecht/form-label.tokens.json',
  'form-progress': '../../../proprietary/tokens/src/components/denhaag/form-progress.tokens.json',
  header: '../../../proprietary/tokens/src/components/denhaag/header.tokens.json',
  heading: '../../../proprietary/tokens/src/components/nl/heading.tokens.json',
  hero: '../../../proprietary/tokens/src/components/denhaag/hero.tokens.json',
  'icon-button': '../../../proprietary/tokens/src/components/denhaag/icon-button.tokens.json',
  image: '../../../proprietary/tokens/src/components/denhaag/image.tokens.json',
  link: [
    '../../../proprietary/tokens/src/components/nl/link.tokens.json',
    '../../../proprietary/tokens/src/components/denhaag/link.tokens.json',
  ],
  'link-button': '../../../proprietary/tokens/src/components/utrecht/link-button.tokens.json',
  'link-list': '../../../proprietary/tokens/src/components/utrecht/link-list.tokens.json',
  list: '../../../proprietary/tokens/src/components/denhaag/list.tokens.json',
  menu: '../../../proprietary/tokens/src/components/denhaag/menu.tokens.json',
  modal: '../../../proprietary/tokens/src/components/denhaag/modal.tokens.json',
  note: '../../../proprietary/tokens/src/components/denhaag/note.tokens.json',
  'number-badge': '../../../proprietary/tokens/src/components/nl/number-badge.tokens.json',
  'ordered-list': '../../../proprietary/tokens/src/components/utrecht/ordered-list.tokens.json',
  page: '../../../proprietary/tokens/src/components/denhaag/page.tokens.json',
  'page-buttons': '../../../proprietary/tokens/src/components/denhaag/page-buttons.tokens.json',
  'page-index': '../../../proprietary/tokens/src/components/denhaag/page-index.tokens.json',
  pagination: '../../../proprietary/tokens/src/components/denhaag/pagination.tokens.json',
  paragraph: '../../../proprietary/tokens/src/components/nl/paragraph.tokens.json',
  'process-steps': '../../../proprietary/tokens/src/components/denhaag/process-steps.tokens.json',
  'quick-links': '../../../proprietary/tokens/src/components/denhaag/quick-links.tokens.json',
  'radio-button': '../../../proprietary/tokens/src/components/utrecht/radio-button.tokens.json',
  'responsive-content': '../../../proprietary/tokens/src/components/denhaag/responsive-content.tokens.json',
  'rich-text': '../../../proprietary/tokens/src/components/denhaag/rich-text.tokens.json',
  select: [
    '../../../proprietary/tokens/src/components/utrecht/select.tokens.json',
    '../../../proprietary/tokens/src/components/denhaag/select.tokens.json',
  ],
  sheet: '../../../proprietary/tokens/src/components/denhaag/sheet.tokens.json',
  'side-navigation': '../../../proprietary/tokens/src/components/denhaag/side-navigation.tokens.json',
  'skip-link': '../../../proprietary/tokens/src/components/nl/skip-link.tokens.json',
  'step-marker': '../../../proprietary/tokens/src/components/denhaag/step-marker.tokens.json',
  table: '../../../proprietary/tokens/src/components/denhaag/table.tokens.json',
  tabs: '../../../proprietary/tokens/src/components/denhaag/tabs.tokens.json',
  'text-input': '../../../proprietary/tokens/src/components/utrecht/text-input.tokens.json',
  textarea: '../../../proprietary/tokens/src/components/utrecht/textarea.tokens.json',
  'unordered-list': '../../../proprietary/tokens/src/components/denhaag/unordered-list.tokens.json',
};

const normalizeComponentId = (componentId: string) => componentId.replace(/^(react|components)-/, '').replace(/-/g, '');

const getMappedTokensDefinition = (storyId: string): TokenDefinition | undefined => {
  const componentId = storyId.split('--')[0];
  const paths = Object.entries(tokenDefinitionPaths).find(
    ([tokenComponentId]) => normalizeComponentId(tokenComponentId) === normalizeComponentId(componentId),
  )?.[1];

  if (!paths) {
    return undefined;
  }

  return Object.assign({}, ...(Array.isArray(paths) ? paths : [paths]).map((path) => tokenDefinitionFiles[path]));
};

export const withDesignTokens: Decorator = (Story, context) => {
  const emit = useChannel({});
  const tokensDefinition =
    (context.parameters.tokensDefinition as TokenDefinition | undefined) ?? getMappedTokensDefinition(context.id);

  useEffect(() => {
    emit(DESIGN_TOKENS_UPDATE_EVENT, { storyId: context.id, tokensDefinition });
  }, [context.id, emit, tokensDefinition]);

  return Story();
};
