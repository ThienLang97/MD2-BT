import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryDetail() {

    // console.log(duong,"12345");
    const [category, setCategory] = useState(
        [
            {
                id: 111,
                name: "Phone",
                product: [
                    {
                        id: Math.floor(Math.random() * 1234),
                        name: "iphone1",
                        price: 76500
                    },
                    {
                        id: Math.floor(Math.random() * 333),
                        name: "iporn2",
                        price: 81000,
                    }
                ]
            }, {
                id: 222,
                name: "Sờ mát fôn",
                product: [

                    {
                        id: Math.floor(Math.random() * 1234),
                        name: "iphone3",
                        price: 123000
                    },
                    {
                        id: Math.floor(Math.random() * 333),
                        name: "iporn666",
                        price: 81000,
                    }
                ]
            }
        ])
    const {categoryId} = useParams();
    const [products, setProducts] = useState([])
    useEffect(() => {
        let resultProduct = category.find((item) => {
            return item.id == categoryId
        })
        setProducts(resultProduct.product)
    }, [categoryId])
    return (
        <div>
            Đây là test
            {
                products.map((item) => (
                    <li key={item.id}>
                        name: {item.name},
                        price: {item.price}

                    </li>
                ))
            }

        </div>
    )
}
