import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import Header from '../../components/header'
import LoginComponent from '../../components/login'
import { withRouter } from 'react-router-dom'

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      checking: true
    }
  }
  componentDidMount(){
    this.CheckUserState();
    
  }
  CheckUserState(){
    const userinfo = this.props.userinfo;
    if (userinfo.username != null){
      this.TransferToUserPage();
    } else {
      this.setState({
        checking: false
      })
    }
  }
  TransferToUserPage(){
    this.props.history.push('/user')
  }
  loginHandle(username){
    const actions = this.props.userInfoActions
    let userinfo = this.props.userinfo
    userinfo.username = username
    actions.update(userinfo)

    const params = this.props.match.params
    const router = params.router
    if (router){
      this.props.history.push(router)
    } else {
      this.TransferToUserPage()
    }
  }
  render(){
    console.log(this.props.userinfo.username)
    console.log(this.props.userinfo.cityName)
    return(
      <div>
        <Header title='Login'  history={this.props.history}/>
        {
          this.state.checking
          ? <div>Loading ... </div>
          : <div><LoginComponent loginHandle={this.loginHandle.bind(this)}/></div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))