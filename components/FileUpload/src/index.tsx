import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { Button } from '@gemeente-denhaag/button';
import './index.scss';
import { Paragraph } from '@gemeente-denhaag/paragraph';

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
    const handleGlobalDragEnter = (event: DragEvent) => {
      if (!event.dataTransfer) return;
      const hasFiles = Array.from(event.dataTransfer.types).includes('Files');
      if (!hasFiles) return;
      setIsDragging(true);
    };

    const clearGlobalDragState = () => {
      setIsDragging(false);
      setIsDraggingWithin(false);
    };

    const handleGlobalDragLeave = (event: DragEvent) => {
      const target = event.target as Node | null;
      if (!event.relatedTarget && (target === document.documentElement || target === document.body)) {
        clearGlobalDragState();
      }
    };

    const handleDragOverEvent = (event: DragEvent) => {
      event.preventDefault();
    };
    window.addEventListener('blur', clearGlobalDragState);
    window.addEventListener('dragover', handleDragOverEvent);
    window.addEventListener('dragenter', handleGlobalDragEnter);
    window.addEventListener('dragleave', handleGlobalDragLeave);
    window.addEventListener('drop', clearGlobalDragState, true);
    window.addEventListener('dragend', clearGlobalDragState, true);

    return () => {
      window.removeEventListener('blur', clearGlobalDragState);
      window.removeEventListener('dragover', handleDragOverEvent);
      window.removeEventListener('dragenter', handleGlobalDragEnter);
      window.removeEventListener('dragleave', handleGlobalDragLeave);
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
      <Paragraph>{text}</Paragraph>
      <Button variant="secondary-action" onClick={openFileDialog}>
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
