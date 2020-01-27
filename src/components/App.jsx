/**
 * title: App.js
 *
 * date: 1/27/2020
 *
 * author: javier olaya
 *
 * description: this component handles structure of the webpage
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';
import illustration from '../pictures/illustration-big.png';
import photoBig from '../pictures/photo-big.jpg';
import photoSmall from '../pictures/photo-small.jpg';

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
    <div className="section signUp">signUp</div>
    <div className="section feature1">feature1</div>
    <div className="section feature2">feature2</div>
    <div className="section feature3">feature3</div>
  </div>
);

App.PropType = {
  myComponent: PropTypes.elementType
};

export default App;
