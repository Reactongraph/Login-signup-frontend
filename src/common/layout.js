import React from 'react';
import HeaderFooterWrapper from './headerFooterWrapper'
import { BrowserRouter as Router } from 'react-router-dom';

const Layout = (props) => (
  <Router>
    <HeaderFooterWrapper children={props.children} {...props} />
  </Router>
)

export default Layout;