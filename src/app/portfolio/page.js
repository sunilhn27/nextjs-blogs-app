import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import appsImage from '@/../../public/apps.jpg'
import WebsitesImage from '@/../../public/websites.jpg'
import illustrationImage from '@/../../public/illustration.png'

function Portfolio() {
    return (
        <div>
            <div className='space-y-10 flex flex-col justify-center items-center'>
                <p className='text-1xl'>Choose the Gallery</p>
                <div className='mx-8 flex lg:flex-row gap-7 flex-col '>
                    <div className='flex flex-col justify-center items-center'>
                        <Link href={"/portfolio/illustration"} className="border-2 h-72 w-64 flex items-center justify-center ">
                            <Image src={illustrationImage} width={600} height={500} className='object-cover h-full filter ' alt="Application" />
                        </Link>
                        <span className='font-semibold text-3xl text-gray-500 py-4 '>illustration</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Link href={"/portfolio/websites"} className="border-2 h-72 w-64 flex items-center justify-center ">
                            <Image src={WebsitesImage} width={600} height={500} className='object-cover h-full filter ' alt="Application" />
                        </Link>
                        <span className='font-semibold text-3xl text-gray-500 py-4 ' >Websites</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Link href={"/portfolio/application"} className="border-2 h-72 w-64 flex items-center justify-center ">
                            <Image src={appsImage} width={600} height={500} className='object-cover h-full filter ' alt="Application" />
                        </Link>
                        <span className='font-semibold text-3xl text-gray-500 py-4 hover:text-white'>Application</span>

                    </div>

                </div>
            </div>
        </div>
    )
}


export default Portfolio