import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { Button } from '@gemeente-denhaag/button';
import { Paragraph } from '@gemeente-denhaag/paragraph';
import { FolderIcon } from '@gemeente-denhaag/icons';
import './index.scss';

type FileUploadProps = InputHTMLAttributes<HTMLInputElement> & {
  text?: string;
  buttonLabel?: string;
  onFilesSelected?: (files: FileList | null) => void;
};

export const FileUpload = ({
  text = 'Sleep uw bestand hier of',
  buttonLabel = 'Kies een bestand',
  onFilesSelected,
  ...props
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingWithin, setIsDraggingWithin] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);

  const openFileDialog = () => inputRef?.current?.click();

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    onFilesSelected?.(files);
  };

  useEffect(() => {
    const clearGlobalDragState = () => {
      setIsDragging(false);
      setIsDraggingWithin(false);
    };

    const handleGlobalDragEnter = (event: DragEvent) => {
      if (!event.dataTransfer) return;
      const hasFiles = Array.from(event.dataTransfer.types).includes('Files');
      if (!hasFiles) return;
      setIsDragging(true);
    };

    const handleGlobalDragLeave = (event: DragEvent) => {
      const { clientX, clientY } = event;
      const outOfWindow = clientX <= 0 || clientY <= 0 || clientX >= window.innerWidth || clientY >= window.innerHeight;

      if (outOfWindow) {
        clearGlobalDragState();
      }
    };

    const handleDragOverEvent = (event: DragEvent) => {
      event.preventDefault();
    };

    document.addEventListener('dragenter', handleGlobalDragEnter);
    document.addEventListener('dragover', handleDragOverEvent);
    document.addEventListener('dragleave', handleGlobalDragLeave);
    window.addEventListener('drop', clearGlobalDragState, true);
    window.addEventListener('dragend', clearGlobalDragState, true);

    return () => {
      document.removeEventListener('dragenter', handleGlobalDragEnter);
      document.removeEventListener('dragover', handleDragOverEvent);
      document.removeEventListener('dragleave', handleGlobalDragLeave);
      window.removeEventListener('drop', clearGlobalDragState, true);
      window.removeEventListener('dragend', clearGlobalDragState, true);
    };
  }, []);

  const handleZoneDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDraggingWithin(true);
  };

  const handleZoneDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleZoneDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const current = zoneRef.current;
    if (!current) return;

    const related = event.relatedTarget as Node | null;
    if (!related || !current.contains(related)) {
      setIsDraggingWithin(false);
    }
  };

  const handleZoneDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
    setIsDraggingWithin(false);

    handleFiles(event.dataTransfer.files);
  };

  const className = [
    'denhaag-file-upload',
    isDragging && 'denhaag-file-upload--drag-file',
    isDraggingWithin && 'denhaag-file-upload--drag-file-within',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={zoneRef}
      className={className}
      onDragEnter={handleZoneDragEnter}
      onDragOver={handleZoneDragOver}
      onDragLeave={handleZoneDragLeave}
      onDrop={handleZoneDrop}
    >
      <Paragraph className="denhaag-file-upload__label">{text}</Paragraph>
      <Button variant="secondary-action" icon={<FolderIcon />} onClick={openFileDialog}>
        {buttonLabel}
      </Button>
      <input
        {...props}
        type="file"
        ref={inputRef}
        className="denhaag-file-upload__input"
        onChange={(event) => handleFiles(event.target.files)}
      />
    </div>
  );
};
