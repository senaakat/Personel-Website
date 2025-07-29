import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuItems from '../items/MenuItems.jsx';


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const goToPage = (index) => {
    const targetId = MenuItems[index].id;
    setCurrentIndex(index);
    navigate(`/${targetId === 'home' ? '' : targetId}`);
  };

  return (
    <div className="h-screen overflow-hidden" >
      <button
        onClick={() => goToPage(Math.max(0, currentIndex - 1))}
        className="absolute left-10 top-1/2 -translate-y-1/2 z-20 text-9xl text-[rgb(254,146,118,1)] hover:text-gray-700 transition"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => goToPage(Math.min(MenuItems.length - 1, currentIndex + 1))}
        className="absolute right-10 top-1/2 -translate-y-1/2 z-20 text-9xl text-[rgb(254,146,118,1)] hover:text-gray-700 transition"
      >
        <IoIosArrowForward />
      </button>

       {/* Sosyal medya ikonları (sola ortalanmış, dikey) */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6 z-10 ml-[27%]">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/sena_akat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-700 hover:text-pink-900 text-3xl transition duration-300"
        >
          <FaInstagram />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/senaakat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-white text-3xl transition duration-300"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sena-akat-9baaa0226"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:text-blue-950 text-3xl transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="flex flex-col mt-0 items-center justify-center h-full text-center ">
       <div className="relative w-[400px] h-[400px] mt-10">
        {/* Arka plandaki gif */}
        <img
          src="/cv.gif"
          alt="Loading..."
          className="w-full h-full object-contain"
        />

        {/* Görünmez buton */}
        <a
          href="/SENA-AKAT-Resume-English.pdf" // tıklanınca açılacak veya indirilecek CV dosyan
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-[10%] left-[75%] w-[80px] h-[80px] opacity-0 cursor-pointer"
        >
        </a>
      </div>

         <h1 className="text-7xl font-bold  animate-fade-in  ">
          SENA AKAT
        </h1>

        <h2 className="text-2xl font-mono  overflow-hidden whitespace-nowrap border-r-4 border-black animate-typing max-w-fit">
          I'm Full-Stack Developer
        </h2>
      </div>
    </div>
  )
}


