import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class UserInfo extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <div className="userinfo-container">
        <p>
          <i className="fa fa-user" aria-hidden="true"></i>
          &nbsp;
          <span>{this.props.username}</span>
        </p>
        <p>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          &nbsp;
          <span>{this.props.city}</span>
        </p>
      </div>
    )
  }
}

export default UserInfo;