import React, { PropTypes } from 'react'
import parks from '../fakeData/parks'
import data from '../fakeData/data.txt'
import '../styles/style.css'

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
    let parksName=parks.parks[index].name
    this.refs.parkName.innerHTML=parksName
    this.setState({
      show:false
    })

    let parkInfo =  `<tr>
        <th>${parks.parks[index].des}</th>
        <th>${parks.parks[index].count}</th>
      </tr>`
      this.refs.table.innerHTML=parkInfo
  }
  render () {
    console.log(data);
    let styles=this.getStyles()
    let allParks = parks.parks.map((item,i) => <p style={styles.p1} onClick={this.handleSelect.bind(this,i)} key={i}>{item.name}</p>)
    return(
      <div>
      <div>停车场
        <p ref='parkName' style={styles.p} onClick={this.handleClick.bind(this)}>请选择停车场
        </p>
        {this.state.show ? allParks : ''}

      </div>
      <div>停车场信息
        <table ref = 'table' style={this.getStyles().table}>

        </table>
      </div>
      </div>
    )
  }
}

export default Test;
