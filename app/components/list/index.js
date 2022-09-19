import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {PHOTO_API_URL} from '../../constant/userInfo'
import Item from './item'

import './style.less'

class ListParts extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const photos = this.props.restaurants.map((item,index)=>{
      return(
          <Item key={index} name={item.storename} vicinity={item.address} image={item.imageurl} rating={item.rateinformation} id={item.id}/>
      )
    })
    return(
      <div>
        {
          this.props.restaurants
          ? photos
          : <div></div>
        }
      </div>
    )
  }
}

export default ListParts;