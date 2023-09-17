import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons'


const Hero = () => {
    

  return (
    <div className=''>

      <div className='flex max-ipad:text-center max-ipad:flex-col justify-center items-center pt-[130px] mb-24 max-ipad:mb-16 space-x-[120px] max-big:space-x-0 max-big:justify-between max-ipad:justify-center'>

      <div className='relative pt- max-ipad:mb-24 max-sm:mb-16 max-ipad:pt-0 max-big:ml-[120px] max-ipad:ml-0'>
      <div className='bg-blue-800 max-sm:hidden absolute blur-[150px] rounded-full h-[400px] w-[400px] top-[00px] left-[-0px] max-ipad:left-[70px] max-sm:left-[-35px] z-0'></div>
      <div className='relative z-2 flex flex-col max-ipad:items-center'>
        <h1 className='text-6xl max-sm:text-5xl font-[1000]'>
            Discover<br/>Most Suitable<br/>Hairstylist
        </h1>

            <p className='mt-10 text-lg max-sm:w-[300px]'>
            Look through all of our Highly Skilled Hairsylists Professionals <br/> with many years of experience and find your favorite one!
            </p>

            <div className='flex max-sm:flex-col space-x-5 max-sm:space-x-0 max-sm:space-y-5 mt-10'>
            <a href='#booking'><button className='bg-blue-600 hover:bg-blue-800 text-3xl rounded-[10px] w-[220px] max-sm:w-[280px] h-[70px] font-[1000] hover:text-[silver]'>Book Now</button></a>
            <a href='#about'><button className='bg-[#555555] hover:bg-[#444444] text-3xl rounded-[10px] w-[220px] max-sm:w-[280px] h-[70px] font-[1000] hover:text-[silver]'>Learn More</button></a>
            </div>
            
      </div>
      </div>

      <div className='max-big:pr-[120px] max-ipad:pr-0'>
      <div className='bg-blue-800 h-[550px] w-[486px] max-sm:h-[500px] max-sm:w-[350px] absolute z-[0] blur-2xl rounded-t-full'></div>
      <div className='relative z-[1] overflow-hidden h-[550px] max-sm:h-[500px] rounded-t-full border-[10px] border-[#444444] hover:border-blue-600 max-ipad:border-blue-600'>
        <img className='h-[690px] max-sm:h-[500px]' src='/hero.jpg'/>
      </div>
      </div>

      </div>

      </div>
  )
}

export default Hero