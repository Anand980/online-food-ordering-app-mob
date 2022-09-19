import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import RouteMap from './routes/routerMap'
import AppRouter from './routes/AppRouter'

import './static/css/common.less'
import './static/css/font.less'

const store = configureStore()

const App = () =>{
  return(
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
 
}

export default App;

// <RouteMap history={hashHistory} />