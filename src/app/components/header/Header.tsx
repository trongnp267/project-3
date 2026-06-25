"use client"

import Link from "next/link"
import { FaBars } from "react-icons/fa"
import { HeaderMenu } from "./HeaderMenu"
import { useState } from "react"

export const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="bg-[#000071] py-[15px]">
        <div className="contain">
          <div className="flex items-center lg:justify-between">
            <Link href="/" className="text-[#FFFFFF] font-[800] sm:text-[28px] text-[20px] lg:flex-none flex-1">IT.Jobs</Link>
            <HeaderMenu show={show} />
            <div className="flex gap-[5px] text-[#FFFFFF] font-[600] sm:text-[16px] text-[12px]">
              <Link href="#">Đăng Nhập</Link>
              <span>/</span>
              <Link href="#">Đăng Ký</Link>
            </div>
            <button 
              onClick={() => setShow(true)} 
              className="text-white text-[23px] lg:hidden ml-[12px] cursor-pointer"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>
      {show && (
        <div 
          onClick={() => setShow(false)} 
          className="bg-black fixed top-0 left-0 w-[100%] h-[100%] opacity-40 z-[999] cursor-pointer"
        >
        </div>
      )}
    </>
  )
}