import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { LuPackage } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div >
            <ul className={`sidebar  fixed text-lg font-semibold  space-y-2  bg-[#F4F4F4] text-black w-16 md:w-64 h-screen !z-0  top-[65px] md:top-[81px] left-0 `}>
                <Link to={'/'} className={`${location.pathname =='/' ? 'bg-[#FFF8B7]':'' } p-4 flex justify-between`}>
                    <div className='flex items-center justify-center gap-0 md:gap-3'>
                        <div className='flex items-center ml-1 md:ml-0'> <IoHomeOutline className='text-xl  md:text-base' /></div>
                        <div className='mt-[2px] hidden md:block'>Home</div>
                    </div>
                    <div className=' hidden md:flex items-center mt-[3px]'>
                        <FaCaretRight />
                    </div>
                </Link>
                <Link to={'/category'} className={`${location.pathname =='/category' ? 'bg-[#FFF8B7]':'' } p-4 flex justify-between`}>
                    <div className='flex items-center justify-center gap-0 md:gap-3'>
                        <div className='flex items-center ml-1 md:ml-0'> <BiCategory className='text-xl  md:text-base' /></div>
                        <div className='mt-[2px] hidden md:block'>Category</div>
                    </div>
                    <div className=' hidden md:flex items-center mt-[3px]'>
                        <FaCaretRight />
                    </div>
                </Link>
                <Link to={'/products'} className={`${location.pathname =='/products' ? 'bg-[#FFF8B7]':'' } p-4 flex justify-between`}>
                    <div className='flex items-center justify-center gap-0 md:gap-3'>
                        <div className='flex items-center ml-1 md:ml-0'> <LuPackage className='text-xl  md:text-base' /></div>
                        <div className='mt-[2px] hidden md:block'>Products</div>
                    </div>
                    <div className=' hidden md:flex items-center mt-[3px]'>
                        <FaCaretRight />
                    </div>
                </Link>

            </ul>
        </div>
    );
};
