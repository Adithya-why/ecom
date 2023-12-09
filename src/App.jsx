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
    updateCartno(temp.length);
    updateCart(temp);
    

  }


  //used to keep track of no. of items in cart
  //updates together with cart

  let [cartno,updateCartno] = useState(0);

  //for future cluleless me

  //first whenever the value in the input box of an item changes,
  //that values is stored with the item name using the changeProdnums function, which changes state in Shop componnent
  //now whenever the add to cart button is clicked
  //first, the name and price of the item are sent to shop using the shopChangeCart function
  //that function now gets the item nos of the product using the prodnums state object(which is stored when input is altered)
  //now shopChangeCart calls changeCart functin which changes the cart state in App.jsx top level component

  //essentialy, state cascades with the help of middleman functions adding the required data
  

//basically the app is covered with router tag
//routes contain a collection of single route
//only one route loaded at a time
//stuff outside routes will show up at all time
//link used to load the page on click



  return (
    <Router>
      <div className='App bg-black h-full'>
        <NavBar num={cartno}/>

        <Routes>
          
        <Route path='/' element={<Home/>}></Route>

        <Route path='/shop' element={<Shop changeCart={changeCart}/>}></Route>

        </Routes>
      </div>
     </Router>
  )
}

export default App
