import React, { Suspense, lazy } from 'react'
import { Route, Routes, Link, NavLink, useNavigate, Outlet } from 'react-router-dom'

import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import News from './components/News/News'
import Product from './components/Product/Product.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Category from './components/Category/Category.jsx';
import CategoryDetail from './components/CategoryDetail/CategoryDetail.jsx';


import './App.css';

export default function App() {
  const abc = useNavigate()
  const handleClick = () => {
    //Trong dấu ngoặc truyền path vào
    abc("")
  }
  const Lazy = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/About/About'));
      }, 5000);
    });
  });
  return (
    <>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/category'>Category</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={
          <Suspense fallback={<div>loading</div>}>
            <Lazy></Lazy>
          </Suspense>
        }> </Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/category' element={<Category></Category>}>
          <Route path=':categoryId' element={<CategoryDetail></CategoryDetail>}></Route>
        </Route>
        
        <Route path='/product/:idProduct' element={<Product></Product>}></Route>

        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
        
      <button onClick={handleClick}>Quay về trang chủ</button>
    </>
  )
}
