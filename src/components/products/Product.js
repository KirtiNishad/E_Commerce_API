import React from 'react'
// import './product.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Product = () => {
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


  return (
    <div className='product'>
        <div className='grid'>
        
        {
            state.map((products) => {
                const {category, id, image, price} = products
                return (

                    <div className='card' key={id}>
                    <NavLink to={`/singleproduct/${id}`} />
                        <h3>{category}</h3>
                        {
                            isLoading ? (
                                <p>Loading....</p>
                            ) : (
                                image && <img src={image} alt='img' className='image' />
                            )
                        }
                        <p>{price}$</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Product