import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/navbar"
import { Sidebar } from "../components/sidebar/sidebar";
import { useState } from "react";

export const MainLayout = () => {
    return <>
        <div className="flex min-h-screen flex-col   ">
            <Navbar />
            <Sidebar />
            <div className="text-black ml-16 md:ml-64 mt-16 md:mt-20  ">
                <Outlet />
            </div>
        </div>
    </>
}