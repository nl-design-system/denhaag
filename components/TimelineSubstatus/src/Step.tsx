import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  checked?: boolean;
  current?: boolean;
  expanded?: boolean;
}

interface StepContextType {
  expanded: boolean;
  setExpanded: (arg0: boolean) => void;
}

export const StepContext = React.createContext<StepContextType>({
  expanded: false,
  setExpanded: () => {},
});

export const Step: React.FC<StepProps> = ({ children, current, checked, expanded = false }) => {
  const [state, setState] = React.useState(expanded);
  const context: StepContextType = { expanded: state, setExpanded: setState };

  return (
    <StepContext.Provider value={context}>
      <li
        className={clsx(
          'denhaag-process-steps__step',
          checked && 'denhaag-process-steps__step--checked',
          current && 'denhaag-process-steps__step--current',
          state && 'denhaag-process-steps__step--expanded',
        )}
        aria-current={current ? 'step' : undefined}
      >
        {children}
      </li>
    </StepContext.Provider>
  );
};
