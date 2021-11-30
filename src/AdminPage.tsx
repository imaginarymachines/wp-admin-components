import React, { FC } from 'react';
const AdminPage: FC<{ children: any }> = ({ children }) => {
  return (
    <div className="wp-admin wp-core-ui js index-php auto-fold admin-bar customize-support svg sticky-menu">
      <div id="wpcontent">
        <div id="wpbody" role="main">
          <div id="wpbody-content">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
