import React, { useContext } from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { CiSearch } from 'react-icons/ci';
import { RiMessage2Fill } from "react-icons/ri";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import UserContext from '../context/UserContext';





const Dashboard_header = () => {
    const {navbarShow,setNavbarShow}=useContext(UserContext)
    // console.log('navbarShow',navbarShow)

    const handleHamburgerClick = () => {
        setNavbarShow(true);
    };
    return (
        <>
            <div className=' w-full h-full flex px-4 justify-between items-center py-1 border-b-2'>

                <div className='flex items-center'>
                    <div className='font-bold text-lg pr-5'>
                        Payouts
                    </div>

                    <div className='flex items-center font-thin'>
                        <div className='mr-1'>
                            <AiOutlineQuestionCircle />
                        </div>
                        <div>
                            How it works
                        </div>
                    </div>
                </div>

                <div className='relative flex items-center font-thin xs:hidden'>
                    <CiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
                    <input
                        type='text'
                        placeholder='Search features,etc.'
                        className='pl-8 outline-none border-slate-300 bg-gray-200 rounded-md text-base font-serif px-1 py-1 '
                    />
                </div>

                <div className='flex'>
                    <div className='w-8 h-8 rounded-full cursor-pointer bg-gray-200	 flex justify-center items-center mr-1'>
                        <RiMessage2Fill />
                    </div>
                    <div className='w-8 h-8 rounded-full cursor-pointer bg-gray-200	 flex justify-center items-center mr-1'>
                        <TbTriangleInvertedFilled />
                    </div>
                    <div>
                    <GiHamburgerMenu className='text-3xl lg:hidden flex justify-center items-center cursor-pointer' onClick={handleHamburgerClick}/>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard_header
