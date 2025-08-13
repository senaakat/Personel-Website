import React from "react";
import  {MenuItems}  from "../../items/MenuItems.jsx";

export default function Navbar() {

  return (
    <nav className="w-full absolute top-0 left-0 z-50" >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3  items-center ">
        {/* Logo (sol başta) */}
        <div className="flex items-center">
          <img
            src="/logo2.gif"
            alt="Logo"
            className="h-[150px] w-[150px] object-contain"
          />
        </div>
        {/* Menü (ortada) */}
        <div className="justify-self-center">
          <div className="flex space-x-10 whitespace-nowrap">
            {MenuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-orange-700 transition font-semibold text-lg"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="justify-self-end" />
      </div>
    </nav>
  );
}
