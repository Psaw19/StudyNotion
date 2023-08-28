import React from 'react'
import './assets/global.css'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from './components/common/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import VerifyEmail from './pages/VerifyEmail'
import PrivateRoute from './components/core/Auth/PrivateRoute'
import OpenRoute from './components/core/Auth/OpenRoute'
import Error from './pages/Error'
import MyProfile from './components/core/Dashboard/MyProfile'
import Dashboard from './pages/Dashboard'
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses'
import Settings from './components/core/Dashboard/Settings/Settings'
import Cart from './components/core/Dashboard/Cart'
import ForgotPassword from './pages/ForgotPassword'
import UpdatePassword from './pages/UpdatePassword'

const App = () => {
  return (
    <div className='flex flex-col w-screen h-screen overflow-x-hidden bg-richblack-900'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/login'
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          } />

        <Route path='/signup'
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          } />

        <Route path='/verify-email'
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          } />

        <Route
          path='/reset-password-token'
          element={<ForgotPassword />}
        />
        <Route
          path='/update-password/:id'
          element={<UpdatePassword />}
        />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path='/dashboard/my-profile' element={<MyProfile />} />
          <Route path='/dashboard/enrolled-courses' element={<EnrolledCourses />} />
          <Route path='/dashboard/cart' element={<Cart />} />
          <Route path='/dashboard/settings' element={<Settings />} />
        </Route>



        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App