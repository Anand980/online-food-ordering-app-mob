import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import SearchHeader from '../../components/searchHeader';
import Restaurants from './subpage/list'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount(){
    // const param = this.props.match.params;
    // console.log(param)
  }
  render(){
    const cityName = this.props.userinfo.cityName ;
    return(
      <div>
        <SearchHeader keyword={this.props.match.params.keyword}  history={this.props.history}/>
        <Restaurants cityName = {cityName} types={this.props.match.params.type} keyword={this.props.match.params.keyword} title="Search Results"/>
        <h1>Search</h1>
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
)(Search))
