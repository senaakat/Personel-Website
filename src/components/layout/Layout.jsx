import React from 'react'
import Navbar from './Navbar.jsx';

export default function Layout({children }) {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/1234.jpg')" }}>
      <Navbar />
      <div >
        {children}
      </div>
    </div>
  )
}


