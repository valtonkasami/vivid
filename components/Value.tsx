'use client';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faCheckCircle, faFaceGrinWink, faDollar } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'


const Value = () => {
    const [ aboutHidden, setAboutHidden ] = useState('')
    const [ aboutHidden2, setAboutHidden2 ] = useState('hidden')
    const [ aboutHidden3, setAboutHidden3 ] = useState('hidden')

  return (
    <div id='about' className=''>

<div className='flex max-ipad:text-center max-ipad:flex-col-reverse max-ipad:pt-[50px] max-big:mx-24 max-ipad:mx-0 justify-center items-center pt-[130px] space-x-[120px] max-big:space-x-0 max-big:justify-between max-ipad:justify-center'>

      <div className=''>
      <div className='bg-blue-800 h-[550px] w-[486px] max-sm:h-[500px] max-sm:w-[350px] absolute z-[0] blur-2xl rounded-t-full'></div>
      <div className='relative z-[1] overflow-hidden h-[550px] max-sm:h-[500px] rounded-t-full border-[10px] border-[#444444] hover:border-blue-600 max-ipad:border-blue-600'>
        <img className='h-[690px] max-sm:h-[500px]' src='/about.jpg'/>
      </div>
      </div>

      <div className='relative max-sm:w-full max-sm:px-2 pt- max-ipad:mb-24 max-sm:mb-16 max-ipad:pt-0 max-big:ml-20 max-ipad:ml-0'>
      <div className='bg-blue-800 max-sm:hidden absolute blur-[150px] rounded-full h-[400px] w-[400px] top-[00px] left-[-0px] max-ipad:left-[70px] max-sm:left-[-35px] z-0'></div>
      <div className='relative z-2 flex flex-col max-ipad:items-center'>
        <h1 className='text-2xl font-[1000] text-blue-500 sm:mb-3'>Our Value</h1>
        <h1 className='text-4xl max-sm:text-3xl font-[1000] max-sm:w-[350px]'>
            Value We Give To You
        </h1>

            <p className='mt-3 text-lg max-sm:w-[350px]'>
            We're always providing the best services for our Clients<br/>
            Making sure to satisfy all of our Clients needs!
            </p>

            <div onClick={() => {setAboutHidden(''); setAboutHidden2('hidden'); setAboutHidden3('hidden')}} className='cursor-pointer py-3 text-[silver] hover:text-blue-500 w-[550px] max-sm:w-full rounded-[35px] border-4 border-[#444444] mt-10 bg-[#222222] hover:border-blue-500 flex flex-col justify-center'>
            
            <div className='w-full h-full flex items-center justify-between'>
            <button className='ml-3'><FontAwesomeIcon className='text-4xl max-sm:text-2xl text-blue-500' icon={faCheckCircle}/></button> <h1 className='text-2xl max-sm:text-[19px] font-[1000]'>Why should you choose us?</h1> <button className='mr-3'><FontAwesomeIcon className='text-4xl max-sm:text-2xl text-[#777777] hover:text-blue-500' icon={faArrowAltCircleDown}/></button>
            </div>

            <div className={`${aboutHidden} flex w-full justify-center mt-7 mb-1`}>
                <p className='text-white w-[500px] max-sm:w-[320px]'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit</p>
            </div>

            </div>

            <div onClick={() => {setAboutHidden('hidden'); setAboutHidden2(''); setAboutHidden3('hidden')}} className='cursor-pointer py-3 text-[silver] hover:text-blue-500 w-[550px] max-sm:w-full rounded-[35px] border-4 border-[#444444] mt-5 bg-[#222222] hover:border-blue-500 flex flex-col justify-center'>
            
            <div className='w-full h-full flex items-center justify-between'>
            <button className='ml-3'><FontAwesomeIcon className='text-4xl max-sm:text-2xl text-yellow-500' icon={faFaceGrinWink}/></button> <h1 className='text-2xl max-sm:text-[19px] font-[1000]'>Get your desired hairstyles!</h1> <button className='mr-3'><FontAwesomeIcon className='text-4xl max-sm:text-2xl text-[#777777] hover:text-blue-500' icon={faArrowAltCircleDown}/></button>
            </div>

            <div className={`${aboutHidden2} flex w-full justify-center mt-7 mb-1`}>
                <p className='text-white w-[500px] max-sm:w-[320px]'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit</p>
            </div>

            </div>

            <div onClick={() => {setAboutHidden('hidden'); setAboutHidden2('hidden'); setAboutHidden3('')}} className='cursor-pointer py-3 text-[silver] hover:text-blue-500 w-[550px] max-sm:w-full rounded-[35px] border-4 border-[#444444] mt-5 bg-[#222222] hover:border-blue-500 flex flex-col justify-center'>
            
            <div className='w-full h-full flex items-center justify-between'>
            <button className='ml-3 bg-green-500 rounded-full w-9 h-9 max-sm:h-6 max-sm:w-6 mb-[2px] flex items-center justify-center overflow-hidden'><FontAwesomeIcon className='text-3xl max-sm:text-xl text-[#222222]' icon={faDollar}/></button> <h1 className='text-2xl max-sm:text-[19px] font-[1000]'>The Most Affordable Prices!</h1> <button className='mr-3'><FontAwesomeIcon className='text-4xl max-sm:text-2xl text-[#777777] hover:text-blue-500' icon={faArrowAltCircleDown}/></button>
            </div>

            <div className={`${aboutHidden3} flex w-full justify-center mt-7 mb-1`}>
                <p className='text-white w-[500px] max-sm:w-[320px]'>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit</p>
            </div>

            </div>

            <div>

            </div>
            
      </div>
      </div>

      </div>

      </div>
  )
}

export default Value