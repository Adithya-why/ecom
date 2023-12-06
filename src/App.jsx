import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './common/NavBar'
import Home from './home/Home'
import Shop from './shop/Shop'

function App() {
  
  let [num,setnum] = useState(0);

  let handleclick = ()=>{
    setnum(num+1);
  }

//basically the app is covered with router tag
//routes contain a collection of single route
//only one route loaded at a time
//stuff outside routes will show up at all time
//link used to load the page on click

  return (
    <Router>
      <div className='App bg-gray-400'>
        <NavBar num={num}/>

        <Routes>
          
        <Route path='/' element={<Home/>}></Route>

        <Route path='/shop' element={<Shop handleclick={handleclick}/>}></Route>

        </Routes>
      </div>
     </Router>
  )
}

export default App
