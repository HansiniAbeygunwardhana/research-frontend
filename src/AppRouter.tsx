import React from 'react'
import { Routes ,  Route } from 'react-router-dom'
import Home from './pages/Home'
import Meals from './pages/Meals'
import Login from './pages/Login'
import Account from './pages/Account'
import { AuthContext } from './context/AuthContext'
import HomeWithoutLogin from './pages/HomeWithoutLogin'
import ProtectedRoute from './utils/ProtectedRoute'
import ExtendedMeal from './pages/ExtendedMeal'

const AppRouter:React.FC = () => {

  const { token } = React.useContext(AuthContext)

  return (
    <div>
      <Routes>
        <Route path="/" element={token ? <ProtectedRoute><Home/></ProtectedRoute> : <HomeWithoutLogin/>}/>
        <Route path="/meals" element={<ProtectedRoute><Meals/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>}/>
        <Route path="/extendmeal/:id" element={<ProtectedRoute><ExtendedMeal/></ProtectedRoute>}/>
        <Route path="*" element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  )
}

export default AppRouter