import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './index.css';
// import App from './App';
// import "systemjs"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

