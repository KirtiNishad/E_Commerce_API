import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ size, setShowCart }) => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>

            <h1 className="logo" onClick={() => setShowCart(false)}>Shopcart</h1>

            <ul className={click ? "nav active" : "nav"}>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li onClick={() => setShowCart(true)}>
                    <Link to="/cart"> CART <FaShoppingCart size={20} style={{ color: 'black' }} /></Link>
                </li>
            </ul>

            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: 'black' }} />
                ) : (
                    <FaBars size={20} style={{ color: "black" }} />
                )}
            </div>
        </div>
    )
}

export default Navbar

// , textAlign: 'center'