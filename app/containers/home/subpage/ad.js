import React, { Component } from 'react'
import {createClient} from 'contentful';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAdParts from '../../../components/HomeAd'

import './style.less'

class HomeAd extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state ={
      categories:[]
    }
  }
  componentDidMount() {
    const client = createClient({
      space: 'nh2xhxzl53pj',
      accessToken: '1a0ac4dda187e8f2e365ec56c56c5bb68089b8c4ce2b71c331743bac2832d548'
    });
    client.getEntries({content_type:'topCategory'}).then((response)=> {
      this.setState({categories: response.items})
    });
  }
  render(){
    return(
      <div>
        {
          this.state.categories.length
          ? <HomeAdParts data = {this.state.categories} />
          : <p>Loading ... </p>
        }
      </div>
    )
  }
}

export default HomeAd;