import React, { useState } from "react";
import LogoStart from '../../assets/logoStart.svg'
import LogoEnd from '../../assets/logoEnd.svg'
import { CgProfile } from "react-icons/cg";
import LogoutModel from "../modal/logoutModel";
export const Navbar = ()=> {
    const [isLogoOutPop, setIsLogoOutPop] = useState(false)
    const handleCloseModal = () => {
        setIsLogoOutPop(false);
    };

    return (
        <div className="flex justify-between h-16 md:h-20 items-center w-full bg-[#662671] py-5 pl-5 fixed ">
            <div className="flex gap-2 items-center">
                <div>
                    <img src={LogoStart} alt="logo" className="w-6 md:w-7"></img>
                </div>
                <div className="flex justify-center  items-center">
                    <img src={LogoEnd} alt="digitalflake" className="w-28 md:w-36"></img>
                </div>
            </div>
            <div className="relative">
                <button onClick={() => setIsLogoOutPop(!isLogoOutPop)} className="text-white mr-3 md:mr-6">
                    <CgProfile className=" text-[26px] md:text-4xl" />
                </button>

               {isLogoOutPop?<LogoutModel onClose={handleCloseModal}/>:''}
            </div>

        </div>
    );
};


