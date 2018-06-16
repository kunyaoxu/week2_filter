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
          <div className="imgcontainer" style={{backgroundImage: "url('http://khh.travel/FileArtPic.ashx?id=1204&w=640')"}}></div>
          <div className="cardmain">
              <h3 className="title">高雄關帝廟(武廟)</h3>
              <div className="content">高雄關帝廟，舊名「關帝廳」，是高雄香火鼎盛、歷史優久的寺廟，推測已創廟超過三百年的歲月。關帝廟廟主祀關聖帝君關羽，為忠義的象徵，配祀註生娘娘及福德正神，後殿則同祀觀音菩薩，配祀普賢菩薩及文殊菩薩。另有文昌殿、財神殿及月下老人供信徒，總是擠滿膜拜祈求好運平安的善男信女。三層樓高的廟身是黃瓦紅牆的宮殿式建築，莊嚴華麗，近年來關帝廟致力將宗教文化與觀光結合，特別是每年春節至元宵期間都會舉辦活動，其中包括乞平安龜、吃平安壽麵、猜燈謎和創意花燈大展等，是認識台灣傳統民俗節慶、祈福參拜的最佳場所。</div>
              <div className="otherinfo">
                  <div className="timeinfo">
                      <i className="far fa-calendar-alt"></i>
                      <label className="">每日06:00-23:00</label>
                  </div>
                  <div className="locationinfo">
                      <i className="fas fa-map-marker-alt"></i>
                      <label className="">高雄市苓雅區武廟路52號</label>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Card;