import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import { withRouter } from 'react-router-dom'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      initDone : true
    }
  }
  componentWillMount(){
    // Get the city name from local storage
    let cityName = LocalStore.getItem(CITYNAME)
    
    if (cityName == null){
      cityName = 'Canberra'
    }
    this.props.userInfoActions.update({
      cityName : cityName
    })
    
  
    this.setState({
      initDone : true
    })
    
  }
  render(){
    return(
      <div>
        { 
          this.state.initDone
          ? this.props.children 
          : <div>Loading ... </div>
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
)(App))