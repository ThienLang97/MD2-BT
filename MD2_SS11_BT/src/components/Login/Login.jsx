import React, { useState, useEffect } from 'react'
import "./Login.scss"
import axios from 'axios';
export default function Login() {
    const [users, setUsers] = useState([]);
    const [name2, setName2] = useState("")
    const [password2, setPassword2] = useState("")
    useEffect(() => {
        getData();
    }, [])
    let getData = async () => {
        const response = await axios.get("http://localhost:5555/users")
            .then(response => {
                let data = response.data;
                setUsers(data)
            })
    }
    let inputName = (e)=>{
        let name = e.target.value
        setName2(name)
    } 
    let inputPass = (e) =>{
        let password = e.target.value
        setPassword2(password)
    }
    let LoginBtn = () =>{
       let success = users.find((item)=>item.name == name2 && item.password == password2)
       if(success){
        alert("Đăng nhập thành công")
        setName2("")
        setPassword2("")

       }else{
        alert("Đăng nhập thất bại")
       }
    }
    return (
        <>
            <div className='TatCa'>
                <div className='Log'>
                    <label htmlFor="">Username</label>
                    <input type="text" value={name2} onChange={inputName} />
                    <label htmlFor="" id='password'>Password</label>
                    <input type="text" value={password2} onChange={inputPass} />

                    <button onClick={LoginBtn}>Đăng nhập</button>
                </div>
                {/* // */}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Pass</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.password}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
