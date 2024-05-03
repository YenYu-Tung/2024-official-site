import React from 'react'
import Image from 'next/image'

import FaqM1 from '../../../public/images/faq_m_q1.svg'
import FaqM4 from '../../../public/images/faq_m_q4.svg'

import FaqD1 from '../../../public/images/faq_d_q1.svg'
import FaqD4 from '../../../public/images/faq_d_q4.svg'

type Props = {
    // TODO
    marginBotton: number
}

export default function FAQ({ marginBotton } : Props) {
    return (
        // <div className='mb-[100px]'>
        <div className={`mb-[${marginBotton}px]`}>

            <div className='mb-5'>
                <h1 className='text-3xl font-bold mb-5'>FAQ</h1>
                <h3 className='text-xl font-bold mb-5'>報名常見問題</h3>
                <div className='flex justify-center'>
                    <Image src={FaqM1} alt='faq_m_q1' className='md:hidden' />
                    <Image src={FaqD1} alt='faq_d_q1' className='hidden md:block' />
                </div>
            </div>
            <h3 className='text-xl font-bold mb-5'>ID Card 常見問題</h3>
            <div className='flex justify-center'>
                <Image src={FaqM4} alt='faq_m_q1' className='md:hidden' />
                <Image src={FaqD4} alt='faq_d_q4' className='hidden md:block' />
            </div>
        </div>
    )
}