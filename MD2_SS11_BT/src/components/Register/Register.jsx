import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Register.scss"
import { Navigate, useNavigate } from 'react-router-dom';
export default function Register() {
    const [name1,setName1] = useState("");
    const [password1,setPassword1] = useState("")
    // const navigate = useNavigate()
    const [users, setUsers] = useState([]);
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
        let data = e.target.value
        setName1(data)
    }
    let inputPass = (e)=>{
        let data = e.target.value
        setPassword1(data)
    }
    
    let RegisterBtn = () => {
        let pushData = async()=>{
            let exist = users.find((item)=>item.name === name1)
            if(exist){
                alert("Trùng tên");

                return
            }else{
                let newUser = {
                    id: users.length + 1,
                    name: name1,
                    password: password1
                };
                const response = await axios.post("http://localhost:5555/users",newUser)
                setUsers([...users, newUser])
                alert("Đã tạo thành công")
            }
        }
        pushData()
        setName1("")
        setPassword1("")
    }
    return (
        <>
        <div className='TatCa'>
            <div className='Reg'>
                <label htmlFor="">Username</label>
                <input type="text" value={name1} onChange={inputName} />
                <label htmlFor="" id='password'>Password</label>
                <input type="text" value={password1} onChange={inputPass}/>
                <label htmlFor="">Confirm Password</label>
                <input type="text" />
                <button onClick={RegisterBtn}>Đăng kí</button>
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
                            return(
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
