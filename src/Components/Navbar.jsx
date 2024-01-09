import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import iqra_pic from '../Image/iqrar_passp.png';
import appearance from '../Image/appearance.png';
import orders from '../Image/orders.png';
import { GoHome } from 'react-icons/go';
import { CiDeliveryTruck } from 'react-icons/ci';
import { CiDiscount1 } from 'react-icons/ci';
import { LiaBorderAllSolid } from 'react-icons/lia';
import { AiTwotoneSound } from 'react-icons/ai';
import { TbBrandGoogleAnalytics } from 'react-icons/tb';
import { MdOutlinePayments } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs';
import { CiWallet } from "react-icons/ci";
import { SlPeople } from 'react-icons/sl';
import { FaAngleDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import UserContext from '../context/UserContext';



const Navbar = () => {

    const {navbarShow,setNavbarShow}=useContext(UserContext)

    const handlCrossClick = () => {
        setNavbarShow(false);
    };

    return (
        <div className='w-full h-screen p-4 text-[#ffffff] flex flex-col'>
            <div className='flex items-center h-[15%] '>
                <div className='w-[30%]'>
                    <img className='w-12 h-12 rounded-full cursor-pointer' src={iqra_pic} alt='iqrar' />
                </div>
                <div className='w-[60%] flex flex-col'>
                    <div className='font-bold text-2xl'>Iqrar</div>
                    <div className='underline font-ligh text-sm cursor-pointer'>Visit store</div>
                </div>
                <div className='w-10%  flex justify-between items-center'>
                    <div className='cursor-pointer mr-1'> 
                    <FaAngleDown />
                    </div>
                    <div className='text-slate-50 text-4xl lg:hidden'>
                        <RxCross1 onClick={handlCrossClick} className='cursor-pointer' />
                    </div>

                </div>
            </div>

            <div className='flex flex-grow flex-col'>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2 '>
                        <div className='mr-4'>
                            <GoHome />
                        </div>
                        <div>
                            Home
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4 '>
                            <img className='w-3 h-3' src={orders} alt="orders" />
                        </div>
                        <div>
                            Orders
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4'>
                            <LiaBorderAllSolid />
                        </div>
                        <div>
                            Products
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4'>
                            <CiDeliveryTruck />
                        </div>
                        <div>
                            Delivery
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4'>
                            <AiTwotoneSound />
                        </div>
                        <div>
                            Marketing
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-3 py-2'>
                        <div className='mr-4'>
                            <TbBrandGoogleAnalytics />
                        </div>
                        <div>
                            Analytics
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/" className="font-mono text-sm font-bold text-[#ffffff] " >

                    <div className='flex items-center px-3 py-2 bg-[#4d546c] rounded'>
                        <div className='mr-4'>
                            <MdOutlinePayments />
                        </div>
                        <div>
                            Payouts
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4'>
                            <CiDiscount1 />
                        </div>
                        <div>
                            Discounts
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm	font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4'>
                            <SlPeople />
                        </div>
                        <div>
                            Audience
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4'>
                            <img className='w-3 h-3' src={appearance} alt="orders" />
                        </div>
                        <div>
                            Appearence
                        </div>
                    </div>
                </NavLink>
                <NavLink to="#" className="text-sm font-light text-[#ffffff] " >

                    <div className='flex items-center px-4 py-2'>
                        <div className='mr-4'>
                            <BsLightningCharge />
                        </div>
                        <div>
                            Plugins
                        </div>
                    </div>
                </NavLink>
            </div>

            <div className='h-[15%]'>
                <div className='flex items-center px-3 py-2 bg-[#4d546c] rounded'>
                    <div className='p-1  bg-[#5e6578] mr-4'>
                        <CiWallet size={25} />
                    </div>
                    <div className='flex flex-col'>
                        <div>
                            Available credits
                        </div>
                        <div>
                            222.10
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;

