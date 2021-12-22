import React, { FC, ReactChild, useState } from 'react';

export interface MetaboxWrapperProps {
  children: ReactChild;
}
export const MetaboxWrapper: FC<MetaboxWrapperProps> = ({ children }) => {
  return (
    <div id="dashboard-widgets" className="metabox-holder">
      {children}
    </div>
  );
};

export interface MetaboxProps {
  children: ReactChild;
  title: string;
}
const Metabox: FC<MetaboxProps> = ({ children, title }) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  return (
    <div id="dashboard-widgets" className="metabox-holder">
      <div className="postbox-container">
        <div className="meta-box-sortables ui-sortable">
          <div className="postbox">
            <button
              onClick={() => setOpen(!isOpen)}
              type="button"
              className="handlediv"
              aria-expanded="true"
            >
              <span className="screen-reader-text">Metabox collapse</span>
              <span className="toggle-indicator" aria-hidden="true"></span>
            </button>
            <h2 className="hndle ui-sortable-handle">
              <span>{title}</span>
            </h2>
            {isOpen ? (
              <div className="inside">
                <div className="main">{children}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Metabox;
