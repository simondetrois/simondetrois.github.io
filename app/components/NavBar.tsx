import React, { type Dispatch, type SetStateAction } from 'react'
import { Menu, Search, X } from "lucide-react";

interface NavBarrProps  {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  title: string
}

const NavBar = ({ setSidebarOpen, title}:NavBarrProps ) => {

  return (
    <header className="flex items-center justify-between bg-gray-900 text-white p-4 shadow-md">
    <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
      <Menu size={24} color='white' />
    </button>
    <h1 className="text-lg font-semibold">{title}</h1>
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 rounded bg-gray-700 text-white focus:outline-none"
      />
      <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    </div>
  </header>
  )
}

export default NavBar
