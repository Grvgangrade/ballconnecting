import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      arr : [
        {x1 : 50 , y1: 100 , x2: 250 , y2: 542},
        {x1 : 65 , y1: 424 , x2: 25 , y2: 89},
        {x1 : 50 , y1: 54 , x2: 250 , y2: 25},
        {x1 : 846 , y1: 100 , x2: 250 , y2: 542},
        {x1 : 32 , y1: 42 , x2: 280 , y2: 147}
      ]
    }
  }
  
  render() {
    let arr = this.state.arr.map(item => {
      return <line x1={item.x1} y1={item.y1} x2={item.x2} y2={item.y2} className="line"></line>
    })

    let point1 = this.state.arr.map(item => {
      return <circle  cx={item.x1} cy={item.y1} r='15' className='svgcircle'></circle>
    })

    let point2 = this.state.arr.map(item => {
      return <circle  cx={item.x2} cy={item.y2} r='15' className='svgcircle'></circle>
    })
    return (
      <div className="container">
        <svg height="900" width="100%" id="svgtag">
          {arr}
          {point1}
          {point2}
        </svg>
    </div>
    );
  }
}

export default App;
