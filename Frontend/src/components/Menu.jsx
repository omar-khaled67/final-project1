import React, { useState } from 'react'


import {

  FaBox, FaCalendarAlt,
  FaChartBar,
  FaClipboard, FaClipboardList,
  FaCog, FaElementor,
  FaHdd, FaHome,
  FaUser, FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom"

function Menu() {
  const [activeLink, setactiveLink] = useState("/admin");

  const handleactiveLink = (link) => {
    setactiveLink(link)

  }
  return (

    <div className=' p-[20px] w-[350px] bg-gray-100 shadow-lg'>

      <ul className='flex flex-col items-start justify-start mt-[20px] pl-[20px]'>
        <Link to="/admin" onClick={() => handleactiveLink("/admin")}>
          <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold
          ${activeLink === "/admin" ? "bg-red-300 p-[10px] text-white" : ""} `}>

            <FaHome className={`mr-[15px] ${activeLink === "/admin" ? "text-red-50" : "text-red-500"}`} />Home</li>
        </Link>

        <Link> <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaUser className='mr-[15px] text-red-500' />Profile</li>
        </Link>

        <hr className='w-full border-gray-300 my-[20px]' />
        <Link to="/admin/doners" onClick={() => handleactiveLink("/admin/doners")}>
          <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold
          ${activeLink === "/admin/doners" ? "bg-red-300 p-[10px] text-white" : ""} `}>

            <FaBox className={`mr-[15px] ${activeLink === "/admin/doners" ? "text-red-50" : "text-red-500"}`} />Doners</li>
        </Link>

        <Link to="/admin/prospects" onClick={() => handleactiveLink("/admin/prospects")}>
          <li className={`flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold
          ${activeLink === "/admin/prospects" ? "bg-red-300 p-[10px] text-white" : ""} `}>

            <FaUsers className={`mr-[15px] ${activeLink === "/admin/prospects" ? "text-red-50" : "text-red-500"}`} />Prospects</li>
        </Link>

        <Link> <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaHome className='mr-[15px] text-red-500' />Orders</li>
        </Link>
        <hr className='w-full border-gray-300 my-[20px]' />

        <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaElementor className='mr-[15px] text-red-500' />Elements</li>

        <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaCog className='mr-[15px] text-red-500' />Settings</li>

        <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaHdd className='mr-[15px] text-red-500' />Backups</li>

        <hr className='w-full border-gray-300 my-[20px]' />

        <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaChartBar className='mr-[15px] text-red-500' />Charts</li>

        <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaClipboard className='mr-[15px] text-red-500' />All logs</li>

        <li className='flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 font-semibold'>

          <FaCalendarAlt className='mr-[15px] text-red-500' />Calender</li>







      </ul>

    </div>

  )
}

export default Menu