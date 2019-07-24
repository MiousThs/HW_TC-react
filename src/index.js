import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import setupStore from './registerStore';

ReactDOM.render(
    <App store={setupStore()}></App>
    , document.getElementById('root'));

