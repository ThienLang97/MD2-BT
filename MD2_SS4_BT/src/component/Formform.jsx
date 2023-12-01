import React, { Component } from 'react'

export default class Formform extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            age: ""

        }
    }
    saveInfo = (e) => {
        e.preventDefault()
        
    }
    changeValue = (e) => {
        let aaa = e.target.name
        let value = e.target.value
        this.setState({
            [aaa]: value
        })
        
    }
    render() {
            console.log(this.state);
            /* 
            let obj={
                name:"mai"
            } 
            obj["age"]=25
            */
            return (
                <>
                    <form action="">
                        <label htmlFor="name">Họ và tên</label>
                        <input placeholder='Mời nhập tên'
                            onChange={this.changeValue}
                            name='name' /> <br />
                        <label htmlFor="age">Tuổi</label>
                        <input placeholder='Nhập tuổi'
                            onChange={this.changeValue}
                            name='age' />
                        <button onClick={this.saveInfo}>Lưu</button>
                    </form>
                </>

            )
    }
}
