import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoginComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }
  changeUsername(event){
    this.setState({
      username: event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password: event.target.value
    })
  }
  loginClickHandle(){
    const username = this.state.username;
    const loginHandle = this.props.loginHandle;
    loginHandle(username);
  }
  render(){
    return(
      <div id="login-container">
        <div className="input-container username-container">
          <i className="fa fa-user" aria-hidden="true"></i>
          <input 
          type="text"
          placeholder="Username"
          onChange={this.changeUsername.bind(this)}
          value={this.state.username} 
          style={{"border":"none"}}/>
        </div>
        
        
        <div className="input-container password-container">
          <i className="fa fa-unlock-alt" aria-hidden="true"></i>
          <input 
          type="text"
          placeholder="Password"
          onChange={this.changePassword.bind(this)}
          value={this.state.password}
          style={{"border":"none"}}/>
        </div>
        
        <button className="btn-login" onClick={this.loginClickHandle.bind(this)}>Login</button>
        
      </div>
    )
  }
}

export default LoginComponent;