import React, { FC,ReactChild } from 'react';

export interface MetaboxProps { children: ReactChild,title:string };
const Metabox: FC<MetaboxProps> = ({ children,title }) => {
  return (

    <div id="dashboard-widgets" className="metabox-holder">
    <div id="postbox-container-1" className="postbox-container">
        <div id="normal-sortables" className="meta-box-sortables ui-sortable">
            <div id="metabox" className="postbox">
                <button type="button" className="handlediv" aria-expanded="true">
                    <span className="screen-reader-text">Metabox collapse</span>
                    <span className="toggle-indicator" aria-hidden="true"></span>
                </button>
                <h2 className="hndle ui-sortable-handle">
                    <span>
                        {title}
                    </span>
                </h2>
                <div className="inside">
                    <div className="main">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  );
};
export default Metabox;
