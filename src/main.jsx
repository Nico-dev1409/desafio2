import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// index.jsx o tu archivo principal
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
