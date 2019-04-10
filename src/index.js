

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//removed react-router-dom because I don't plan on changing routes

let store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));