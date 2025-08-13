import React from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout({children }) {
  return (
    <div className=" flex flex-col min-h-screen bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/1234.jpg')" }}>
      <Navbar className="pt-[150px]" />
      <main className=" flex-grow pt-[110px] px-4">
        {children}
      </main>
      <Footer/>
    </div>
  )
}


