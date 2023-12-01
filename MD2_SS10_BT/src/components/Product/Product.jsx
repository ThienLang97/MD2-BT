import React from 'react'
import {useParams} from 'react-router-dom'
export default function Product() {
    console.log("!11",useParams);
    // let idProduct = useParams().idProduct
    const {idProduct} = useParams()
    
  return (
    <div>
      Product
    </div>
  )
}
