import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  returnHandler(){
    const backRouter = this.props.backRouter
    // hashHistory.push(backRouter)
    if (backRouter) {
      this.props.history.push(backRouter)
      } else {
      window.history.back()
    }
  }
  render(){
    return(
      <div id="common-header">
        <span className="back-icon" onClick={this.returnHandler.bind(this)}><i className="fa fa-chevron-left"></i></span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header;