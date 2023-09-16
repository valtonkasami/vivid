"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBars, faRemove } from '@fortawesome/free-solid-svg-icons';

import type { RootState } from '../app/GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { slide } from '../app/GlobalRedux/Features/navbar/navbarSlice'
import { setShow } from '@/app/GlobalRedux/Features/bookingMenu/menuSlice';
import { setBackground } from '@/app/GlobalRedux/Features/bookingMenu/menuSlice';
import { setDefault } from '@/app/GlobalRedux/Features/appointments/appointmentsSlice'; 

const Navbar = () => {
    const dispatch = useDispatch()
    const slideState = useSelector((state: RootState) => state.navbar.slide)
    const blur = useSelector((state: RootState) => state.navbar.blur)
    const blur2 = useSelector((state: RootState) => state.booking.blur2)
    const isNotSubmited = useSelector((state: RootState) => state.booking.isNotSubmited)
    const data = useSelector((state: RootState) => state.appointments.appointments);
    const showMenu = useSelector((state: RootState) => state.menu.showMenu);
    const showIcon = useSelector((state: RootState) => state.menu.showIcon);
    const showCounter = useSelector((state: RootState) => state.appointments.counter)
    const [changeColor, setChangeColor] = useState('')
    const [changeBorder, setChangeBorder] = useState('')

    const disableBodyScroll = () => {
        document.body.style.overflow = 'hidden';
      };
    
      const enableBodyScroll = () => {
        document.body.style.overflow = 'auto';
        
      };

      const handleResize = () => {
        if (isNotSubmited && window.innerWidth > 1023) {
          dispatch(slide(0))
          enableBodyScroll()
        }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

  return (
    <header className=''>
      
        <div className=''>
            <div className={`${blur} ${blur2}`}>
            
        <div className='z-10 flex absolute h-[100px] items-center'>
          
            <div className='relative'>
            <div className='bg-pink-700 h-16 w-[310px] blur-3xl absolute top-[-20px] left-[-20px] max-sm:left-[-100px]'></div>
            <div className='relative ml-20 max-sm:ml-5 text-5xl'>
            <a href='/'><h1 className='curvy hover:text-pink-400'>Vivid</h1></a>
            </div>
            </div>
            </div>

            
        </div>

        {showCounter && <div onMouseEnter={() => {setChangeBorder('border-blue-500'); setChangeColor('text-blue-500')}} onMouseLeave={() => {setChangeBorder(''); setChangeColor('')}} onClick={() => {dispatch(setShow()); dispatch(setBackground(1))}} className={`cursor-pointer h-[22px] w-[22px] rounded-full bg-blue-500 fixed right-14 top-6 z-30 flex items-center justify-center font-[1000] text-white max-lg:right-24 max-sm:right-9 ${blur} ${blur2}`}>{data.length}</div>}
        
        <div className=''>

         {showMenu && <div className='py-2 px-4 px-4 py-3 flex flex-col items-center z-50 bg-[#333333] border-4 border-[#666666] hover:border-blue-600 rounded-[40px] fixed right-14 max-sm:right-3 top-24 max-lg:top-[85px]'>
          <div className='py-1 px-4 h-full w-fit bg-[#222222] rounded-[50px] flex items-center justify-center text-2xl text-[silver] font-bold '>
          
          {data && data.length > 0 ? (
    
      <div className=''>
        <p className='text-[22px] font-[1000]'>Appointments</p>
      </div>
  ) : (
    <p className='text-[22px] font-[1000]'>No Appointments</p>
  )}

          </div>
        
          {data && data.length > 0 ? (
  <div className=' flex flex-col items-center'>
    {data.map((input, index) => (
      <div className='flex flex-col items-center text-[silver] justify-center bg-[#555555] rounded-[20px] px-5 mt-3 mb-1'>
      <p className='text-[22px] font-[1000]'>{input.salon}</p>
      <p className='text-[22px] font-[1000]'>{input.date}</p>
      <p className='text-[22px] font-[1000]'>{input.time}</p>
      </div>
    ))}
    <button onClick={() => dispatch(setDefault())} className='text-2xl bg-blue-700 font-bold h-8 w-20 mt-2 rounded-full'>Clear</button>
  </div>
) : null}

</div> }
    
        
        <div className={slideState}>
        <div>
            <div className='flex justify-end '><FontAwesomeIcon onClick={() => {dispatch(slide(0)); enableBodyScroll()}} className='cursor-pointer text-[silver] hover:text-blue-500 text-4xl mt-3 mr-5' icon={faRemove}/></div>
            <div className='ml-5 flex flex-col space-y-5 mt-5'>
                <a onClick={() => {dispatch(slide(0)); enableBodyScroll()}} href='#'><h1 className='text-3xl font-[1000] hover:text-blue-500 '>Home</h1></a>
                <a onClick={() => {dispatch(slide(0)); enableBodyScroll()}} href='#about'><h1 className='text-3xl font-[1000] hover:text-blue-500 '>About</h1></a>
                <a onClick={() => {dispatch(slide(0)); enableBodyScroll()}} href='#contact'><h1 className='text-3xl font-[1000] hover:text-blue-500 '>Contact</h1></a>
                <a onClick={() => {dispatch(slide(0)); enableBodyScroll()}} href='#reviews'><h1 className='text-3xl font-[1000] hover:text-blue-500 '>Reviews</h1></a>
            </div>
        </div>
        </div>

        <div >
        <div className='fixed z-20 right-0 flex h-[100px] items-center pb-[11px] w-fit mr-10 max-lg:mr-20 max-sm:mr-5'>
                <div className={`${blur} ${blur2}`}>
                
                <div className={`${changeBorder} flex max-lg:space-x-4 items-center bg-[#333333] text-[silver] hover:text-[white] px-5 py-[14px] max-lg:py-[5px] border-4 border-solid border-[#666666] hover:border-blue-500 rounded-full`}>
                  
                <button onClick={() => {dispatch(slide(1)); disableBodyScroll()}} className='lg:hidden'><h1 className='mr-[2px] text-[27px] font-[1000] hover:text-blue-500 relative'><FontAwesomeIcon icon={faBars}/></h1></button>
                <button onClick={() => {dispatch(setShow()); dispatch(setBackground(1))}}><h1 className={`${changeColor} mr-[px] text-2xl font-[1000] hover:text-blue-500 relative`}>{showIcon && <FontAwesomeIcon icon={faBookBookmark}/>}{showMenu && <FontAwesomeIcon className='text-blue-500' icon={faBookBookmark}/>}</h1></button>
                </div>
                </div>
            </div>
        </div>

            <div className={`${blur} ${blur2} max-lg:hidden fixed z-20 right-0 flex h-[100px] items-center pb-[11px] w-fit mr-[118px]`}>
                <div className='flex space-x-8 items-center bg-[#333333] text-[silver] hover:text-[white] px-5 py-2 border-4 border-solid border-[#666666] hover:border-blue-500 rounded-full'>
                <a href='#'><h1 className='text-2xl font-[1000] hover:text-blue-500 relative'>Home</h1></a>
                <a href='#about'><h1 className='text-2xl font-[1000] hover:text-blue-500 relative'>About</h1></a>
                <a href='#contact'><h1 className='text-2xl font-[1000] hover:text-blue-500 relative'>Contact</h1></a>
                <a href='#reviews'><h1 className='text-2xl font-[1000] hover:text-blue-500 relative'>Reviews</h1></a>
                </div>
            </div>
        </div>

            </div>
    </header>
  )
}

export default Navbar