import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure this line is present

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


