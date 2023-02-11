import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Edit from './Edit'
import Read from './Read'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/edit' element={<Edit />} />
        </Routes >
      </BrowserRouter>
    </>
  )
}
