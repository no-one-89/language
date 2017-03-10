import React, { PropTypes } from 'react'
import axios from 'axios';


import { getParkInfo } from '../request/request'
// import { parks } from '../fakeData/parks'
class App1 extends React.Component {
	componentDidMount() {


		getParkInfo()
		.then((res) => {
			console.log(res);
		})
}
	render(){
		return(
			<div>123</div>
		)
	}
}

export default App1;
