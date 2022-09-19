import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createClient} from 'contentful';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {CANBERRA_LIST_PAGE1, CANBERRA_LIST_PAGE2} from '../../../constant/userInfo'
import ListParts from '../../../components/list'
import LoadMore from '../../../components/loadMore'

import './style.less'

class Restaurants extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state ={
      restaurants:[],
      cityName: this.props.cityName,
      hasMore: true,
      isLoadingMore: false,
      page: 1
    }
  }
  componentDidMount(){
    let that = this
    const keyWord = that.placeUrl(that.state.cityName, 0)
    this.retrieveData(keyWord);
    
  }
  placeUrl(cityName, page){
    if(cityName === "Canberra" && page == 0){
      return CANBERRA_LIST_PAGE1
    } else if (cityName === "Canberra" && page == 1){
      return CANBERRA_LIST_PAGE2;
    } else if (cityName === "Canberra" && page == 2){
      return CANBERRA_LIST_PAGE2;
    } else if (cityName === "Canberra" && page == 3){
      return CANBERRA_LIST_PAGE2;
    } else if (cityName === "Sydney"){
      return CANBERRA_LIST_PAGE2;
    } else if (cityName === "Brisbane"){
      return CANBERRA_LIST_PAGE2;
    } else if (cityName === "Adelaide"){
      return CANBERRA_LIST_PAGE2;
    } else if (cityName === "Melbourne"){
      return CANBERRA_LIST_PAGE2;
    } else if (cityName === "Perth"){
      return CANBERRA_LIST_PAGE2;
    }
  }
  retrieveData(keyWord){
    const client = createClient({
      space: 'nh2xhxzl53pj',
      accessToken: '1a0ac4dda187e8f2e365ec56c56c5bb68089b8c4ce2b71c331743bac2832d548'
    });
    client.getEntries({content_type:keyWord}).then((response)=> {
      const parseResponse = []
      parseResponse = response.items.map((item, index)=>{
        return item.fields
      });
      this.setState({restaurants: this.state.restaurants.concat(parseResponse)})
    });
  }
  loadMoreDate(){
    let that = this;
    that.setState({
      isLoadingMore: true
    });
    const cityName = that.state.cityName;
    const page = that.state.page;
    const keyWord = that.placeUrl(cityName, page);
    this.retrieveData(keyWord);
    if(this.state.page >= 3){
      this.setState({
        hasMore: false,
        isLoadingMore : false
      })
    } else {
      that.setState({
      page: page + 1,
      isLoadingMore : false
    });
    }
  }
  render(){
    return(
      <div className="near-restaurant">
          <h2 className="home-list-title">Near Restaurant</h2>
          <ListParts restaurants={this.state.restaurants}/>
          {
            this.state.hasMore
            ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreDate.bind(this)} />
            : <div></div>
          }
          
      </div>
    )
  }
}

export default Restaurants;
