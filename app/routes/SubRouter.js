import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/home'
import City from '../containers/city'
import User from '../containers/user'
import Search from '../containers/search'
import Detail from '../containers/detail'
import NotFound from '../containers/404'
import Login from '../containers/login'

export default class SubRouter extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/city' component={City}/>
          <Route path='/Login/:router?' component={Login}/>
          <Route path='/user' component={User}/>
          <Route path='/search/:type/:keyword?' component={Search}/>
          <Route path='/detail/:id' component={Detail}/>
          <Route component={NotFound}/>
      </Switch>
    )
  }
}