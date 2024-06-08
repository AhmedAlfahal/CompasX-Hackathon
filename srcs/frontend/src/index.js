import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import Modal from 'react-modal';

// Bind modal to app element
Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
