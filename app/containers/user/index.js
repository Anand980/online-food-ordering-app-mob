import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo' 
import './style.less'
import Header from '../../components/header'
import UserInfo from '../../components/userinfo'
import OrderList from './subpage'
import { withRouter } from 'react-router-dom'

class User extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount(){
  }
  render(){
    const userinfo = this.props.userinfo
    return(
      <div>
        <Header title="User" backRouter="/"  history={this.props.history}/>
        <UserInfo username={userinfo.username} city={userinfo.cityName}/>
        <OrderList username={userinfo.username}/>
        
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
)(User))