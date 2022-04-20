/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { LiHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface StepProps extends LiHTMLAttributes<HTMLLIElement> {
  checked?: boolean;
  current?: boolean;
  expanded?: boolean;
}

interface StepContextType {
  expanded: boolean;
  setExpanded: (arg0: any) => void;
}

export const StepContext = React.createContext({
  expanded: false,
  setExpanded: (expanded: unknown) => {},
});

export const Step: React.FC<StepProps> = ({ children, current, checked, expanded }) => {
  const [state, setState] = React.useState(expanded);
  const value: StepContextType = { expanded: !!state, setExpanded: setState };

  return (
    <StepContext.Provider value={value}>
      <li
        className={clsx(
          'denhaag-process-steps__step',
          checked && 'denhaag-process-steps__step--checked',
          current && 'denhaag-process-steps__step--current',
          expanded && 'denhaag-process-steps__step--expanded',
        )}
        aria-current={current ? 'step' : undefined}
      >
        {children}
      </li>
    </StepContext.Provider>
  );
};
