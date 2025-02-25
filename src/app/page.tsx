// page.tsx
"use client";

import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import { useState } from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [originPosition, setOriginPosition] = useState({ x: 0, y: 0 }); // State to hold origin position

  const handleOpenSideBar = (originX: number, originY: number) => { // Update handleOpenSideBar to receive origin
    setOriginPosition({ x: originX, y: originY }); // Set the origin position
    setIsSidebarOpen(true);
  };

  const handleCloseSideBar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="w-full h-full bg-[#efefed]">
      <Header handleOpenSidebar={handleOpenSideBar} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handleCloseSideBar={handleCloseSideBar}
        originX={originPosition.x} // Pass originX to Sidebar
        originY={originPosition.y} // Pass originY to Sidebar
      />
      <div> hello</div>
    </div>
  );
}