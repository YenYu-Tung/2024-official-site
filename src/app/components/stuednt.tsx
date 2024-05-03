'use client'

import React, { useState } from 'react';
import Image from 'next/image'

import { Button, ButtonGroup } from "@nextui-org/react";
import { teams, students } from '@/app/components/studentAndTeam'

type Props = {
    // TODO
    marginBotton: number
}

export default function Stuednt({ marginBotton }: Props) {

    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

    const handleButtonClick = (team: string) => {
        setSelectedTeam(team);
    };

    return (
        <div className={`mb-[${marginBotton}px]`}>
            <h1 className='text-3xl font-bold mb-5'>籌辦團隊</h1>
            {/* Teams */}
            <div className='flex flex-wrap gap-1 mb-5'>
                {teams.map((team, index) => (
                    <Button
                        key={index}
                        onClick={() => handleButtonClick(team)}
                        color={selectedTeam === team ? 'primary' : 'default'}
                        className="rounded-full text-xl font-bold"
                    >
                        {team}
                    </Button>
                ))}
            </div>
            {/* Students */}
            <div className="grid grid-cols-6 gap-3">
                {/* <div className="rounded-lg shadow-md col-span-2 md:col-span-3"> */}
                    {
                        selectedTeam === null ?
                            students.map((student) => (
                                <div key={student.id} className='col-span-3 md:col-span-2 flex flex-col items-stretch'>
                                    <Image
                                        width={300}
                                        height={300}
                                        // className='w-[185px] h-[185px]  md:w-[245px] md:h-[245px] rounded-lg self-center mb-3'
                                        className='h-[185px]  md:h-[245px] rounded-lg self-center mb-3'
                                        src={student.image}
                                        alt={student.name}
                                    />
                                    <p className="text-xl self-center mb-1">{student.name}</p>
                                    <p className="text-base self-center block md:hidden">{student.school}</p>
                                    <p className="text-base self-center hidden md:block">{student.school} {" "} {student.department}</p>
                                </div>
                            )) :
                            students.filter(student => student.team === selectedTeam).map((student) => (
                                <div key={student.id} className='col-span-3 md:col-span-2 flex flex-col items-stretch'>
                                    <Image
                                        width={300}
                                        height={300}
                                        // className='w-[185px] h-[185px]  md:w-[245px] md:h-[245px] rounded-lg self-center mb-3'
                                        className='h-[185px]  md:h-[245px] rounded-lg self-center mb-3'
                                        src={student.image}
                                        alt={student.name}
                                    />
                                    <p className="text-xl self-center mb-1">{student.name}</p>
                                    <p className="text-base self-center block md:hidden">{student.school}</p>
                                    <p className="text-base self-center hidden md:block">{student.school} {" "} {student.department}</p>
                                </div>
                            ))
                    }
                {/* </div> */}
            </div>
        </div>
    )
}