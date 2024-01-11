import React from 'react';
import ReactDOM from 'react-dom/client';

// Change file name only here if function which is import is App. 
import App from "./Router/Display.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)