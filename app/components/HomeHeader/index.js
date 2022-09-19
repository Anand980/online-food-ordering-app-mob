import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link  } from 'react-router-dom'
import './style.less'

import SearchInput from '../searchInput'

class HomeHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  enterHandle(value) {
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
  render(){
    return(
      <div id = "home-header" className = "clear-fix">
        <div id = "home-header-left" className = "float-left">
          <Link to='/city' style={{ textDecoration: 'none' }}>
            <span>{this.props.cityName}</span>
            &nbsp;  
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </Link>
        </div>
        <div id = "home-header-right" className = "float-right">
          <Link to='/Login'>
            <i className="fa fa-user-o" aria-hidden="true"></i>
          </Link>
        </div>
        <div id="home-header-middle">
          <div id = "search-container">
            <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
          </div>
        </div>
        
      </div>
    )
  }
}

export default HomeHeader;
