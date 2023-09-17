'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
    const [ clientPic, setClientPic ] = useState('/client1.jpg');
    const [ clientReview, setClientReview ] = useState('“I\'ve been a client of Vivid for the past 6 months and it has been an amazing experience. The HairStylists at Vivid are knowledgeable and i think the products they use are nice.”');
    const [ clientName, setClientName ] = useState('Mia Monroe');
    const [ clientCountry, setClientCountry ] = useState('France')

  return (
    <div id='reviews' className='relative mb-24 max-sm:mb-10'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='relative z-[15] font-[1000] text-2xl max-sm:text-xl text-blue-500 mt-[130px] max-ipad:mt-[50px]'>Reviewed by Clients</h1>
            <h1 className='relative z-[15] font-[1000] text-4xl max-sm:text-3xl mt-1'>Client's Testimonials</h1>
            <p className='relative z-[15] w-[540px] max-sm:w-[350px] mt-2 text-center'>Discover the positive impact we've made on our costumers by reading through some of their Reviews and Testimonials.</p>
            
            

            <div className='px-5 w-full mt-10 relative'>
            <div className='w-full left-0 blur-[150px] mt-14  h-[70%] bg-blue-600 max-sm:hidden absolute'></div>
            <div className='relative lg:hidden w-full h- bg-[#222222] border-[6px] border-[#444444] hover:border-blue-600 rounded-[20px]'>
                
                <div className='mx-5 my-5'>
                
            <div className='mb-3 flex items-center justify-between'>
                <FontAwesomeIcon className='text-[#666666] text-7xl' icon={faQuoteRightAlt}/>
                <div className='flex z-20 space-x-2 items-end mr-7'>
                <button onClick={() => {setClientPic('/client1.jpg'); setClientName('Mia Monroe'); setClientCountry('France'); setClientReview('“I\'ve been a client of Vivid for the past 6 months and it has been an amazing experience. The HairStylists at Vivid are knowledgeable and i think the products they use are nice.”')}} className='bg-[#444444] h-10 w-12 border-4 hover:border-blue-500 border-[#666666] flex items-center justify-center'><FontAwesomeIcon className='text-[silver] text-2xl' icon={faArrowLeft}/></button>
                <button onClick={() => {setClientPic('/client2.jpg'); setClientName('Alice Adams'); setClientCountry('England'); setClientReview('"The atmosphere at Vivid is incredibly welcoming. They create a relaxing and chic ambiance that immediately puts me at ease. It\'s very clear that Vivid takes great pride in their space."')}} className='bg-[#444444] h-10 w-12 border-4 hover:border-blue-500 border-[#666666] flex items-center justify-center'><FontAwesomeIcon className='text-[silver] text-2xl' icon={faArrowRight}/></button>
                </div>
            </div>

            <div>
                <p className='text-lg text-medium text-[silver]'><em>{clientReview}</em></p>
                
                <div className='flex items-center mt-5'>
                    <div className='h-20 w-20 rounded-full overflow-hidden border-4 border-blue-500'>
                        <img className='rounded-full border-blue-600 mt-[-10px]' src={clientPic}/>
                    </div>

                    <div className='pb-3 ml-3'>
                <h1 className=' text-2xl mt-4 text-blue-500 font-[1000]'>{clientName}</h1>
                <p className=' text-lg text-[silver]'>{clientCountry}</p>
                    </div>

                </div>

            </div>

                </div>


            </div>
            </div>


        
            <div className='max-lg:hidden z-10 w-full px-[210px] mt-5 flex items-center justify-center h-[360px] '>
                
            <div className='absolute max-lg:hidden bottom-[0.5px] border-blue-600 z-20 reviews:w-[1150px] w-[95.5%] mt-16 flex items-center justify-center h-[360px] border-[9px]'></div>
                
                <img src={clientPic} className='bg-[red] max-lg:hidden hover:border-blue-600 h-[450px] mt-[-150px] z-20 absolute left-0 reviews:ml-[-785px] reviews:relative ml-[5%] rounded-tr-full border-t-[9px] border-r-[9px] border-[#444444]' />

                <div className='bg-blue-600 blur-[200px] absolute h-[290px] w-[1030px] max-reviews:w-[90%]'></div>
                <div className='flex flex-col justify-center absolute bg-[#222222] max-lg:border-[6px] border-[#444444] max-lg:rounded-[20px] hover:border-blue-600 max-sm:border-full h-[300px] reviews:w-[1080px] w-[90%]'>

                <div className='ml-[350px] mb-3'>
                    <FontAwesomeIcon className='text-[#666666] text-7xl' icon={faQuoteRightAlt}/>
                </div>
                
                <div className='ml-[350px]'>
                
                <p className=' mr-[50px] mt- text-lg text-[silver] decoration-wavy font-medium'><em>{clientReview}</em></p>
                
                <div className='flex w-full justify-between'>
                    <div>
                <h1 className=' text-2xl mt-4 text-blue-500 font-[1000]'>{clientName}</h1>
                <p className=' text-lg text-[silver]'>{clientCountry}</p>
                    </div>
                <div className='flex z-20 space-x-2 items-end mr-7'>
                <button onClick={() => {setClientPic('/client1.jpg'); setClientName('Mia Monroe'); setClientCountry('France'); setClientReview('“I\'ve been a client of Vivid for the past 6 months and it has been an amazing experience. The HairStylists at Vivid are knowledgeable and i think the products they use are nice.”')}} className='bg-[#444444] h-10 w-12 border-4 hover:border-blue-500 border-[#666666] flex items-center justify-center'><FontAwesomeIcon className='text-[silver] text-2xl' icon={faArrowLeft}/></button>
                <button onClick={() => {setClientPic('/client2.jpg'); setClientName('Alice Adams'); setClientCountry('England'); setClientReview('"The atmosphere at Vivid is incredibly welcoming. They create a relaxing and chic ambiance that immediately puts me at ease. It\'s very clear that Vivid takes great pride in their space."')}} className='bg-[#444444] h-10 w-12 border-4 hover:border-blue-500 border-[#666666] flex items-center justify-center'><FontAwesomeIcon className='text-[silver] text-2xl' icon={faArrowRight}/></button>
                </div>
                </div>

                </div>

                </div>
                
                
                
            </div>

        </div>

        

    </div>
  )
}

export default Reviews