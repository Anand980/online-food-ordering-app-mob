import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from '../../../components/DetaiInfo'

class Info extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return(
      <div>
        {
          this.props.data
          ? <DetailInfo data={this.props.data}/>
          : <div>Loading ... </div> 
        }
      </div>
    )
  }
}

export default Info;