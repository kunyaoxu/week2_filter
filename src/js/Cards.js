import React, { Component } from 'react';
import '../css/Cards.css';
import Card from './Card.js';



class Cards extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
    return (
      <div className="Cards">
          <Card />
          <Card />
          <Card />
      </div>
    );
  }
}

export default Cards;