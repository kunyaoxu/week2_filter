import React, { Component } from 'react';
import '../css/Functionarea.css';
//import Mynavbar from './Mynavbar.js';



class Functionarea extends Component {
  constructor(props, context){
      super(props, context);
      this.state = {};

  }

  render() {
//    console.log("render");
    return (
      <div className="Functionarea">
                  <div className="location">
                      <label>Location</label>
                      <div>
                          <select>
                              <option value="taipei">taipei</option>
                          </select>
                      </div>
                  </div>
                  <div className="date">
                      <label>Date</label>
                      <div className="from d-flex justify-content_end">
                          <label>from</label>
                          <input type="date" />
                      </div>
                      <div className="to d-flex justify-content_end">
                          <label>to</label>
                          <input type="date" />
                      </div>
                  </div>
                  <div className="categories">
                      <label>Categories</label>
                      <div className="checkboxgroup">
                          <label><input type="checkbox"/>Entertainment</label>
                          <label><input type="checkbox"/>Entertainment</label>
                          <label><input type="checkbox"/>Entertainment</label>
                      </div>
                  </div>
      </div>
    );
  }
}

export default Functionarea;
