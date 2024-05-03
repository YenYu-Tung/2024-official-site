import React from 'react'

import { GoogleMapsEmbed } from '@next/third-parties/google'

import OpenHCIDark from '../../../public/images/OpenHCI_Dark.svg'
import OpenHCILight from '../../../public/images/OpenHCI_Light_Logo.svg'
import Image from 'next/image';

// Define the environment variable
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export default function Footer() {
    return (
        <div className='grid grid-cols-2 gap-5'>
            {/* <div className='col-span-2 md:col-span-1 h-[300px] md:h-auto'> */}
            <div className='col-span-2 md:col-span-1 h-[300px]'>
                <h1 className='text-3xl font-bold mb-5'>活動地點</h1>
                <div className='relative w-full h-[243px]'>
                    <GoogleMapsEmbed
                        apiKey={GOOGLE_MAPS_API_KEY || ''}
                        mode="place"
                        q="國立台灣大學學新館"
                        style='border: 1px solid black; height: 100%; width: 100%; position: absolute; bottom: 0; left: 0;'
                    // style='border: 1px solid black; height: 100%; width: 100%;'
                    />
                </div>
            </div>
            {/* <div className='col-span-2 md:col-span-1 h-[300px] md:h-auto'> */}
            <div className='col-span-2 md:col-span-1 h-[300px]'>
                <div className='flex flex-col justify-between items-center h-full'>
                    <Image
                        src={OpenHCIDark}
                        alt='OpenHCI_Dark'
                        width={300}
                        height={300}
                    />
                    <p className='text-xl font-bold'>© COPYRIGHT 2024 OpenHCI'24</p>
                    <div className='text-center'>
                        <span>2023</span> / {" "}
                        <span>2022</span> / {" "}
                        <span>2021</span> / {" "}
                        <span>2019</span> / {" "}
                        <span>2018</span> / {" "}
                        <span>2017</span> / {" "}
                        <span>2016</span> / {" "}
                        <span>2015</span> / {" "}
                        <span>2014</span> / {" "}
                        <span>2013</span> / {" "}
                        <span>2012</span> / {" "}
                        <span>2011</span> / 
                        <span>2009</span>
                    </div>
                </div>
            </div>
        </div>
    )
}