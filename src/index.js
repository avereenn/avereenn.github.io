import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';

const rootEl = document.querySelector(`.root`);

render(<App />, rootEl);