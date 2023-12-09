import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './common/NavBar'
import Home from './home/Home'
import Shop from './shop/Shop'

function App() {
  
  let [cart,updateCart] = useState([]);

  function changeCart(name,val,price){

    let temp = cart;
    let obj = {
      name,
      val,
      price
    }

    temp.push(obj);
    console.log(temp);
    updateCart(temp);
    

  }

  

//basically the app is covered with router tag
//routes contain a collection of single route
//only one route loaded at a time
//stuff outside routes will show up at all time
//link used to load the page on click



  return (
    <Router>
      <div className='App bg-black h-full'>
        <NavBar num={cart.length}/>

        <Routes>
          
        <Route path='/' element={<Home/>}></Route>

        <Route path='/shop' element={<Shop changeCart={changeCart}/>}></Route>

        </Routes>
      </div>
     </Router>
  )
}

export default App
