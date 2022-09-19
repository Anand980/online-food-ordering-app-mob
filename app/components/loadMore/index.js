import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  loadMoreHandle(){
    this.props.loadMoreFn()
  }

  render(){
    return(
      <div className="load-more">
        {
          this.props.isLoadingMore
          ? <span>Loading ...</span>
          : <span onClick={this.loadMoreHandle.bind(this)}>Load More</span>
        }   
      </div>
    )
  }
}

export default LoadMore;