import axios from 'axios';
import Mock from 'mockjs'

import { parks,costType } from '../fakeData/data'

//使用mock替换ajax请求返回值
Mock.mock('parks.json',parks)
Mock.mock('costType.json',costType)

var parkInfoAddress = 'parks.json'
var costTypeInfoAddress = 'costType.json'
var shift = false;
if(shift){
	//设置真实路径
	parkInfoAddress = 'https://raw.githubusercontent.com/no-one-89/demodata/master/getFlowInfo'
}

//一下为ajax方法

//获取停车场信息
function getParkInfo() {
		return axios.get(parkInfoAddress)
		.then((res) => (
			console.log(res),
			{  data: res.data }
		))
		.catch(function(error) {
			alert(error);
		});
}

//获取收费类型信息
function getCostTypeInfo() {
		return axios.get(costTypeInfoAddress)
		.then((res) => (
			console.log(res),
			{  data: res.data }
		))
		.catch(function(error) {
			alert(error);
		});
}

export { getParkInfo , getCostTypeInfo }
