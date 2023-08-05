import React from 'react'
import './home.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    const API = "https://fakestoreapi.com/products"

    const [state, setState] = useState([])
    const [image, setImage] = useState('')
    const [isLoading, setisLoading] = useState(false)

    const getApiData = async (url) => {
        try {
            const res = await axios.get(API)
            setState(res.data)
            setImage(res.data.image)
            // setisLoading(true)
            console.log(res.data)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {
        getApiData()
    }, [])


    // prop.func("kirit");

    const [cart, setCart] = useState([]);

    const addToCart = (products) => {
        // console.log(products)

        let isPresent = false;
        cart.forEach((oneProduct) => {
            if (products.id === oneProduct.id)
                isPresent = true
        })
        if (isPresent)
            return;

        setCart([...cart, products])
    }



    return (
        <div className='product'>
            <div className='grid' >
                {
                    state.map((products) => {
                        const { id, image, price, title } = products
                        return (
                            <div className='box'>
                            <div className='card' key={id}>
                                <NavLink to={`/singleproduct/${id}`}  >
                                    {
                                        isLoading ? (
                                            <p>Loading....</p>
                                        ) : (
                                            image && <div className='img-box'> <img src={image} alt='img' className='image' /> </div>
                                        )
                                    }
                                    
                                </NavLink>
                                
                            </div>
                            <br></br>
                            <h5 className='title'>{title}</h5>
                            <p className='price'>{price}$</p>
                            <div className='btn'>
                                    <button onClick={() => addToCart(products)} className='cart'>Add To Cart</button>
                                </div>
                            </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default Home