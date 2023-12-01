import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Category() {
    const [category, setCategory] = useState(
        [
            {
                id: 111,
                name: "Phone",
                product: [
                    {
                        id: Math.floor(Math.random() * 1234),
                        name: "iphone1",
                        price: 123000
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
    return (
        <div>
            Category
           
            {category.map((item)=>(
                <li key={item.id}>
                    <Link to={`/category/${item.id}`}>{item.name}</Link>
                </li>
            ))}
            <Outlet></Outlet>
        </div>
    )
}
