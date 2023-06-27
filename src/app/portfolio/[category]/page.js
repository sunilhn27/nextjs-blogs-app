import Image from 'next/image'
import React from 'react'
import PortfolioImg from './../../../../public/portfolio.jpg'
function Category({ params }) {


    return (
        <div>
            <div> <h1 className='text-6xl bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text ml-6'>Illustration</h1></div>
            <div className='flex flex-col-reverse md:flex-row space-y-6 mx-6'>
                <div className='flex-1  justify-center items-center '>
                    <div className='space-y-3 mt-9 mx-5'>
                        <h1 className='text-4xl'> Creative Portfolio</h1>
                        <p className='text-gray-400'>Ut cupidatat velit ut pariatur sunt mollit culpa velit officia. Voluptate ad sunt exercitation in cupidatat veniam duis deserunt. Cillum mollit velit dolore aliqua culpa labore consequat ut laborum.</p>
                        <button className='bg-green-500 hover:bg-green-700 px-4 py-1 rounded-md'>See More</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <Image src={PortfolioImg} width={600} height={900} className=' rounded-full mx-4' />
                </div>
            </div>

        </div>
    )
}

export default Category