import React, { setGlobal } from 'reactn'
import ReactDOM from 'react-dom'
import './index.css'
import {  HashRouter } from 'react-router-dom'
import App from './App'

setGlobal({
  loading: false,
  userList: [],
})

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
)
