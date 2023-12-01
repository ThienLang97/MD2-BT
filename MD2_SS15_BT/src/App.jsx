import React from 'react'
import ListProducts from './Components/ListProducts'
import Cart from './Components/Cart'
import './App.css';

export default function App() {
  return (
    <div className='totalPower'>
      <ListProducts></ListProducts>
      <Cart></Cart>
    </div>
  )
}
