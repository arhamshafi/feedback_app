import React from 'react'
import Login_page from './Login_page'
import { Routes, Route } from 'react-router-dom'
import Socail_app from './socail_app'

function App() {
  return (
    <div className='w-full min-h-[100vh]'>
      <Routes>
        <Route path="/"
          element={<div className='w-full h-[100vh] flex justify-center items-center'><Login_page /></div>}
        />
        <Route path="/socail" element={<Socail_app />} />
      </Routes>
    </div>
  )
}

export default App
