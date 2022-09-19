import React, { Component } from 'react'
import {createClient} from 'contentful';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAdParts extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const data = this.props.data;
    return(
      <div id="home-ad">
        <h2>Top Categories</h2>
        <div className="ad-container clear-fix">
          { data.map((item, index)=>{
            return <div key={index} className="ad-item float-left">
             
              
              <img src = { item.fields.image.fields.file.url} />
              <div className='ad-description'>
                <p className='ad-description_content'>{ item.fields.image.fields.title}</p>
              </div>
              
              
            </div>
          })}
        </div>

      </div>
    )
  }
}

export default HomeAdParts;