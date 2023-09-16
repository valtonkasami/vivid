import React from 'react'

const Footer = () => {

  return (
    <div className='flex flex-col items-center max-sm:mx-3 mb-5'>
      
    <div className={`flex items-center justify-center space-x-10 max-sm:space-x-4 ultra bg-[#222222] h-20 max-sm:h-14 max-sm:border-[5px] w-[610px] max-sm:w-[370px] border-[6px] border-[#444444] hover:border-blue-600 relative rounded-full bottom-0 z-[300] left-0`}>

      <a href='#'><h1 className='text-[#888888] hover:text-blue-500 text-3xl max-sm:text-xl font-[1000]'>Home</h1></a>
      <a href='#about'><h1 className='text-[#888888] hover:text-blue-500 text-3xl max-sm:text-xl font-[1000]'>About</h1></a>
      <a href='#contact'><h1 className='text-[#888888] hover:text-blue-500 text-3xl max-sm:text-xl font-[1000]'>Contact</h1></a>
      <a href='#reviews'><h1 className='text-[#888888] hover:text-blue-500 text-3xl max-sm:text-xl font-[1000]'>Reviews</h1></a>

    </div>
    </div>
  )
}

export default Footer