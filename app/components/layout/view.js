import React from 'react';
import PropTypes from 'prop-types';

import Header from './header.js';

import './style.css';

const Layout = (props) => (
  <div className="layout_page">
    {props.withHeader && <Header  subTitle={props.subTitle} data={props.layoutData}/> }
    <React.Fragment>
      {props.children}
    </React.Fragment>
  </div>
);

Layout.defaultProps = {
  withHeader: true,
  subTitle: '',
  layoutData: {},
}

export default Layout;
