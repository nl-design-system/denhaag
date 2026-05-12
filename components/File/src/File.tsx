import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { FileIcon, ImageIcon, DownloadIcon, SpinnerIcon, TrashIcon } from '@gemeente-denhaag/icons';
import { URLData } from '@utrecht/component-library-react/dist';

interface FileProps {
  className?: string;
  name: string | ReactNode;
  href?: string;
  size?: string;
  lastUpdated?: string;
  loading?: boolean;
  removable?: boolean;
  removableLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const File = ({
  name,
  href,
  size,
  lastUpdated,
  className,
  loading,
  removable,
  removableLabel = 'Verwijderen',
  onClick,
}: FileProps) => {
  const extension = href && href.lastIndexOf('.') >= 0 ? href.substring(href.lastIndexOf('.') + 1) : undefined;
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
    <div
      className={clsx(
        'denhaag-file',
        {
          'denhaag-file--loading': loading,
          'denhaag-file--removable': removable,
        },
        className,
      )}
    >
      <div className="denhaag-file__left">
        {loading ? <SpinnerIcon /> : <FileTypeIcon className="denhaag-file__icon" />}
      </div>
      <div className="denhaag-file__right">
        <div className="denhaag-file__label">
          <span>
            <URLData>{name}</URLData>
          </span>
          <span> </span>
          {(extension || size || lastUpdated) && (
            <span>({[extension, size, lastUpdatedDate].filter(Boolean).join(', ')})</span>
          )}
        </div>
        {!loading && (
          <>
            {removable ? (
              <button className="denhaag-file__link denhaag-file__link--remove" onClick={onClick} type="button">
                <TrashIcon className="denhaag-file__link__icon" />
                <span>{removableLabel}</span>
              </button>
            ) : href ? (
              <a href={href} download={typeof name === 'string' ? name : undefined} className="denhaag-file__link">
                <DownloadIcon className="denhaag-file__link__icon" />
                <span>Download</span>
              </a>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};
