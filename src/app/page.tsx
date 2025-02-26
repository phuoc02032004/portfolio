"use client";

import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading/Loading";
import Card from "@/components/Cards/Card";

export default function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [originPosition, setOriginPosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
                setShowLoading(false);
            }, 800); 
        }, 3000);
    }, []);

    const handleOpenSideBar = (originX: number, originY: number) => {
        setOriginPosition({ x: originX, y: originY });
        setIsSidebarOpen(true);
    };

    const handleCloseSideBar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="w-full h-full bg-[#efefed]">
            {showLoading && <Loading isLoading={isLoading} />} 
            <Header handleOpenSidebar={handleOpenSideBar} />
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                handleCloseSideBar={handleCloseSideBar}
                originX={originPosition.x}
                originY={originPosition.y}
            />
            <div> hello day</div>
            <Card/>
        </div>
    );
}