import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import { connect } from 'react-redux'
import BuyAndStore from '../../../components/BuyAndStore'
import { bindActionCreators } from 'redux'
import * as storeActionsFromOtherFile from '../../../actions/store'
import { withRouter } from 'react-router-dom'

class Buy extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isStore: false
    }
  }
  componentDidMount(){
    console.log(this.props)
    this.storeStateCheck()
  }
  buyHandle(){
    const loginFlag = this.loginCheck()
    if (!loginFlag) {
      return
    }
    this.props.history.push('/user')
  }
  storeHandle(){
    const loginFlag = this.loginCheck()
    if (!loginFlag) {
      return
    }
    const id = this.props.id
    const storeActions = this.props.storeActions
    if (this.state.isStore) {
      storeActions.remove({id: id})
    } else {
      storeActions.add({id: id})
    }
    this.setState({
      isStore: !this.state.isStore
    })
  }
  storeStateCheck(){
    const id = this.props.id
    const store = this.props.store
    store.some(item=>{
      if(id === item.id){
        this.setState({
          isStore: true
        })
        return true
      }
    })

  }
  loginCheck(){
    const id = this.props.id;
    const userinfo = this.props.userinfo
    console.log(encodeURIComponent('/detail/' + id))
    if (!userinfo.username) {
      this.props.history.push('/Login/')
      return false
    }
    return true
  }
  render(){
    return(
      <div>
        <BuyAndStore 
          isStore={this.state.isStore} 
          buyHandle={this.buyHandle.bind(this)} 
          storeHandle={this.storeHandle.bind(this)}/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    userinfo : state.userinfo,
    store : state.store  
  }
}

function mapDispatchToProps(dispatch) {
    return {
      storeActions: bindActionCreators(storeActionsFromOtherFile, dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy))