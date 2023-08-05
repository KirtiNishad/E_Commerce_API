import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = ({ size, setShowCart }) => {

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

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
                <li className='user'>
                    <div>
                        {
                            isAuthenticated && <p>
                                <h3>{user.name} </h3>
                            </p>
                        }
                    </div>

                    <div>
                        {
                            isAuthenticated ? (
                                <div className='btn-log'>
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                    SignOut
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <button onClick={() => loginWithRedirect()}>SignIn</button>
                                </div>
                            )
                        }
                    </div>
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