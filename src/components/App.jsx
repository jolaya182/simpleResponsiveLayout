/**
 * title: App.js
 *
 * date: / /
 *
 * author: javier olaya
 *
 * description: this component handles the basic routing for the webpage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import illustration from '../pictures/illustration.svg';

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// import pages from '../css/index.scss';

const App = () => (
  <div className="page">
    <div className="section menu">menu</div>
    <div className="section header">
      header
      {/* <img src="" /> */}
    </div>
    <div className="section content">
      <img
        alt="illustration"
        className="illustration"
        src={illustration}
        style={{ maxWidth: '500px' }}
      />
    </div>
    <div className="section signUp">
      signUp
      {/* <img src="" /> */}
    </div>
    <div className="section feature1">
      feature1
      {/* <img src="" /> */}
    </div>
    <div className="section feature2">
      feature2
      {/* <img src="" /> */}
    </div>
    <div className="section feature3">
      feature3
      {/* <img src="" /> */}
    </div>
  </div>
);

App.PropType = {
  myComponent: PropTypes.elementType
};

export default App;
