'use client';
import React, { useState } from 'react'
import type { RootState } from '../app/GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSubmited } from '../app/GlobalRedux/Features/booking/bookingSlice';
import { blur2 } from '../app/GlobalRedux/Features/booking/bookingSlice';
import { setMenu } from '@/app/GlobalRedux/Features/appointments/appointmentsSlice';

const Box = () => {
    const submited = useSelector((state: RootState) => state.booking.isSubmited)
    const dispatch = useDispatch()
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ age, setAge ] = useState('');
    const [ email, setEmail ] = useState('');

    const enableBodyScroll = () => {
      document.body.style.overflow = 'auto';
      
    };

    const handleHover = () => {
      setIsHovered(!isHovered);
    }
    const [isHovered, setIsHovered] = useState(false);

    const inputs = useSelector((state: RootState) => state.booking.inputs)
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(blur2(0))
      enableBodyScroll()
      dispatch(setIsSubmited())

      dispatch(setMenu(
        inputs.map((input) => ({
          salon: input.salon,
          date: input.date,
          time: input.time
        }))
      ));
      
      setFirstName('')
      setLastName('')
      setNumber('')
      setAge('')
      setEmail('')
      
    };

  return (
    <div className=''>
        {submited && <div className='z-50 overflow-hidden fixed h-[480px] max-sm:h-[610px] chang:w-[720px] max-chang:w-full rounded-t-[70px] rounded-b-[30px] bg-[#222222] border-[6px] border-[#444444] hover:border-blue-600 calc'>
        <div className='h-16 bg-[#333333] flex items-center justify-center'> <h1 className='text-3xl text-[silver] font-[1000]'>Personal Information</h1> </div>
        <div className='h-full max-sm:overflow-y-auto overflow-y-auto overflow-x-hidden'>
        <form onSubmit={handleSubmit} className=' grid grid-cols-2 max-sm:grid-cols-1 mt-4 mx-7 gap-x-5 gap-y-10'>

        <div className='flex flex-col gap-y-2'>
      <label className='text-2xl text-[silver]  font-bold' >First Name <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
        <input type='text' placeholder='Enter your first name' className='bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
       required onChange={(e) => setFirstName(e.target.value)} value={firstName} /> 
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className='text-2xl text-[silver]  font-bold' >Last Name <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <input type='text' placeholder='Enter your last name' className='bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
       required onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </div>    

      <div className='flex flex-col gap-y-2'>
      <label className='text-2xl text-[silver]  font-bold' >Phone Number <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <input type='number' min='0' placeholder='+(11)-111-111' className='bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
       required onChange={(e) => setNumber(e.target.value)} value={number} />
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className='text-2xl text-[silver]  font-bold' >Age <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <input type='number' min='18' max='81' placeholder='18' className='bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
       required onChange={(e) => setAge(e.target.value)} value={age} />
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className='text-2xl text-[silver]  font-bold' >Email <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <input type='email' placeholder='your@email.com' className='bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
       required onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className='text-transparent max-sm:hidden text-2xl font-bold text-transparent' >s</label>
      <div className='relative max-sm:mb-20'>
      <div className={`text-2xl w-full font-[1000] z-10 text-white absolute  flex justify-center h-14 items-center ${isHovered ? 'text-[#c1c1c1] ' : 'text-white'}`}>Book Now</div>
      <div className={`rounded-lg w-full h-14 absolute bg-blue-600 ${isHovered ? 'bg-blue-800' : 'bg-blue-600'}`}/>
      <input onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()} type='submit' value='' className='w-full cursor-pointer relative z-20 mr-16 h-14 pl-5 rounded-lg text-lg' />
      </div>
      </div>

        </form>
        </div>
      

        </div> }
        {submited && <h1 className='fixed font-[1000] text-3xl calc2 sm:hidden z-[100]'>Scroll Down</h1>}
    </div>
  )
}

export default Box