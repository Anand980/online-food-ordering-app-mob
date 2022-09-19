import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'

import './style.less'

class Item extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <div className="list-item clear-fix">
      <Link to={'/detail/' + this.props.id}>
        <div className="item-img-container float-left">
            <img src={this.props.image} />
        </div>
        <div className="item-content">
          <div className="item-title-container clear-fix">
            <h3 className="float-left">{this.props.name}</h3>
          </div>
          <div className="item-price-container clear-fix">
            <span className="price float-left">{this.props.vicinity}</span>
            <br/>
            <br/>
            <span className="number float-left">Rating: {this.props.rating}</span>              
          </div>
        </div>
      </Link>
      </div>
    )
  }
}

export default Item;
