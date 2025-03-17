// src/popup/index.ts

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/popup.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<App />, rootElement);
} else {
    console.error('Root element not found');
}