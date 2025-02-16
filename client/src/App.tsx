import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router'
import Home from './routes/home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
