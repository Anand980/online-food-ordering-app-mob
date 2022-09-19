import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class OrderList extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <div>
        <div className="order-list-container">
          <h2>Order List</h2>
        </div>
      </div>
    )
  }
}

export default OrderList;