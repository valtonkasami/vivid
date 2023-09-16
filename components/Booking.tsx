'use client';
import React, { useState } from 'react'
import type { RootState } from '../app/GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { blur2 } from '../app/GlobalRedux/Features/booking/bookingSlice';
import { setIsSubmited } from '../app/GlobalRedux/Features/booking/bookingSlice';
import { setInputs } from '../app/GlobalRedux/Features/booking/bookingSlice';
import { setWarning } from '../app/GlobalRedux/Features/booking/bookingSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const Booking = () => {
  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  

  const dispatch = useDispatch()
  const [ salon, setSalon ] = useState('');
  const [ hairstylist, setHairstylist ] = useState('');
  const [ hairstyle, setHairstyle ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const submitType = useSelector((state: RootState) => state.appointments.appointments)
  const warning = useSelector((state: RootState) => state.booking.warning)
  const handleHover = () => {
    setIsHovered(!isHovered);
  }
  const [isHovered, setIsHovered] = useState(false);
  const handleSubmit = (e) => {
    if (submitType.length < 3) {
    e.preventDefault();
    dispatch(blur2(1))
    disableBodyScroll()
    dispatch(setIsSubmited())
      
    dispatch(setInputs({
      salon: salon,
      date: date,
      time: time
    }))

    setSalon('')
    setHairstylist('')
    setHairstyle('')
    setDate('')
    setTime('')
  } else {
    e.preventDefault();
    dispatch(setWarning())

    setSalon('')
    setHairstylist('')
    setHairstyle('')
    setDate('')
    setTime('')
  }
  };

  const blurr = useSelector((state: RootState) => state.booking.blur2) 

  return (
    <div id='booking' className='z-10 flex justify-center relative mx-[180px] max-ipad:mx-[80px] max-lg:mx-[20px] max-sm:mx-[20px]'>

      
      
      <div className='bg-blue-800 absolute h-full w-full blur-lg'></div>
      
      <div className='flex flex-col justify-center bg-[#222222] rounded-lg border-4 hover:border-blue-600 border-[#444444] relative py-10 w-full'>
      
      <div className=''>
        <h1 className='text-3xl z-10 left-0 top-[38px] font-[1000] ml-16 mb-6 max-lg:ml-7'>Book Appointment</h1>
        
        {warning && <div className='bg-red-900 h-9 w-[290px] mb-6 ml-16 max-sm:ml-[26px] rounded-full flex items-center justify-between'><h1 className='ml-2 font-bold'>No more than 3 Appointments!</h1> <button onClick={() => dispatch(setWarning())} className='h-7 w-7 mr-1 flex items-center justify-center bg-[#222222] rounded-full'><FontAwesomeIcon className=' text-xl' icon={faRemove}/></button></div>}
      
      </div>

      <form onSubmit={handleSubmit} className='lg:mb grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-y-5 gap-x-5 font-medium text-[silver] mx-16 max-lg:mx-7'>
      
      

      <div className='flex flex-col gap-y-2'>
        
      <label className='text-2xl text-[silver] font-bold' >Salon <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <select className=' bg-[#222222] border-2 pr-4 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
      name="salon" id="salon" required onChange={(e) => setSalon(e.target.value)} value={salon}>

        <option value="" disabled selected>Select the Salon</option>
        <option value="New York">Vivid - New York</option>
        <option value="Los Angeles">Vivid - Los Angeles</option>
        <option value="Miami">Vivid - Miami</option>
      </select>
      </div>
      
      <div className='flex flex-col gap-y-2'>
      <label className='text-2xl font-bold text-[silver]' >Hairstylist <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <select className=' bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
      name="hairstylist" id="hairstylist" required onChange={(e) => setHairstylist(e.target.value)} value={hairstylist}>
      <option value="" disabled selected>Select the Hairstylist</option>
        <option value="emily" >Emily Johnson</option>
        <option value="sophia">Sophia Martinez</option>
        <option value="olivia">Olivia Davis</option>
        <option value="ava">Ava Rodriguez</option>
        <option value="mia">Mia Brown</option>
        <option value="isabella">Isabella Taylor</option>
        <option value="charlotte">Charlotte Smith</option>
        <option value="amelia">Amelia Harris</option>
      </select>
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className='font-bold text-2xl text-[silver] ' >Hairstyle <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <input type='text' placeholder='Write the Hairstyle' className='bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' 
      name="hairstyle" id="hairstyle" required onChange={(e) => setHairstyle(e.target.value)} value={hairstyle} />
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className='text-2xl text-[silver]  font-bold' >Date <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <input className='bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' type='date' 
      name="date" id="date" required onChange={(e) => setDate(e.target.value)} value={date} />
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className=' text-2xl font-bold text-[silver] ' >Time <span className='text-blue-500 ml-[-2px] font-[1000]'>*</span></label>
      <input className=' bg-[#222222] border-2 h-14 pl-5 hover:border-blue-600 border-[#444444] rounded-lg text-lg' type='time' 
      name="time" id="time" required onChange={(e) => setTime(e.target.value)} value={time}/>
      </div>

      <div className='flex flex-col gap-y-2'>
      <label className='text-transparent text-2xl font-bold text-transparent' >s</label>
      <div className='relative ml-'>
      <div className={`text-2xl w-full font-[1000] z-10 text-white absolute  flex justify-center h-14 items-center ${isHovered ? 'text-[#c1c1c1] ' : 'text-white'}`}>Book Now</div>
      <div className={`rounded-lg w-full h-14 absolute bg-blue-600 ${isHovered ? 'bg-blue-800' : 'bg-blue-600'}`}/>
      <input onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()} type='submit' value='' className='w-full cursor-pointer relative z-20 mr-16 h-14 pl-5 rounded-lg text-lg' />
      </div>
      </div>

      </form>

      </div>
    </div>
  )
}

export default Booking