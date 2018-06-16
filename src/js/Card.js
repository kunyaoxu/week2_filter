import React, { Component } from 'react';
import '../css/Card.css';
//import Mynavbar from './Mynavbar.js';



class Card extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
//                <div className="imgcontainer"><img src={"http://khh.travel/FileArtPic.ashx?id=2080&w=1280&h=960"}/></div>
    return (
      <div className="Card">
          <div className="imgcontainer" style={{backgroundImage: "url('http://khh.travel/FileArtPic.ashx?id=2080&w=1280&h=960')"}}></div>
          <div className="main">
              <h3 className="title">123321</h3>
              <h3 className="title">123321</h3>
          </div>
      </div>
    );
  }
}

export default Card;