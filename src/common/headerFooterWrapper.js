import React from 'react';

import Header from '../containers/header';

const HeaderFooterWrapper = (props) => (
  <div className="page_wrapper">
    <Header {...props} />
    {props.children}
  </div>
);

export default HeaderFooterWrapper;
