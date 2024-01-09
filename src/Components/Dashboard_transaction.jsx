import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { MdOutlineFileDownload } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import Transaction_table from './Transaction_table';




const Dashboard_transaction = () => {
    return (
        <>
            <div className='w-full h-full px-2 py-1 '>
                <div className='w-full h-[12%] flex justify-between'>

                    <div className='relative flex items-center font-thin'>
                        <CiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500' />
                        <input
                            type='text'
                            placeholder='Order Id or transaction Id'
                            className='pl-8 outline-none border border-gray-200 rounded-md px-2 py-2 text-xs  '
                        />
                    </div>

                    <div className='flex  items-center'>

                        <div className='flex justify-center items-center px-2 py-1 cursor-pointer text-md border border-gray-200 rounded-md mr-2'>
                            <div className='pr-1'>
                                Sort
                            </div>
                            <div className=''>
                                <TbArrowsSort />
                            </div>
                        </div>

                        <div className='flex justify-center items-center px-2 py-1 cursor-pointer text-2xl border border-gray-200 rounded-md'>
                            <MdOutlineFileDownload />

                        </div>

                    </div>

                </div>
                <div className='w-full h-[88%] pt-1'>
                    <Transaction_table />
                </div>
            </div>
        </>
    )
}

export default Dashboard_transaction
