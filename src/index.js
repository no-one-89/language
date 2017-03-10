import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

//移动端点击插件
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import App1 from './components/App1';
import Acc from './components/Acc'
// import Test from './components/Test';
// import Red from './components/Red';
// import Blue from './components/Blue';
// import Yellow from './components/Yellow';
// import Survey from './components/Survey';
// import TrendManage from './components/TrendManage';

import './styles/base.css'
import './styles/style.css'
// import { Provider } from 'react-redux';
// import store, { history } from './store';
// <Route path="/test" component={Test} />
// const router = (
//   // <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
// 				<IndexRoute  component={Survey} />
//         <Route path="/survey" component={Survey} />
// 				<Route path="/trendManage" component={TrendManage} >
// 					<IndexRoute  component={Red} />
// 					<Route path="/red" component={Red} />
// 					<Route path="/blue" component={Blue} />
// 					<Route path="/yellow" component={Yellow} />
// 				</Route>
//       </Route>
//
//     </Router>
  // </Provider>
// )

render(<Acc />, document.getElementById('root'));
