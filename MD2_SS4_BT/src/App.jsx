import React, { Component } from 'react'
import Child from './assets/Child';
import Formform from './component/Formform';

export default class App extends Component {
  constructor() {
    super()
    this.state={
      count:0, // cơ chế state trong classcomponent merge, function là replace
      Active:true
    }
  }
  componentDidUpdate=()=>{
    console.log("componentDidUpdate đc thực thi");
  }
  componentWillUpdate=()=>{
    console.log("componentWillUpdate bắt đầu được gọi");
  }
  shouldComponentUpdate=()=>{
    console.log("shouldComponentUpdate? đc thực thi");
    return true
  }
  componentDidMount=()=>{
    console.log("Sau khi component render lần đầu tiên chạy đến DidMount");
    //Nơi để call API
  }
  componentWillMount=()=>{
    console.log("ComponentWillMount bắt đầu chạy");
  }
  increaseCount = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  removeChild=()=>{
    this.setState({
      active:false
    })
  }
  render() {
    console.log("Component render lần đầu tiên")
    return (
      
      <>
        Count {this.state.count}
        <button onClick={this.increaseCount}>Bấm</button>
        {/* <Child></Child> */}
       <Formform></Formform>
      </>
    )
  }
}
