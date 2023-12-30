import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "portfolio",
        },
        {
            id: 4,
            link: "experience",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-1 px-4 sm:px-8 text-white fixed ">
            <div>
                <h1 className="text-4xl font-signature  bg-transparent  font-[900]">
                    <span className="text-4xl font-signature  bg-transparent text-[#48f7e8]"> K </span>D
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-100 hover:scale-105 hover:text-[#48f7e8] duration-250 link-underline"
                    >
                        <Link href={link === 'home' ? '/' : link}>{link}</Link>
                    </li>
                ))}
            </ul>

            <Link className="hidden md:flex px-[8px] py-[6px] items-center gap-3 border-[2px] rounded-3xl border-[#9b9b9b] "  to='/login'>
                <span><RxHamburgerMenu />
                </span>   <FaRegCircleUser className="text-2xl" />
            </Link>



            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer  z-10 text-gray-100 md:hidden flex  items-center gap-2"
            >

                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}


            </div>

            {nav && (
                <ul className="flex  flex-col p-4 rounded-lg absolute top-4   right-[62px]    text-gray-100">
                    <li className="flex justify-center w-44 mb-3  " >
                        <div className="w-[3.5rem] ">
                            <Link className="flex px-[6px] py-[4px] items-center gap-2 border-[2px] rounded-3xl border-[#9b9b9b]  " href='/login'>
                                <span className=""><RxHamburgerMenu className="" />
                                </span>   <FaRegCircleUser className="text-xl " />
                            </Link>
                        </div>

                    </li>
                    {links.map(({ id, link }) => (

                        <li
                            key={id}
                            className="px-4 cursor-pointer flex justify-center capitalize py-2 text-2xl w-44 "
                        >
                            <Link onClick={() => setNav(!nav)} href={link} className="">
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


