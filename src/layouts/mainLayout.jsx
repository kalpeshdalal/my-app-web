import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer/footer"
import { Navbar } from "../components/navbar/navbar"

export const MainLayout = () => {
    return <>
        <div className="flex min-h-screen flex-col items-center justify-between pt-10 px-4 sm:px-8">
            
                <Navbar />
            
            <div className="container-height w-full my-10">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>
}