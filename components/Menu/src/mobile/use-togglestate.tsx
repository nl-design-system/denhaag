import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useToggleState = (callback?: () => void) => {
  const [open, setOpen] = useState(false);
  const expandableAreaId = uuidv4();

  const toggleState = () => {
    setOpen((open) => !open);
    callback?.();
  };

  var buttonProps = {
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
