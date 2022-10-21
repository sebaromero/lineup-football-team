import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCss from './styles/global-css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalCss />
    <App />
  </React.StrictMode>
);
