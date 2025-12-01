"use client"
import Link from "next/link";

import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <div className='w-full relative h-screen overflow-hidden'>
      <Image src={"/hero.gif"} alt='hero' width={1000} height={1000}
      className='absolute w-full h-full inset-0 object-cover'/>

      <div className='absolute w-full flex flex-col items-center mt-44'>
        <h1 className='font-bold text-7xl font-game tracking-wider'>Start Your</h1>
        <h1 className='font-bold text-8xl font-game text-yellow-400 tracking-wider'
        style={{textShadow: "2px 2px 0 #000, -2px -2px 0 #000, -2px 2px 0 #000,2px -2px 0 #000 "}}
        >Coding Journey</h1>

        <h2 className='mt-5 font-game text-3xl tracking-wider'>Beginner friendly coding courses & projects</h2>
        
        <Link href={'/sign-in'}>
        <Button variant="pixel" className='mt-7 text-3xl font-game p-6'>GET STARTED</Button></Link>
      </div>
    </div>
  )
}

export default Hero