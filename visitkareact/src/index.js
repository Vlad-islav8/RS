'use scripts'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./redux/state";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App appState={state}/>
);



