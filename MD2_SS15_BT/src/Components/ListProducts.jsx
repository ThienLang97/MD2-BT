import React, { useState, useEffect } from 'react'
import './ListProduct.scss';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, addToProducts } from './../Store/Reducer/Reducer.js';


export default function ListProducts() {
    const data = useSelector(state => {
        return state.products.products
    })
    const [listProducts, setListProducts] = useState(data)
    console.log(data,"9999");
    useEffect(() => {
        setListProducts(data);
    }, [data]);
    
    const dispatch = useDispatch()
    let addCart = (product) => {
        let confirm1 = confirm("Bạn có muốn thêm không")
        if (confirm1) {
            dispatch(addToCart(product))
        }
    }
    const [changeValue,setChangeValue] = useState({name:"",price:""})
    const [changeImage,setChangeImage] = useState(null)
    let inputChange = (e) => {
        const {name,value} = e.target
        setChangeValue((prevValue)=>({...prevValue,[name]:value}))

    }
    // let inputImage = (e) =>{
    //     const file = e.target.files[0] 
    //     const fileAsJson = file.toJSON();
    //     setChangeImage(fileAsJson)
        
    // }
    let inputImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const fileContent = event.target.result;
            setChangeImage(fileContent);
        };

        reader.readAsDataURL(file);
    };
    
    let addProducts = (changeValue, changeImage)=>{
        const newProduct = {
            name:changeValue.name,
            price:changeValue.price,
            image:changeImage
        }
        console.log(newProduct,"hihi");
        dispatch(addToProducts(newProduct))
       
        
    }
    
    return (
        <>
            <table className='listProducts' style={{ border: "1px solid black" }}>
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
                    {listProducts.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td key={product.id}>{product.id}</td>
                                <td key={product.id}>{product.name}</td>
                                <td key={product.id}><img src={product.image} alt={product.title} /></td>
                                <td key={product.id}>{product.price}</td>
                                <td key={product.id}><input type="number" defaultValue={product.quantity} style={{ width: "50px" }} /></td>
                                <td key={product.id}>{product.price * product.quantity}</td>
                                <td>

                                    <button onClick={() => addCart(product)}>Thêm vào giỏ hàng</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

                <input type="text" name='name'  onChange={inputChange} />
                <input type="text" name='price'  onChange={inputChange} />
                <input type="file" name="image" onChange={inputImage}/>
                <img src={changeImage} alt="" />
                <button onClick={() => addProducts(changeValue,changeImage)}>Thêm sản phẩm</button>
            </table>
        </>
    )
}
