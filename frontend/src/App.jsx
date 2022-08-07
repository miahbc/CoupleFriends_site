import { useState, useEffect} from 'react'

import './App.css'

import AppNav from './components/AppNav'
import Home from './pages/HomePage'
import Dates from './pages/DatesPage'
import Join from './pages/JoinPage'
import View_Other_Couples from './pages/View_Other_Couples_Page'


import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'
// 
// import axios from 'axios'

function App() {

  
  return (
    
    <div className="App">
      
      <Router> 
      <AppNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/join' element={<Join />} />
          <Route path='/view_other_couples' element={<View_Other_Couples />} />
          <Route path='/dates' element={<Dates />} />

        </Routes>
      </Router>   
      
  
    </div>
  )
}

export default App