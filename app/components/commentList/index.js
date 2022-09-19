import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import CommentListItem from './commentListItem'

class CommentList extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    const commentLists = this.props.comments.map((item,index)=>{
      return(
        <div className="comment-list" key={index}>
          <CommentListItem 
            key={index}
            username={item.username} 
            rating={item.rating} 
            date={item.date}
            comment={item.comment}
            />
        </div>
      )
    })
    return(
      <div>
        {
          this.props.comments
          ? commentLists
          : <div></div>
        }
      </div>
    )
  }
}

export default CommentList;