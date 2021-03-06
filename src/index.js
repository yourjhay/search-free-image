import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import "./styles/index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./utils/Config"
import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);