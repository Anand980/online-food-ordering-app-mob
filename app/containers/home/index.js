import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import HomeAd from './subpage/ad'
import Restaurants from './subpage/list'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  render(){
    
    const cityName = this.props.userinfo.cityName ;
    return(
      <div>
        <HomeHeader cityName={cityName}  history={this.props.history}/>
        <Category />
        <div style={{height: "15px"}}></div>
        <HomeAd />
        <Restaurants cityName = {cityName}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo : state.userinfo  
  }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home))