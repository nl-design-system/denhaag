import React from 'react';
import clsx from 'clsx';
import { FileIcon, ImageIcon, DownloadIcon } from '@gemeente-denhaag/icons';

interface FileProps extends React.HTMLAttributes<HTMLAnchorElement> {
  name: string;
  href: string;
  size?: string;
  lastUpdated?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const File = ({ name, href, size, lastUpdated, className, onClick }: FileProps) => {
  const extension = href.lastIndexOf('.') >= 0 ? href.substring(href.lastIndexOf('.') + 1, href.length) : undefined;
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
      href={href}
      className={clsx('denhaag-file', className)}
      aria-labelledby="name"
      aria-describedby="description"
      download={name}
      onClick={onClick}
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
