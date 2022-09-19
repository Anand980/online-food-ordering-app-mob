import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'


class Star extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const fullStart = _.range(this.props.rate/2).map((item, index)=>{
      return (<i className="fa fa-star" aria-hidden="true" style={{"color":"rgb(255,0,0)"}}></i>)
    })
    const emptyStart = _.range(5-this.props.rate/2).map((item, index)=>{
      return (<i className="fa fa-star-o" aria-hidden="true"></i>)
    })
    
    return(
      <div>
          {fullStart}
          {emptyStart}
      </div>
    )
  }
}

export default Star;