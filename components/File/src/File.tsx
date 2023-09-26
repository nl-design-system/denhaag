import React from 'react';
import clsx from 'clsx';
import { FileIcon, ImageIcon, DownloadIcon } from '@gemeente-denhaag/icons';

interface FileProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  link: string;
  size?: number;
  lastUpdated?: Date;
}

export const File = ({ name, link, size, lastUpdated, className }: FileProps) => {
  const extension = link.lastIndexOf('.') >= 0 ? link.substring(link.lastIndexOf('.') + 1, link.length) : undefined;
  const lastUpdatedDate = lastUpdated ? new Date(lastUpdated).toLocaleDateString() : null;
  const FileTypeIcon = ({ ...props }) => {
    switch (extension) {
      case 'pdf':
        return <FileIcon {...props} />;
      default:
        return <ImageIcon {...props} />;
    }
  };

  return (
    <a
      href={link}
      className={clsx('denhaag-file', className)}
      aria-labelledby="name"
      aria-describedby="description"
      download={name}
    >
      <div className="denhaag-file__left">
        <FileTypeIcon className="denhaag-file__icon" />
      </div>
      <div className="denhaag-file__right">
        <div className="denhaag-file__label">
          <span id="name">{name} </span>
          {(extension || size || lastUpdated) && (
            <span id="description">({[extension, size, lastUpdatedDate].filter(Boolean).join(', ')})</span>
          )}
        </div>
        <div className="denhaag-file__link">
          <DownloadIcon className="denhaag-file__link__icon" />
          <div className="utrecht-link" tabIndex={-1}>
            Download
          </div>
        </div>
      </div>
    </a>
  );
};
