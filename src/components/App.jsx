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
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// import pages from '../css/index.scss';

const App = () => (
  <div className="page">
    <div className="section menu">menu</div>
    <div className="section header">
      <div className="photo">
        <img
          alt=""
          src={photoSmall}
          srcSet={`${photoBig} 2000w, ${photoSmall} 1000w `}
          size="(min-width: 960px) 960px, 100vw"
        />
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
