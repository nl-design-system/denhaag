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
  srLoadingLabel?: string;
  downloadLabel?: string;
  removable?: boolean;
  removableLabel?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const File = ({
  name,
  href = '#',
  size,
  lastUpdated,
  className,
  loading,
  srLoadingLabel = 'Bestand wordt geladen.',
  downloadLabel = 'Download',
  removable,
  removableLabel = 'Verwijderen',
  onClick,
}: FileProps) => {
  const extension = href?.lastIndexOf('.') >= 0 ? href.substring(href.lastIndexOf('.') + 1, href.length) : undefined;
  const lastUpdatedDate = lastUpdated ? new Date(lastUpdated).toLocaleDateString() : null;
  const FileTypeIcon = ({ ...props }) => {
    switch (extension) {
      case 'pdf':
        return <FileIcon {...props} />;
      default:
        return <ImageIcon {...props} />;
    }
  };

  const defaultProps = {
    className: clsx('denhaag-file', { 'denhaag-file--loading': loading }, className),
  };

  const content = (
    <>
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
            {!removable ? (
              <div className="denhaag-file__link">
                <DownloadIcon className="denhaag-file__link__icon" />
                <div className="utrecht-link" tabIndex={-1}>
                  {downloadLabel}
                </div>
              </div>
            ) : (
              <div className="denhaag-file__link denhaag-file__link--remove">
                <TrashIcon className="denhaag-file__link__icon" />
                <div className="utrecht-link" tabIndex={-1}>
                  {removableLabel}
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <span role="status" aria-atomic="true" className="denhaag-file__sr-only">
        {loading ? srLoadingLabel : ''}
      </span>
    </>
  );

  return onClick ? (
    <button type="button" disabled={loading} onClick={onClick} {...defaultProps}>
      {content}
    </button>
  ) : (
    <a href={loading ? undefined : href} download={name} {...defaultProps}>
      {content}
    </a>
  );
};
