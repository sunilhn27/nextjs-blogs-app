import Image from 'next/image'
import React from 'react'
import Fb from '../../../public/1.png'
import Instagram from '../../../public/2.png'
import Twitter from '../../../public/3.png'
import Youtube from '../../../public/4.png'


function Footer() {
    return (
        <div className=' flex  mb-3 mx-7'>
            <div className=' text-center mx-auto '>Copy Right @ 2023</div>
            <div className='flex space-x-2 cursor-pointer '>
                <Image src={Fb} width={20} height={20} alt='fb'></Image>
                <Image src={Instagram} width={20} height={20} alt='ins'></Image>
                <Image src={Twitter} width={20} height={20} alt='twi'></Image>
                <Image src={Youtube} width={20} height={20} alt='you'></Image>
            </div>
        </div>
    )
}

export default Footer