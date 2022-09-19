import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Star from '../Star'

class DetailInfo extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const data = this.props.data;
    const rate = Math.floor(data.rateinformation);
    return(
      <div id="detail-info-container">
        <div className="info-container clear-fix">
          <div className="info-img-container float-left">
            <img src={data.imageurl}/>
          </div>
          <div className="info-content">
            <h1>{data.storename}</h1>
            <div className="star-container">
              <Star rate={rate}/>
            </div>
            <p className="sub-title">{data.address}</p>
          </div>  
        </div>
        <div className="info-desc"><p>Running Time: 
        <br />Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7AM–10PM
        <br />Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7AM–10PM
        <br />Wednesday &nbsp;&nbsp; 7AM–10PM
        <br />Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  7AM–10PM
        <br />Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7AM–10PM
        <br />Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7AM–10PM
        <br />Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7AM–10PM
        <br />Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7AM–10PM
        </p></div>
      </div>
    )
  }
}

export default DetailInfo;
