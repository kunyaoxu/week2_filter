import React, { Component } from 'react';
import './css/style.css';
import './css/my.css';
import Header from './js/Header.js';
import Functionarea from './js/Functionarea.js';
import Resultarea from './js/Resultarea.js';


class App extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
    return (
      <div className="App">
          <Header />
          <div className="main">
              <Functionarea />
              <Resultarea />
          </div>
      </div>
    );
  }
}

export default App;
