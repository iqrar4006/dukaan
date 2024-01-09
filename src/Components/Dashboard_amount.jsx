import React, { useState } from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa6";



const Dashboard_amount = () => {

    return (
        <>
            <div className='w-full h-full flex flex-col sm:flex-row'>
                <div className=' w-full sm:w-2/6 h-2/6 sm:h-full mr-2 bg-[#2c7bb8] text-[#ffffff] rounded-md'>

                    <div className=' flex xs:flex-row sm:flex-col  w-full h-[80%] p-4 rounded-md '>
                        <div className='flex flex-row justify-center 2xl:justify-start items-center font-thin sm:font-normal w-full h-[40%]'>
                            <div className='pr-1'>
                                Next Payout
                            </div>
                            <div className='hidden md:block '>
                                <AiOutlineQuestionCircle />
                            </div>
                        </div>

                        <div className='flex justify-between xs:flex-row sm:flex-col 2xl:flex-row items-center w-full h-[60%]'>
                            <div className='font-bold sm:text-2xl md:text-3xl'>
                                ₹2,312.23
                            </div>
                            <div className='flex items-center underline font-extralight sm:font-medium cursor-pointer'>
                                <div className='pr-1'>
                                    23 orders
                                </div>
                                <div className=''>
                                    <FaAngleRight />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='w-full h-[20%] bg-[#1e557e] hidden md:flex justify-between items-center px-1 md:px-2 font-thin text-xs rounded'>
                        <div>
                            Next payout date:
                        </div>
                        <div>
                            Today, 04:00PM
                        </div>
                    </div>

                </div>


                <div className='w-full sm:w-2/6 h-2/6 sm:h-full mr-2'>

                    <div className=' flex xs:flex-row sm:flex-col   w-full h-[80%] p-4 rounded-md bg-[#ffffff]'>
                        <div className='flex justify-center 2xl:justify-start items-center font-thin sm:font-normal w-full h-[40%]'>
                            <div className='pr-1'>
                                Amount Pending
                            </div>
                            <div className='hidden md:block'>
                                <AiOutlineQuestionCircle />
                            </div>
                        </div>

                        <div className='flex justify-between items-center xs:flex-row sm:flex-col 2xl:flex-row w-full h-[60%]'>
                            <div className='font-bold sm:text-2xl md:text-3xl'>
                                ₹92,312.20
                            </div>
                            <div className='flex items-center underline font-extralight sm:font-medium text-[#2c7bb8] cursor-pointer'>
                                <div className='pr-1'>
                                    13 orders
                                </div>
                                <div className=''>
                                    <FaAngleRight />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='w-full sm:w-2/6 h-2/6 sm:h-full '>

                    <div className=' flex xs:flex-row sm:flex-col  w-full h-[80%] p-4 rounded-md bg-[#ffffff]'>
                        <div className='flex justify-center 2xl:justify-start items-center font-thin sm:font-normal w-full h-[40%]'>
                            <div className='pr-1'>
                                Amount Processed
                            </div>
                            <div className='hidden md:block'>
                                <AiOutlineQuestionCircle />
                            </div>
                        </div>

                        <div className='flex  justify-center sm:justify-start items-center flex-col 2xl:flex-row w-full h-[60%]'>
                            <div className='font-bold sm:text-2xl md:text-3xl '>
                                ₹23,92,312.19
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Dashboard_amount
