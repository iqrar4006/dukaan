import React from 'react'
import Dashboard_body from './Dashboard_body'
import Dashboard_header from './Dashboard_header'

const Dashboard_data = () => {
    return (
        <>
            <div className='w-full h-screen'>
                <div className='w-full h-[8%] '>
                    <Dashboard_header />
                </div>
                <div className='p-3 w-full h-[92%] bg-slate-100'>
                    <Dashboard_body />
                </div>

            </div>
        </>
    )
}

export default Dashboard_data
