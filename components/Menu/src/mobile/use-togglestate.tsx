import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useToggleState = (defaultOpen = false, callback?: () => void) => {
  const [open, setOpen] = useState(defaultOpen);
  const handleCallback = useCallback(() => callback?.(), [callback]);
  const ariaControls = uuidv4();

  const toggleState = () => {
    setOpen((open) => !open);
    handleCallback();
  };

  var buttonProps = {
    'aria-expanded': open,
    'aria-controls': ariaControls,
    onClick: toggleState,
  };

  var expandableAreaProps = {
    id: ariaControls,
    active: open,
  };

  return { open, buttonProps, expandableAreaProps, toggleState };
};

export default useToggleState;
