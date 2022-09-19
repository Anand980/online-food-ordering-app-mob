import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import Star from '../../Star'

class CommentListItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const data = this.props;
    return(
      <div className="comment-item">
        <h3>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          &nbsp;
          {data.username}
        </h3>
        <Star rate={data.rating}/>
        <p>{data.comment}</p>
      </div>
    )
  }
}

export default CommentListItem;