import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './singleProduct.css'

const API = "https://fakestoreapi.com/products"

const SingleProduct = () => {

    const { id } = useParams()

    const [state, setState] = useState([])
    const [imageUrl, setImageUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getSingleData = async (url) => {
        try {
            const res = await axios.get(`${API}/${id}`)
            // singleproduct = await res.data
            setState(res.data)
            setImageUrl(res.data.image)
            // setisLoading(true)
            console.log(res.data)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {
        getSingleData()
    })

    console.log(state)

    return (
        <div className='container'>
            <div className='product'>
                <div className='img'>
                    {
                        isLoading ? (
                            <p>Loading....</p>
                        ) : (
                            imageUrl && <div className='img-box'> <img src={imageUrl} alt='img' className='image' /> </div>
                        )
                    }
                </div>
                <div className='details'>
                    <h3>{state.title}</h3>
                    
                    <h5>{state.category}</h5>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h4>Price : {state.price}$</h4>
                    {/* <h5>Rating : {state.rating.rate}</h5>
                    <h5>Stock : {state.rating.count}</h5> */}
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p>{state.description}</p>
                    <br></br>
                    <div className='btn'>
                        <button className='cart'>Add To Cart</button>
                        <button className='buy'>Place Order</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SingleProduct