import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Home from './pages/home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/dashboard/Dashboard'
import Nopage from './pages/nopage/Nopage'
import MyState from './context/data/myState'
import Login from './pages/registration/Login'
import Signup from './pages/registration/Signup'
import CarDetails from './pages/cardetails/CarDetails'
import Add from './pages/admin/page/Add'
import Update from './pages/admin/page/Update'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllCars from './pages/allcars/AllCars'

function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allcars" element={<AllCars />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cardetails/:id" element={<CarDetails />} />
          <Route path="/add" element={
            <ProtectedRouteForAdmin>
              <Add />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/update" element={
            <ProtectedRouteForAdmin>
              <Update />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<Nopage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App


// user
export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}

// admin
const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'wtgadmin@gmail.com'){
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}