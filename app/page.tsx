import { Hero, Darken, Blur, Darken2, Blur2, Darken3, Booking, Box, Value, Contact, Reviews, Footer } from '@/components';
import Image from 'next/image';

export default function Home() {

  return (
    <main className='overflow-hidden'>
      
      <Box />
      
      <Darken3 />
      
      <Darken />
      < Darken2 />

      <Blur>
      <Blur2>

      <Hero />
      <Booking />
      <Value />
      <Contact />
      <Reviews />
      <Footer />

      </Blur2>
      </Blur>

    </main>
  )
}
