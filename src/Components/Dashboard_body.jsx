import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import Dashboard_amount from './Dashboard_amount';
import Dashboard_pay_ref from './Dashboard_pay_ref';
import Dashboard_transaction from './Dashboard_transaction';


const Dashboard_body = () => {
    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <div className='w-full h-[5%] flex justify-between items-center'>
                    <div className='font-medium	text-lg'>
                        Overview
                    </div>
                    <div className='flex items-center  border-1 px-2 rounded bg-white cursor-pointer'>
                        <div className='pr-1'>
                            This Month
                        </div>
                        <div className=''>
                            <FaAngleDown />
                        </div>
                    </div>
                </div>

                <div className='w-full h-[25%] pt-1'>
                <Dashboard_amount />
                </div>

                <div className='w-full h-[15%] pt-1'>
                    <Dashboard_pay_ref />
                </div>

                <div className='w-full  mt-1 bg-[#ffffff] rounded-lg flex-grow'>
                    <Dashboard_transaction />
                </div>

            </div>

        </>
    )
}

export default Dashboard_body
