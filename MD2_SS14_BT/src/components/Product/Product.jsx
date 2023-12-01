import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, fixProduct }  from './../../Store/index.js';

export default function Product() {
    let dispatch = useDispatch()
    const [check,setCheck]=useState(true)
    
    const [productName,setProductName] = useState();
    const data = useSelector(state =>{
        // console.log("1234",state.productReducer.products);
        return state.productReducer.products
    })
    const [products,setProducts] = useState([])
    const inputValue = (e)=>{
        let data = e.target.value
        setProducts(data)
        setProductName(data)
        
    }
    
    const handleClick = ()=>{
        if(check){
            dispatch(addProduct(products))
            setProducts("")
        }else{
            dispatch(fixProduct({...productName,name:products}))
            
        }
       
    }
    const handleDelete= (item)=>{
        let confirm1 = confirm("Có muốn xóa ko")
        if(confirm1){
            dispatch(deleteProduct(item))
        }
    }
    const handleFix = (item)=>{
        setProductName(item.name)

        setCheck(false)

    }
    
  return (
    <>
    List Products
      {data.map((item)=>{
          return <li key={item.id}>Name: {item.name} -------- Price: {item.price}
              <button onClick={() => handleDelete(item)}>Xóa</button>
              <button onClick={()=>handleFix(item)}>Sửa</button>
              
              </li>
              
      })}
        
      <input type="text" defaultValue={productName} onChange={inputValue}/>
    <button onClick={handleClick}>Thêm</button>
          
    
    </>
  )
}
