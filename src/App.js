import React, { Suspense } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const Home = React.lazy(() => import('./components/Form'))
const Teacher = React.lazy(() => import('./pages/Teacher'))
const Deneme = React.lazy(() => import('./pages/Deneme'))
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))

const App = () => {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route exact path="*" name="Home Page" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/teacher" name="Teacher Page" element={<Teacher />} />
          <Route exact path="/deneme" name="Deneme Page" element={<Deneme />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App