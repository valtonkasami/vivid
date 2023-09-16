import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMessage, faMailForward } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    

  return (
    <div id='contact' className=''>

<div className='flex max-ipad:flex-col max-ipad:pt-[50px] max-big:mx-[110px]  max-ipad:mx-0 justify-center items-center pt-[130px] space-x-[120px] max-big:space-x-0 max-big:justify-between max-ipad:justify-center'>

<div className='max-sm:w-full relative flex flex-col max-ipad:items-center max-ipad:mb-16 z-10'>

<div className='bg-blue-800 absolute blur-[150px] rounded-full h-[400px] w-[400px] top-[100px] left-[-0px] max-ipad:left-[70px] max-sm:left-[-35px] z-0'></div>

        <div className='max-ipad:text-center'>
        <h1 className='relative text-2xl max-sm:text-xl font-[1000] text-blue-500 sm:mb-3'>Contact Us</h1>
        <h1 className='relative text-4xl max-sm:text-3xl font-[1000] max-sm:w-[350px]'>
        Easy to contact us
        </h1>

            <p className='relative mt-3 text-lg max-sm:w-[350px]'>
            We're always ready to provide with any information<br/>
            Making sure to satisfy all of our Clients Needs!
            </p>

            </div>

      <div className='max-sm:px-5 relative grid grid-cols-2 max-sm:grid-cols-1 gap-y-4 max-sm:gap-y-5 gap-x-4 max-sm:gap-x-0 mt-10 w-full'>

        <div className='px-3 py-3 bg-[#222222] border-4 border-[#444444] hover:border-blue-500 h-[140px] w-[250px] max-sm:w-full rounded-[20px]'>
            <div className='flex items-center'>

                <div className='bg-[#444444] mr-3 h-12 w-12 flex items-center justify-center rounded-[10px]'><FontAwesomeIcon className='text-2xl text-blue-500' icon={faPhone}/></div>
                
                <div className='flex flex-col'>
                <h1 className='font-[1000]'>Call</h1>
                <p className='text-[silver]'>021 123 145 14</p>
                
                </div>
                
            </div>

            
            <button className='mt-5 w-full h-10 bg-[#444444] hover:bg-blue-500 rounded-[10px] flex items-center justify-center font-[1000] text-blue-500 hover:text-[white]'>Call Now</button>
            

        </div>

        <div className='max-sm:w-full px-3 py-3 bg-[#222222] border-4 border-[#444444] hover:border-blue-500 h-[140px] w-[250px] rounded-[20px]'>
            <div className='flex items-center'>

                <div className='bg-[#444444] mr-3 h-12 w-12 flex items-center justify-center rounded-[10px]'><FontAwesomeIcon className='text-2xl text-blue-500' icon={faMessage}/></div>
                
                <div className='flex flex-col'>
                <h1 className='font-[1000]'>Message</h1>
                <p className='text-[silver]'>021 123 145 14</p>
                
                </div>
                
            </div>

            
            <button className='mt-5 w-full h-10 bg-[#444444] hover:bg-blue-500 rounded-[10px] flex items-center justify-center font-[1000] text-blue-500 hover:text-[white]'>Message Now</button>
            

        </div>

        <div className='max-sm:w-full px-3 py-3 bg-[#222222] border-4 border-[#444444] hover:border-blue-500 h-[140px] w-[250px] rounded-[20px]'>
            <div className='flex items-center'>

                <div className='bg-[#444444] mr-3 h-12 w-12 flex items-center justify-center rounded-[10px]'><FontAwesomeIcon className='text-4xl text-blue-500' icon={faInstagram}/></div>
                
                <div className='flex flex-col'>
                <h1 className='font-[1000]'>Instagram</h1>
                <p className='text-[silver]'>@vivid</p>
                
                </div>
                
            </div>

            
            <button className='mt-5 w-full h-10 bg-[#444444] hover:bg-blue-500 rounded-[10px] flex items-center justify-center font-[1000] text-blue-500 hover:text-[white]'>Follow Now</button>
            

        </div>

        <div className='max-sm:w-full px-3 py-3 bg-[#222222] border-4 border-[#444444] hover:border-blue-500 h-[140px] w-[250px] rounded-[20px]'>
            <div className='flex items-center'>

                <div className='bg-[#444444] mr-3 h-12 w-12 flex items-center justify-center rounded-[10px]'><FontAwesomeIcon className='text-2xl text-blue-500' icon={faMailForward}/></div>
                
                <div className='flex flex-col'>
                <h1 className='font-[1000]'>Email</h1>
                <p className='text-[silver]'>vivid@mail.com</p>
                
                </div>
                
            </div>

            
            <button className='mt-5 w-full h-10 bg-[#444444] hover:bg-blue-500 rounded-[10px] flex items-center justify-center font-[1000] text-blue-500 hover:text-[white]'>Email Now</button>
            

        </div>

      </div>

        </div>

      <div className='max-ipad:pr-0'>
      <div className='bg-blue-800 h-[550px] w-[486px] max-sm:h-[500px] max-sm:w-[350px] absolute z-[0] blur-2xl rounded-t-full'></div>
      <div className='relative z-[1] overflow-hidden h-[550px] max-sm:h-[500px] rounded-t-full border-[10px] border-[#444444] hover:border-blue-600 max-ipad:border-blue-600'>
        <img className='h-[690px] max-sm:h-[500px]' src='/contact.jpg'/>
      </div>
      </div>

      </div>

      </div>
  )
}

export default Contact