import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Add a style tag to force dark color scheme on the HTML element
const style = document.createElement('style');
style.innerHTML = 'html { color-scheme: dark; }';
document.head.appendChild(style);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
