import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'

const App = () => {
  return (
    <>
     <BrowserRouter>
 <Routes>

  <Route path='/' element={<Home/>}  />
  <Route path= '/cart' element={<Cart/>}  />
 </Routes>
 
 
 </BrowserRouter>
    
    </>
  )
}

export default App