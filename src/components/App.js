import React, { PropTypes } from 'react'
import {IntlProvider, FormattedMessage} from 'react-intl';

// import zh_CN from './zh_CN';
// import en_US from './en_US';

class App extends React.Component {
	render () {
		console.log(this.props.add);
		let styles = {
			p:{
				color:'red'
			},
			span:{
				background:'teal'
			}
		}
		return (
			<div>
				<p style={styles.p}>
					<FormattedMessage
						id='show'
						description='show title'
						defaultMessage='SHOW CONTENT:'
						/>
				</p>
				<span style={styles.span}>
					<FormattedMessage
					id='superHello'
					description='say hello to Howard.'
					defaultMessage='Hello, { someone }'
					values={
						 {someone:this.props.add(this.props.lang.someone)}
				 }
					/>

				</span>
			</div>
		)
	}
}

export default App;
