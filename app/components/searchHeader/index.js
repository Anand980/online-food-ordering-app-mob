import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less';
import SearchInput from '../searchInput';

class SearchHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  returnHandler(){
    window.history.back();
  }
  enterHandle(value) {
    this.props.history.push('/search/all/' + encodeURIComponent(value))
  }
  render(){
    return(
      <div>
        <div id="search-header" className="clear-fix">
          <span className="back-icon float-left" onClick={this.returnHandler.bind(this)}><i className="fa fa-chevron-left"></i></span>
          <div className="input-container">
            <SearchInput value={ this.props.keyword || ''} enterHandle={this.enterHandle.bind(this)}/>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default SearchHeader;