import React from 'react'
import ReactDOM from 'react-dom'
import CreateRouter from './router'
import './assets/index.less'
import store from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <CreateRouter />
    </Provider>
  ,
  document.getElementById('root'))
