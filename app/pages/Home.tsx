import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import NavBar from "~/components/NavBar";
import SideBar from "~/components/SideBar";

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
      <NavBar setSidebarOpen={setSidebarOpen} title={"Overview"}/>
       <main className="flex-1 p-4 bg-gray-100"></main>
      </div>
    </div>
  );
}

export default Home
