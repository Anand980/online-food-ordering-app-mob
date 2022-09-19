import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { update } from '../../actions/userinfo' 
import Header from '../../components/header'
import CurrentCity from '../../components/currentCity'
import CityList from '../../components/cityList'
import LocalStore from '../../util/localStore'
import { CITYNAME } from '../../config/localStoreKey'
import { withRouter } from 'react-router-dom'

class City extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  changeCity(newCity){
    if(newCity == null){
      return 
    }
    const userInfo = this.props.userinfo;
    userInfo.cityName = newCity;
    this.props.userInfoActions(userInfo);
    console.log(this.props.userinfo.cityName)
    LocalStore.setItem(CITYNAME, newCity);
    this.props.history.replace('/')
  }
  render(){
    return(
      <div>
        <Header title = "City Selection" history={this.props.history}/>
        <CurrentCity cityName = {this.props.userinfo.cityName}/>
        <CityList changeFn={this.changeCity.bind(this)}/>
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
        userInfoActions: bindActionCreators(update, dispatch),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(City))