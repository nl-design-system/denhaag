import { useChannel, useParameter } from 'storybook/manager-api';
import { AddonPanel, type SupportedLanguage, type SyntaxHighlighterFormatTypes } from 'storybook/internal/components';
import React, { useEffect, useState } from 'react';
import { CodePanel } from './CodePanel';

const DOCS_SNIPPET_RENDERED_EVENT = 'storybook/docs/snippet-rendered';

type CodeSnippet = {
  format?: SyntaxHighlighterFormatTypes;
  source?: string;
};

type DocsParameters = {
  source?: {
    code?: string;
    format?: SyntaxHighlighterFormatTypes;
    language?: SupportedLanguage;
    originalSource?: string;
  };
};

type ReactPanelProps = {
  active?: boolean;
  currentStoryId?: string;
  lastEvent?: CodeSnippet;
};

export function ReactPanel({ active = false, currentStoryId, lastEvent }: ReactPanelProps) {
  const [codeSnippet, setCodeSnippet] = useState<CodeSnippet>({
    source: lastEvent?.source,
    format: lastEvent?.format,
  });
  const parameters = useParameter<DocsParameters>('docs', { source: {} });

  useEffect(() => {
    setCodeSnippet({});
  }, [currentStoryId]);

  useChannel({
    [DOCS_SNIPPET_RENDERED_EVENT]: ({ source, format }: CodeSnippet) => {
      setCodeSnippet({ source, format });
    },
  });

  const code = parameters.source?.code || codeSnippet.source || parameters.source?.originalSource || '';

  return (
    <AddonPanel active={active}>
      <CodePanel
        actions={[{ label: 'Copy code', ariaLabel: 'Copy React code', value: code }]}
        format={parameters.source?.format ?? codeSnippet.format ?? true}
        language={parameters.source?.language ?? 'jsx'}
      >
        {code}
      </CodePanel>
    </AddonPanel>
  );
}
