"use client"
import Image from 'next/image'
import React from 'react'
import Hero from '../../public/hero.png'
import { useEffect } from 'react'




function Home() {


  useEffect(() => {
    console.log("useEffect")
    console.log(process.env.GITHUB_CLIENT_SECRET)
  }, [])


  return (
    <>

      < div className="flex flex-col md:flex-row gap-8 mx-4" >
        <div className="text-center flex flex-col gap-8  justify-center  items-center md:w-1/2">
          <h1 className="text-6xl bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Better Design for Digital Products</h1>
          <p className='text-gray-400  '>Commodo enim magna labore laboris veniam cillum ut exercitation labore nulla ipsum anim ipsum.</p>
          <button className='bg-green-400 px-5 py-2 rounded-lg hover:bg-green-600'>See our works</button>
        </div>
        <div className="flex-1 md:w-1/2 ">
          <Image src={Hero} width={500} height={500} className='animate-bounce-slow' />
        </div>
      </div>

    </>)

}

export default Home
