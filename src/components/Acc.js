import React, { PropTypes } from 'react'
import $ from 'jquery'

var total  = 500;
class Acc extends React.Component {
	constructor(){
		super();
		this.state = {
			items:'30', //显示多少条目
			indexArry:[],
			contentArry:[],
			num:0,  //一共需要多少索引
			count:0, //显示第几个索引
			currentPage:0
		}
	}

	componentWillMount(){
		this.setState({
			num:Math.floor(total / this.state.items)
		})
		this.myMapIndex();
		this.myMapContent(this.state.currentPage)
	}

	//显示的内容
	myMapContent(index){
		let arr = [];
		for(let i = this.state.items*index ; i < this.state.items*(index+1) && i < total ; i++){
			arr = arr.concat([i+1])
		}
		this.setState({
			contentArry: arr
		})
		console.log(this.state.contentArry);
	}

	//显示的索引
	myMapIndex(index=0){
		let count = Math.floor(index/5)
		let arr = []
		for(let i = count*5 ; i < (count+1)*5 && i < this.state.num  ; i++){
			arr = arr.concat([i+1])
		}
		this.setState({
			indexArry:arr
		})
		console.log(this.state.indexArry);
	}
	//点击索引
handlePage(index){
	this.setState({
		currentPage:index
	})
	$('.indexItem').removeClass('activeItem')
	$('.indexItem').eq(index).addClass('activeItem').removeClass('indexItem')
	this.myMapContent(index)
	this.myMapIndex(index)

	console.log(index);
}


	render () {
		let styles = {
			span:{
				display:'inline-block',
				width:'50px',
				textAlign:'center',
				border:'1px solid #000',
				cursor:'pointer'
			}
		}
		let content = this.state.contentArry.map((item,i) =>
			(<span style={styles.span}	title={i+1} key={i} >{item}</span>)
		)
		let myIndex = this.state.indexArry.map((item,i) =>
			(<span className='indexItem' style={styles.span}	title={i+1} key={i} onClick={this.handlePage.bind(this,i)}>{item}</span>)
		)
		let pre = <span><span style={styles.span} onClick={this.handlePage.bind(this,0)}>首页</span><span style={styles.span} onClick={this.handlePage.bind(this,this.state.currentPage-1)}>上一页</span></span>
		let next = <span><span style={styles.span} onClick={this.handlePage.bind(this,this.state.currentPage+1)}>下一页</span><span style={styles.span} onClick={this.handlePage.bind(this,this.state.num)}>末页</span></span>
		return(
			<div>
				<div>
					{content}
				</div>
				<br /><br /><br /><br />
				<div>
					<span>
						{this.state.currentPage !== 0 && this.state.num > 5	 ? pre : ''}
					</span>
					<span>
						{myIndex}
					</span>
					<span>
						{this.state.currentPage !== total && this.state.num > 5	 ? next : ''}
					</span>
				</div>
			</div>
		)
	}
}

export default Acc;
