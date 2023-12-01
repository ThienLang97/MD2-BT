import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Main.scss';
import { useDispatch, useSelector } from 'react-redux';

export default function Main() {
    const [products, setProducts] = useState([])
    const cartProducts = useSelector(store => store);
    console.log(cartProducts);
    useEffect(() => {
        const data = async () => {
            const response = await axios.get("http://localhost:5566/products")
            setProducts(response.data)
        }
        data()
    }, [])
   
   
   // const [cartProduct1, setCartProduct1] = useState(test)
    // const [cartProducts,setCartProducts ] = useState([])
    const dispatch = useDispatch()
    let buy = (item) => {

        dispatch({
            type: "Mua",
            payload: {
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        })

    }
    const [newQuantity,setQuantity] =useState(1)
    let Incr = (cartProduct) => {
        // cartProduct.quantity = parseInt(cartProduct.quantity);
        // cartProduct.quantity++
        // setQuantity(cartProduct.quantity)
        dispatch({
            type:"Tăng",
            payload:{
                name:cartProduct.name
            }
        })
    }
    let Decr = (cartProduct) => {
        dispatch({
            type: "Giảm",
            payload: {
                name: cartProduct.name
            }
        })
        
        // if (cartProduct.quantity>1){
        //     cartProduct.quantity--;
        // }else{
        //     let confirm1 = confirm("Bạn có muốn xóa ko?")
        //     if(confirm1){
        //         dispatch({
        //             type:"Xóa",
        //             payload:{
        //                 name:cartProduct.name
        //             }
        //         })
        //     }
        // }
        // setQuantity(cartProduct.quantity)
    }
    let Delete = (cartProduct)=>{
        let confirm1 = confirm("Bạn có muốn xóa ko?")
        if (confirm1) {
            dispatch({
                type: "Xóa",
                payload: {
                    name: cartProduct.name
                }
            })
        }
    }
    return (
        <>
            <table className='listProducts' style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mặt hàng</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button onClick={() => buy(item)}>Mua</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <br />
            <table className='cart' style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mặt hàng</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tổng tiền</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.map((cartProduct) => {
                        return (
                            <tr key={cartProduct.id}>
                                <td>{cartProduct.id}</td>
                                <td>{cartProduct.name}</td>
                                <td>{cartProduct.price}</td>
                                <td>{cartProduct.quantity}</td>
                                <td>{cartProduct.quantity*cartProduct.price}</td>
                                <td>
                                    <button onClick={() => Incr(cartProduct)}>+</button>
                                    <button onClick={() => Decr(cartProduct)}>-</button>
                                    <button onClick={()=>Delete(cartProduct)}>Xóa</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
                    
            </table>
        </>
    )
}
