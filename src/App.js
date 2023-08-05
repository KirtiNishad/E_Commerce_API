import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/products/SingleProduct';
import Navbar from './components/header/Navbar';
import Product from './components/products/Product';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';

function App() {

  const [showCart, setShowCart] = useState(false)
  const [data, setData] = useState('')

  const addToCart = (products) => {
    setData(products)
    console.log(products)
  }

  return (
      <Router>
        <Navbar size={Cart.length} setShowCart={setShowCart}  />
        <Routes>
          <Route path='/' element={<Home />} addToCart={addToCart}/>
          <Route path='/product' element={<Product />} />
          <Route path='/singleproduct/:id' element={<SingleProduct/>} />
        {
          showCart ?
          <Route path='/cart' element={<Cart/>} /> :
          <Route path='/' element={<Home />} />
        }

        </Routes>
      </Router>
  ); 
}

export default App;
