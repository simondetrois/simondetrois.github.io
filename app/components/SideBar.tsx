import { useState, type Dispatch, type SetStateAction } from "react";
import { Menu, Search, X } from "lucide-react";
import * as fs from 'fs';

interface SideBarProps  {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const SideBar = ({sidebarOpen, setSidebarOpen}:SideBarProps) => {
  const dir = fs.readdirSync("../generated", {withFileTypes: true, recursive: true})
  const dirs = dir.filter(element => element.isDirectory())
  const files = dir.filter(element => element.isFile())
  const dirMap = new Map<string, fs.Dirent[]>()
  dirs.forEach(dir => dirMap.set(dir.name, []))
  files.forEach(file => dirMap.set(file.parentPath, [...dirMap.get(file.parentPath)!,file]))

  return (
    <aside
    className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 transform transition-transform lg:translate-x-0 ${
      sidebarOpen ? "translate-x-0" : "-translate-x-64"
    } lg:relative lg:flex lg:flex-col lg:w-64`}
  >
    <button
      className="lg:hidden text-white mb-4"
      onClick={() => setSidebarOpen(false)}
    >
      <X size={24} />
    </button>
    <h2 className="text-xl font-semibold">Navigation</h2>
    <nav className="mt-4 space-y-2">
      <a href="#" className="block p-2 rounded hover:bg-gray-700">
        Overview
      </a>
      <a href="#" className="block p-2 rounded hover:bg-gray-700">
        Some Article
      </a>
      <a href="#" className="block p-2 rounded hover:bg-gray-700">
        Other Article
      </a>
    </nav>
  </aside>
  )
}

export default SideBar
