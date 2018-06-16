import React, { Component } from 'react';
import '../css/Resultarea.css';
import Cards from './Cards.js';


class Resultarea extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
    return (
      <div className="Resultarea">
          <div><label className="showresultby">Showing {15} results by…</label></div>
          <div className="conditionarea">
              <label className="far fa-times-circle"><input type="button" className="btn condition_btn" value="Koahsiung"/></label>
              <label className="far fa-times-circle"><input type="button" className="btn condition_btn" value="Koahsiung"/></label>
          </div>
          <Cards />
      </div>
    );
  }
}

export default Resultarea;
