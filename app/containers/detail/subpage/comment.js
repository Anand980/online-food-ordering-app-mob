import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentList from '../../../components/commentList'
import LoadMore from '../../../components/loadMore'
import {createClient} from 'contentful';
import './style.less'


class Comment extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state ={
      comments:[],
      hasMore: true,
      isLoadingMore: false,
      page: 0
    }
  }
  componentDidMount(){
    let that = this
    const keyWord = "usercomment"
    this.retrieveData(keyWord);
    
  }
  retrieveData(keyWord){
    const client = createClient({
      space: 'nh2xhxzl53pj',
      accessToken: '1a0ac4dda187e8f2e365ec56c56c5bb68089b8c4ce2b71c331743bac2832d548'
    });
    client.getEntries({content_type:keyWord}).then((response)=> {
      const parseResponse = []
      parseResponse = response.items.map((item, index)=>{
        return item.fields
      });
      this.setState({comments: this.state.comments.concat(parseResponse)})
    });
  }
  loadMoreDate(){
    let that = this;
    that.setState({
      isLoadingMore: true
    });
    this.retrieveData("usercomment");
    if(this.state.page >= 3){
      this.setState({
        hasMore: false,
        isLoadingMore : false
      })
    } else {
      that.setState({
      page: this.state.page + 1,
      isLoadingMore : false
    });
    }
  }
  render(){
    return(
      <div className="detail-comment-subpage">
        <h2>Comments</h2>
        <CommentList comments={this.state.comments}/>
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreDate.bind(this)} />
          : <div></div>
        }
      </div>
    )
  }
}

export default Comment;