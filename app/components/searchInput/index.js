import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class SearchInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value :''
    }
  }
  componentDidMount() {
    this.setState({
    value: this.props.value || ''
    })
  }
  ChangeHandle(event){
    this.setState({
      value: event.target.value
    })

  }
  KeyUpHandle(event){
    if (event.keyCode !== 13) {
      return
    }
    this.props.enterHandle(event.target.value)
  }
  render(){
    return(
      <div>
        <i className="fa fa-search"></i>
        &nbsp;
        <input 
          type="text"
          className="search-input"
          placeholder="Search"  
          value={this.state.value}
          onChange={this.ChangeHandle.bind(this)}
          onKeyUp={this.KeyUpHandle.bind(this)}
        />
      </div>
    )
  }
}

export default SearchInput;