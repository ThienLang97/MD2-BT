import React, { useState } from 'react'
import Header from './component/Header'
import UseID from './component/UseID'

export default function App() {
  const [count,setCount] = useState(0)
  const handleIncrease = ()=>{
    setCount(count+1)
  }
  /* 
  Code tính toán
  */
  return (
    <div>
      <Header count={count}></Header>
      <button onClick={handleIncrease}>Click</button>
      <UseID></UseID>
    </div>
  )
}
