import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  current?: boolean;
  checked?: boolean;
  expanded?: boolean;
}

interface StepStateType {
  current: boolean;
  checked: boolean;
  expanded: boolean;
}
interface StepContextType {
  context: StepStateType;
  setContext: (arg0: StepStateType) => void;
}

export const StepContext = React.createContext<StepContextType>({
  context: { current: false, checked: false, expanded: false },
  setContext: () => {},
});

export const Step: React.FC<StepProps> = ({
  children,
  current = false,
  checked = false,
  expanded = false,
  ...props
}) => {
  const [state, setState] = React.useState({ current: current, checked: checked, expanded: expanded });
  const context: StepContextType = { context: state, setContext: setState };

  return (
    <StepContext.Provider value={context}>
      <li
        {...props}
        className={clsx(
          'denhaag-process-steps__step',
          state.checked && 'denhaag-process-steps__step--checked',
          state.current && 'denhaag-process-steps__step--current',
          state.expanded && 'denhaag-process-steps__step--expanded',
        )}
        aria-current={state.current ? 'step' : undefined}
      >
        {children}
      </li>
    </StepContext.Provider>
  );
};
