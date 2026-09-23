import { useAddonState, useChannel, useParameter } from 'storybook/manager-api';
import { AddonPanel } from 'storybook/internal/components';
import React from 'react';
import { CodePanel } from './CodePanel';

const HTML_ADDON_ID = 'storybook/html';
const HTML_UPDATE_EVENT = `${HTML_ADDON_ID}/codeUpdate`;

type HtmlState = {
  code: string;
};

type HtmlParameters = {
  highlighter?: {
    showLineNumbers?: boolean;
    wrapLines?: boolean;
  };
};

type HtmlPanelProps = {
  active?: boolean;
};

export function HtmlPanel({ active = false }: HtmlPanelProps) {
  const [{ code }, setState] = useAddonState<HtmlState>(HTML_ADDON_ID, { code: '' });
  const parameters = useParameter<HtmlParameters>('html', {});

  useChannel({
    [HTML_UPDATE_EVENT]: ({ code: nextCode }: HtmlState) => {
      setState((state) => ({ ...state, code: nextCode }));
    },
  });

  return (
    <AddonPanel active={active}>
      <CodePanel
        actions={[{ label: 'Copy code', ariaLabel: 'Copy HTML code', value: code }]}
        language="html"
        showLineNumbers={parameters.highlighter?.showLineNumbers}
        wrapLongLines={parameters.highlighter?.wrapLines}
      >
        {code}
      </CodePanel>
    </AddonPanel>
  );
}
