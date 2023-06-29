import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"

const App = () => {
  return (
    <div className='text-white bg-richblack-900'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App