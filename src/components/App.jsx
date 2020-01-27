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
import illustration from '../pictures/illustration-big.png';
import photoBig from '../pictures/photo-big.jpg';
import photoSmall from '../pictures/photo-small.jpg';
import photoTall from '../pictures/photo-tall.jpg';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// import pages from '../css/index.scss';

const App = () => (
  <div className="page">
    <div className="section menu">menu</div>
    <div className="section header">
      <div className="photo">
        <picture>
          <source media="(min-width: 401px)" srcSet={photoBig} />
          <source media="(max-width: 400px)" srcSet={photoTall} />
          <img alt="" src={photoSmall} />
        </picture>
      </div>
    </div>
    <div className="section content">
      <div className="illustration">
        <img
          alt="illustration"
          style={{ maxWidth: '500px' }}
          src={illustration}
        />
      </div>
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
