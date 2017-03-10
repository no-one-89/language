import React, { PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

import { parks } from './data/parks'

class Test extends React.Component {
  constructor(){
    super();
    this.state={
      show:false
    }
  }
getStyles(){
  return {
   p:{
      width:'150px',
      border:'1px solid #000',
      backgroundColor:'#2aa'
    },
    table:{
      border:'1px solid #000'
    },
    p1:{
      width:'150px',
      backgroundColor:'teal'
    }
  }
}

handleClick(){
  this.setState({
    show:!this.state.show
  })
}

handleSelect(index){
  let parkName = parks[index].name;
  console.log(parkName);
  console.log(this.refs.parkName);
  this.refs.parkName.innerHTML=parkName
  this.setState({
    show:false
  })
  let parksInfo =
  ` <tr>
      <th>${parks[index].des}</th>
      <th>${parks[index].count}</th>
    </tr>`
    console.log(parksInfo);
    this.refs.table.innerHTML=parksInfo

}
  render () {
    console.log(parks[0].name);

    let allParks = parks.map( (item,i) => <p style={this.getStyles().p1} onClick={this.handleSelect.bind(this,i)} key={i}>{item.name}</p> )



    return(
      <div>
        <div>停车场
          <p ref='parkName' style = {this.getStyles().p} onClick={this.handleClick.bind(this)} >请选择停车场
          </p>
            {this.state.show ? allParks : ''}
        </div>
        <div>停车场信息
          <table ref = 'table' style={this.getStyles().table}>
					<img src={requier()}
          </table>
        </div>
      </div>
    )
  }
}

export default Test;
// render(<Test />,document.getElementById('root'))
