import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@gemeente-denhaag/button';
import './index.scss';

type FileUploadProps = {
  onFilesSelected?: (files: FileList | null) => void;
  renderButton?: (props: { openFileDialog: () => void }) => React.ReactNode;
};

export const FileUpload = ({ onFilesSelected, renderButton }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingWithin, setIsDraggingWithin] = useState(false);

  const openFileDialog = () => inputRef.current?.click();

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

    window.addEventListener('dragenter', handleGlobalDragEnter);
    window.addEventListener('drop', clearGlobalDragState);
    window.addEventListener('dragend', clearGlobalDragState);
    window.addEventListener('dragleave', handleGlobalDragLeave);

    return () => {
      window.removeEventListener('dragenter', handleGlobalDragEnter);
      window.removeEventListener('drop', clearGlobalDragState);
      window.removeEventListener('dragend', clearGlobalDragState);
      window.removeEventListener('dragleave', handleGlobalDragLeave);
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
      <p>Sleep uw bestand hier of</p>

      {renderButton ? (
        renderButton({ openFileDialog })
      ) : (
        <Button variant="secondary-action" onClick={openFileDialog}>
          Kies een bestand
        </Button>
      )}

      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={(event) => handleFiles(event.target.files)}
      />
    </div>
  );
};
