import React, { Component } from 'react';
import '../css/Header.css';
//import Mynavbar from './Mynavbar.js';



class Header extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
    return (
      <div className="Header">
          <div className="Header_s">
              <a className="logo">i am logo</a>
              <div className="search_area">
                  <div className="search_s">
                      <i className="fas fa-search"></i>
                      <input type="text" placeholder="Explore your own activities"/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Header;
