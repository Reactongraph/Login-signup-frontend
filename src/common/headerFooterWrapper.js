import React from 'react';
import { withRouter } from "react-router-dom";
import Header from '../containers/header'
// import Footer from '../container/Footer'

const HeaderFooterWrapper = (props) => (
  <div className="page_wrapper">
    <Header {...props} />
    {props.children}
    {/* <Footer {...props} /> */}
  </div>
)

export default withRouter(HeaderFooterWrapper)