import React from 'react'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import axios from "axios";
export default function App() {
  
  return (
    <div>
      <Home></Home>
      <Login></Login>
      <Register></Register>
    </div>
  )
}
