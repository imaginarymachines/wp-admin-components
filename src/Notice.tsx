import React, { FC, useMemo, useState } from 'react';

export type NoticeProps = {
  heading?: string;
  link?: string;
  description: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  onDismissed?: () => void;
};
export const Notice: FC<NoticeProps> = ({
  heading,
  link,
  description,
  type,
  onDismissed,
}) => {
  const [dismissed,setDismissed] = useState(false);

  const handlerDismissed = () => {
    setDismissed(true);
    if( undefined != onDismissed ){
      onDismissed();
    }
  }
  const className = useMemo(() => {
    let cN = `notice ${type ? `notice-${type}` : ''}`;
    if (onDismissed) {
      cN = `${cN} is-dismissible`;
    }
    return cN;
  }, [type, onDismissed]);
  return dismissed ? null : (
    <div className={className}>
      {heading ? <h2>{heading}</h2> : null}
      <p className="description">
        {link ? (
          <a href={link} rel="noopener" target="_blank">
            {description}
          </a>
        ) : (
          <>{description} </>
        )}
        {onDismissed ? (
          <button type="button" className="notice-dismiss" onClick={handlerDismissed}>
            <span className="screen-reader-text">Dismiss this notice.</span>
          </button>

        ):null}
      </p>
    </div>
  );
};
