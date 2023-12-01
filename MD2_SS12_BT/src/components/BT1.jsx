import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function BT1() {
    //    const data1 = useSelector(store => store) 
    const data1 = useSelector(store1 => store1)
    const dispatch = useDispatch()
    let btnInc = ()=>{
        dispatch({
            type:"Tăng"
        })
    }
    let btnDec = ()=>{
        dispatch({
            type:"Giảm"
        })
    }
    return (
        <>
            <div>
                <button onClick={btnInc} >Tăng</button>
                <p>Count: {data1}</p>
                <button onClick={btnDec} >Giảm</button>
            </div>
        </>
    )
}
