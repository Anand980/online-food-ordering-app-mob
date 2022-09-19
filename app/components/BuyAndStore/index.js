import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class BuyAndStore extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  buyClickHandle() {
    this.props.buyHandle()
  }
  storeClickHandle() {
    this.props.storeHandle()
  }
  render(){
    return(
      <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {
            this.props.isStore
            ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>Subscribed</button>
            : <button onClick={this.storeClickHandle.bind(this)}>Subscribe</button>
          }
        </div>
        <div className="item-container float-right">
          <button onClick={this.buyClickHandle.bind(this)}>Purchase</button>
        </div>
      </div>
    )
  }
}

export default BuyAndStore;