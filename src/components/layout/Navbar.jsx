import React from "react";
import  {MenuItems}  from "../../items/MenuItems.jsx";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="w-full absolute top-0 left-0 z-50" >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3  items-center  ">
        {/* Logo (sol başta) */}
        <div className="flex items-center">
          <Link to="/">
          <img
            src="/logo2.gif"
            alt="Logo"
            className="h-[150px] w-[150px] object-contain"
          />
          </Link>
        </div>
        {/* Menü (ortada) */}
        <div className="justify-self-center relative">
          <div className="flex space-x-10 whitespace-nowrap relative pb-6">
            {MenuItems.map((item) => (
               <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative transition font-semibold font-serif text-lg ${
                    isActive
                      ? "text-orange-700"
                      : "text-gray-900 hover:text-orange-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                     {/* Nokta (çizginin üstünde) */}
                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-2 h-2 bg-orange-700 rounded-full transition-all duration-300 ease-in-out" />
                    )}

                     {/* Çizgi (aktif olduğunda kalınlaşır) */}
                    <span
                      className={`absolute left-0 -bottom-[24px] w-full bg-black transition-all duration-300 ease-in-out ${
                        isActive ? "h-[5px]" : "h-[2px]"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />
        </div>
        {/* Download CV button (right) */}
        <div className="justify-self-end">
            <a 
            href="/SENA-AKAT-Resume-English.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 text-gray-200 px-4 py-2 rounded-3xl cursor-pointer">
              View Resume
            </a>
        </div>
      </div>
    </nav>
  );
}
