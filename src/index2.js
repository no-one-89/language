import React, {Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import {IntlProvider, FormattedMessage} from 'react-intl';

import zh_CN from './components/zh_CN';
import en_US from './components/en_US';
import App from './components/App'

class Apps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang : zh_CN
        };
    }
handleClick1(){
	console.log('中文');
	this.setState({
		lang:zh_CN
	})
	console.log(this.state.lang);
}
handleClick2(){
	console.log('English');
	this.setState({
		lang : en_US
	})
	console.log(this.state.lang);
}
// 	chooseLocale(){
// 	    switch(this.state.lang.split('_')[0]){
// 	        case 'en':
// 	            return 'en_US';
// 	            break;
// 	        case 'zh':
// 	            return 'zh_CN';
// 	            break;
//
// 	        default:
// 	            return 'en_US';
// 	            break;
// 	    }
// }
	add(name){
		switch(name){
			case '刘可可':
				return '亲爱的刘可可!';
				break;
			case 'Keke Liu':
				return 'Dear Keke Liu!';
				break;
			default:
				return 'someone';
				break;
		}
	}
    render() {
        // const {name, unreadCount} = this.state;

        return (
					<div>
						<div>
							<button onClick={this.handleClick1.bind(this)}>中文</button>
							<button onClick={this.handleClick2.bind(this)}>English</button>
						</div>

						<IntlProvider locale="en" messages={this.state.lang}>
								<App lang = {this.state.lang}  add = {this.add} />
						</IntlProvider>
					</div>
        );
    }
}

render(<Apps />
  ,
    document.getElementById('root')
);
