import React from 'react'
import Image from 'next/image'

type Props = {
    // TODO
    marginBotton: number
}

export default function Sponsor({ marginBotton }: Props) {
    return (
        <div className={`mb-[${marginBotton}px]`}>
            <h1 className='text-3xl font-bold mb-5'>贊助單位</h1>
            <h3 className='text-xl font-bold mb-5'>白金級</h3>
            <div className="grid grid-cols-6 gap-3 mb-5">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
            </div>
            <h3 className='text-xl font-bold mb-5'>金級</h3>
            <div className="grid grid-cols-6 gap-3 mb-5">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
            </div>
            <h3 className='text-xl font-bold mb-5'>銀級</h3>
            <div className="grid grid-cols-6 gap-3">
                {/* <Image
                    src={'/images/album-cover.png'}
                    width={300}
                    height={300}
                    alt='sponsor'
                    className='rounded-md'
                /> */}

                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
                <div className='col-span-3 md:col-span-2 border-2 border-black h-[105px]'>
                </div>
            </div>
        </div>
    )
}