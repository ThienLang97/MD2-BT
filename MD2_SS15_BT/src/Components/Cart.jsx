import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.scss';
import { deleteFromCart, increaseCart, decreaseCart, deleteAllCart } from './../Store/Reducer/Reducer.js';


export default function Cart() {
  const data = useSelector(state => {

    return state.products.cart

  })

  console.log(data, "hello");
  let dispatch = useDispatch()

  let deleteCart = (product) => {
    dispatch(deleteFromCart(product))
  }

  let inCrease = (product) => {
    dispatch(increaseCart(product))
  }

  let deCrease = (product) => {
    dispatch(decreaseCart(product))
  }
  let deleteAll = () => {
    dispatch(deleteAllCart())
  }
  let result = 0
  return (
    <>
      <div className='cart'>
        <h3>Giỏ hàng</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng tiền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.image} alt="" /></td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
                <td>
                  <button onClick={() => inCrease(item)}>+</button>
                  <button onClick={() => deCrease(item)}>-</button>
                  <button style={{ width: "50px" }} onClick={() => deleteCart(item)}>Xóa</button>
                </td>
              </tr>
            })}
          </tbody>
          <tfoot>
            <tr>
              
              <td colSpan={7}>Tổng giá trị giỏ hàng : 
                <h1>
                  {data.reduce((total, item)=>{
                    return total + item.price * item.quantity
                  },0)}
                </h1>
              </td>
            </tr>
          </tfoot>
        </table>
        <button onClick={deleteAll} style={{ width: "100px", height: "100px" }}>Xóa hết mặt hàng</button>
      </div>
    </>
  )
}
