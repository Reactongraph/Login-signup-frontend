import React from 'react';
import HeaderFooterWrapper from './headerFooterWrapper';

const Layout = (props) => (
  <HeaderFooterWrapper children={props.children} {...props} />
);

export default Layout;
