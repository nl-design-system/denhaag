import {
  Button,
  SyntaxHighlighter,
  Toolbar,
  type SupportedLanguage,
  type SyntaxHighlighterFormatTypes,
} from 'storybook/internal/components';
import { styled, useTheme } from 'storybook/theming';
import React, { useEffect, useRef, useState } from 'react';

type CopyAction = {
  label: string;
  copiedLabel?: string;
  ariaLabel: string;
  value: string;
};

type CodePanelProps = {
  actions: CopyAction[];
  children: string;
  format?: SyntaxHighlighterFormatTypes;
  language: SupportedLanguage;
  showLineNumbers?: boolean;
  wrapLongLines?: boolean;
};

const PanelSurface = styled.div(({ theme }) => ({
  background: theme.background.content,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: 0,
}));

const PanelToolbarWrapper = styled.div(({ theme }) => ({
  background: theme.background.app,
  boxShadow: `${theme.appBorderColor} 0 -1px 0 0 inset`,
  flex: '0 0 auto',
  position: 'sticky',
  top: 0,
  zIndex: 1,
}));

const PanelToolbarButton = styled(Button)(({ theme }) => ({
  borderRadius: 4,
  color: theme.textMutedColor,
  height: 28,
  lineHeight: '12px',
  marginInline: 3,
  minHeight: 28,
  padding: 6,
  '&:not(:disabled):hover, &:not(:disabled):focus-visible': {
    color: theme.color.secondary,
  },
}));

const PanelSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  background: theme.background.content,
  flex: '1 1 auto',
  minHeight: 0,
}));

export function CodePanel({
  actions,
  children,
  format = false,
  language,
  showLineNumbers = false,
  wrapLongLines = true,
}: CodePanelProps) {
  const theme = useTheme();
  const [copiedAction, setCopiedAction] = useState<number>();
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(
    () => () => {
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current);
      }
    },
    [],
  );

  const copy = async (action: CopyAction, index: number) => {
    await navigator.clipboard.writeText(action.value);
    setCopiedAction(index);

    if (resetTimer.current) {
      window.clearTimeout(resetTimer.current);
    }
    resetTimer.current = window.setTimeout(() => setCopiedAction(undefined), 1500);
  };

  return (
    <PanelSurface>
      <PanelToolbarWrapper>
        <Toolbar
          backgroundColor={theme.background.app}
          innerStyle={{ gap: 6, paddingInline: 15 }}
          scrollable={false}
          aria-label="Code actions"
        >
          {actions.map((action, index) => (
            <PanelToolbarButton
              key={action.label}
              size="medium"
              variant="outline"
              disabled={!action.value}
              onClick={() => copy(action, index)}
              ariaLabel={action.ariaLabel}
            >
              {copiedAction === index ? (action.copiedLabel ?? 'Copied!') : action.label}
            </PanelToolbarButton>
          ))}
        </Toolbar>
      </PanelToolbarWrapper>
      <PanelSyntaxHighlighter
        language={language}
        padded
        format={format}
        showLineNumbers={showLineNumbers}
        wrapLongLines={wrapLongLines}
      >
        {children}
      </PanelSyntaxHighlighter>
    </PanelSurface>
  );
}
