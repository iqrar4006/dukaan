import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import Navbar from './Navbar';
import Dashboard_data from './Dashboard_data';


const Dashboard = () => {
    
  const {navbarShow,setNavbarShow}= useContext(UserContext)
  // console.log('navbarShow',navbarShow)
  const hiddenNavbar='hidden lg:block w-[50%] lg:w-1/4 h-screen absolute lg:static bg-[#1e2638] rounded  z-30 '
  const showNavbar='lg:block w-[50%] lg:w-1/4 h-screen absolute lg:static bg-[#1e2638] rounded  z-30 '
  return (
    <>
    <div className="w-full h-screen flex ">
        <div className={navbarShow?showNavbar:hiddenNavbar}>
            <Navbar />
        </div>
        <div className='w-full h-screen relative lg:w-3/4 z-20 '>
            <Dashboard_data />
        </div>


    </div>

    </>
  )
}

export default Dashboard
