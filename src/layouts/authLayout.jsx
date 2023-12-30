import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/navbar"
import { Footer } from "../components/footer/footer"

export const AuthLayout = () => {
    return <>
        <div className="absolute top-0 pt-2 sm:p-4">
            <h1 className="text-4xl font-signature ml-2 bg-transparent  font-[900]">
                <span className="text-4xl font-signature ml-2 bg-transparent text-[#48f7e8]"> K </span>D
            </h1>
        </div>
        <div className="flex min-h-screen  items-center justify-center p-4 sm:p-14">
            <Outlet />
        </div>
        <div className="flex w-full flex-col mt-2 absolute bottom-0 p-1  ">
            <span class="text-[12px] text-gray-500 text-center dark:text-gray-400 ">© 2023 <a href="/" className="hover:underline "><span className="text-[#48f7e8] ml-1 text-[12px]">K </span><span className="text-gray-200 text-[12px]">D™</span></a>
            </span>
            <div className="text-gray-500  text-center text-[12px]">All Rights Reserved.</div>
        </div>
    </>
}