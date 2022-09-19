import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  clickHandler(cityName){
    const changeFn = this.props.changeFn
    changeFn(cityName)
  }
  
  render(){
    return(
      <div className="city-list-container">
                <h3>Popular City</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandler.bind(this,'Canberra')}>Canberra</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this,'Sydney')}>Sydney</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this,'Brisbane')}>Brisbane</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this,'Adelaide')}>Adelaide</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this,'Melbourne')}>Melbourne</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this,'Perth')}>Perth</span>
                    </li>
                    
                </ul>
            </div>
    )
  }
}

export default CityList;