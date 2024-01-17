import { Link, Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/navbar"
import { Footer } from "../components/footer/footer"
import DigitalFlakeBackground from '../assets/digitalFlakeBackground.svg'
export const AuthLayout = () => {
    const backgroundStyle = {
        backgroundImage: `url(${DigitalFlakeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
    };
    return (
        <div className="bg-[#DDE0FF] ">
            <div style={backgroundStyle}>
                <div className="flex min-h-screen  ">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}