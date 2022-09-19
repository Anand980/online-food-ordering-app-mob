import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {createClient} from 'contentful';
import Header from '../../components/header'
import Info from './subpage/info'
import Comment from './subpage/comment'
import Buy from './subpage/buy'
import {CANBERRA_LIST_PAGE1, CANBERRA_LIST_PAGE2} from '../../constant/userInfo'
import { withRouter } from 'react-router-dom'


class Detail extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state ={
      restaurant:[],
      cityName: this.props.userinfo.cityName,
    }
  }
  componentDidMount(){
    const id = this.props.match.params.id;
    this.retrieveData(id);
  }
  retrieveData(id){
    const client = createClient({
      space: 'nh2xhxzl53pj',
      accessToken: '1a0ac4dda187e8f2e365ec56c56c5bb68089b8c4ce2b71c331743bac2832d548'
    });
    client.getEntries({content_type:CANBERRA_LIST_PAGE1}).then((response)=> {
      const idValue = []
      response.items.map((item, index)=>{
        if(item.fields.id == id){
          idValue = idValue.concat(item.fields); 
        }
      });
      if(idValue.length > 0){
        this.setState({restaurant: this.state.restaurant.concat(idValue)})
      }
    });
    client.getEntries({content_type:CANBERRA_LIST_PAGE2}).then((response)=> {
      const idValue = []
      response.items.map((item, index)=>{
        if(item.fields.id == id){
          idValue = idValue.concat(item.fields); 
        }
      });
      if(idValue.length > 0){
        this.setState({restaurant: this.state.restaurant.concat(idValue)})
      }
    });
  }
  render(){
    const id = this.props.match.params.id;
    const data = this.state.restaurant[0] 
    console.log()
    return(
      <div>
        <Header title="Detail" history={this.props.history}/>
        <Info 
          id={id} 
          data={data}/>
        <Buy id={id}/>
        <Comment />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userinfo : state.userinfo  
  }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail))