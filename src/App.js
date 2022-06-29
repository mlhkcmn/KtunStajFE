import React, { Suspense } from 'react'
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

const Home = React.lazy(() => import('./components/Form'))
const Teacher = React.lazy(() => import('./pages/Teacher'))
const School = React.lazy(() => import('./pages/School'))
const Deneme = React.lazy(() => import('./pages/Deneme'))

const App = () => {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route exact path="*" name="Home Page" element={<Home />} />
          <Route exact path="/teacher" name="Teacher Page" element={<Teacher />} />
          <Route exact path="/school" name="School Page" element={<School />} />
          <Route exact path="/deneme" name="Deneme Page" element={<Deneme />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App