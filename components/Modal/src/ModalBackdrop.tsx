import React, { useEffect } from 'react';

export interface ModalBackdropProps {
  onClose?: () => void;
}

export const ModalBackdrop = ({ onClose }: ModalBackdropProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClose?.();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <div role="presentation" className="denhaag-modal__backdrop" onClick={onClose} />;
};

export default ModalBackdrop;
