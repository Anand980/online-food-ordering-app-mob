import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router-dom';

import './style.less'

class Category extends Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      index: 0
    }
  }
  render(){
    var options = {
      auto : 2000,
      callback: (index)=>{
        this.setState({
          index: index
        })
      }
    }
    return(
      <div id="home-category">
        <ReactSwipe className="carousel" swipeOptions={options}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/sushi"><li className="float-left sushi">Sushi</li></Link>
              <Link to="/search/sushi"><li className="float-left spaghetti">Spaghetti</li></Link>
              <Link to="/search/sushi"><li className="float-left noodles">Noodles</li></Link>
              <Link to="/search/sushi"><li className="float-left bento">Bento</li></Link>
              <Link to="/search/sushi"><li className="float-left pancake">Pancake</li></Link>
              <Link to="/search/sushi"><li className="float-left dimsum">Dim Sum</li></Link>
              <Link to="/search/sushi"><li className="float-left pizza">Pizza</li></Link>
              <Link to="/search/sushi"><li className="float-left taco">Taco</li></Link>
              <Link to="/search/sushi"><li className="float-left hotdog">Hotdog</li></Link>
              <Link to="/search/sushi"><li className="float-left hamburger">Hamburger</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/sushi"><li className="float-left wrap">Wrap</li></Link>
              <Link to="/search/sushi"><li className="float-left mcdonald">Mcdonald</li></Link>
              <Link to="/search/sushi"><li className="float-left kebab">Kebab</li></Link>
              <Link to="/search/sushi"><li className="float-left cupcake">Cupcake</li></Link>
              <Link to="/search/sushi"><li className="float-left vegan">Vegan</li></Link>
              <Link to="/search/sushi"><li className="float-left vegetarian">Vegetarian</li></Link>
              <Link to="/search/sushi"><li className="float-left doughnut">Doughnut</li></Link>
              <Link to="/search/sushi"><li className="float-left paella">Paella</li></Link>
              <Link to="/search/sushi"><li className="float-left steak">Steak</li></Link>
              <Link to="/search/sushi"><li className="float-left icecream">Icecream</li></Link>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ''}></li>
            <li className={this.state.index === 1 ? "selected" : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Category;