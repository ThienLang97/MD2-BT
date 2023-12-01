import { BiUserCircle } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import React from 'react'
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
    const cartProducts = useSelector(store => store);
    return (
        <>
            <div className='header'>
                <h2>RIKKEI FOOD</h2>
                <div className="searchBar">
                    <input type="text" placeholder='Search' />
                    <BiSearchAlt2 style={{ fontSize: "24px" }} className="search-icon" />
                </div>
                <div className="icons">
                    <div className="test">
                        <BsFillCartFill style={{ fontSize: "24px" }} className="cart-icon" />
                        <span>{cartProducts.length}</span>
                    </div>
                    <div className="user-icon">
                        <BiUserCircle style={{ fontSize: "24px" }} className="user" />
                    </div>

                </div>
            </div>
        </>
    )
}
