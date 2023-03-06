import { useState } from 'react';

const useToggleState = (buttonId?: string, expandableAreaId?: string, callback?: () => void) => {
  const [open, setOpen] = useState(false);

  const toggleState = () => {
    setOpen((open) => !open);
    console.log('toggle state');
    callback?.();
  };

  var buttonProps = {
    id: buttonId,
    'aria-expanded': open,
    'aria-controls': expandableAreaId,
    onClick: toggleState,
  };

  var expandableAreaProps = {
    id: expandableAreaId,
    active: open,
  };

  return { open, buttonProps, expandableAreaProps, toggleState };
};

export default useToggleState;
