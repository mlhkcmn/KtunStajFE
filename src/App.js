import React, { Suspense } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const Home = React.lazy(() => import('./pages/Home'))
const Teacher = React.lazy(() => import('./pages/Teacher'))
const School = React.lazy(() => import('./pages/School'))
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))

const App = () => {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/home" name="Home Page" element={<Home />}  />
          <Route exact path="/teacher" name="Teacher Page" element={<Teacher />} />
          <Route exact path="/school" name="School Page" element={<School />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App