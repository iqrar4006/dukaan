import React from 'react'

const Dashboard_pay_ref = () => {
  return (
    <>
        <div className='w-full h-full'>
            <div className='font-bold text-lg h-1/2 items-center'>
                Transactions | This Month
            </div>
            <div className='flex h-1/2 items-center' >
                <div className='bg-gray-200	 py-1 px-6 rounded-2xl mr-2  cursor-pointer'>
                    Payouts (22)
                </div>
                <div className='bg-[#2c7bb8] text-[#ffffff] py-1 px-6 rounded-2xl cursor-pointer'>
                    Refunds (6)
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Dashboard_pay_ref
