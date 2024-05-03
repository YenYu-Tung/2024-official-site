'use client'

import React from "react";
import Image from 'next/image'
import { Card, CardBody, Button } from "@nextui-org/react";
import { NextIcon } from "./nextIcon";
import { PreviousIcon } from "./previousIcon";

type Props = {
    // TODO
    marginBotton: number
}

export default function PreviousWork({ marginBotton }: Props) {
    const previousWorks = [
        {
            "id": "1",
            "title": "歷屆作品一",
            "description": "上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。",
            "image": "/images/album-cover.png"
        },
        {
            "id": "2",
            "title": "歷屆作品二",
            "description": "上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。",
            "image": "/images/album-cover.png"
        },
        {
            "id": "3",
            "title": "歷屆作品三",
            "description": "上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。",
            "image": "/images/album-cover.png"
        },
        {
            "id": "4",
            "title": "歷屆作品四",
            "description": "上班族每天都必須面對龐大的工作壓力，長期容易使人陷入低潮漩渦，造成身心靈影響。「情緒波紋」是一款桌上型互動裝置，透過按壓，將情緒轉化成一幅獨特又錯落有致的情緒波紋。透過觀察自身情緒及掌握長期的情緒變化，有助於心理健康。",
            "image": "/images/album-cover.png"
        },
    ];

    const [currentWork, setCurrentWork] = React.useState(previousWorks[0]);
    const [counter, setCounter] = React.useState(0);

    function handlePrevious() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
        if (counter === 0) {
            setCounter(previousWorks.length - 1);
        }
        setCurrentWork(previousWorks[counter]);
    }

    function handleNext() {
        if (counter < previousWorks.length - 1) {
            setCounter(counter + 1);
        }
        if (counter === previousWorks.length - 1) {
            setCounter(0);
        }
        setCurrentWork(previousWorks[counter]);
    }

    return (
        <div className={`mb-[${marginBotton}px]`}>
            <h1 className='text-3xl font-bold mb-5'>歷屆作品</h1>
            <Card>
                <CardBody>
                    <div className="flex items-center justify-between">
                        <Button
                            isIconOnly
                            className="data-[hover]:bg-foreground/10"
                            radius="full"
                            variant="light"
                            onPress={() => handlePrevious()}
                        >
                            <PreviousIcon />
                        </Button>

                        <div className="grid grid-cols-6 gap-5">
                            <div className="col-span-6 md:col-start-1 md:col-end-3 flex justify-center">
                                <Image
                                    src={currentWork.image}
                                    width={3000}
                                    height={300}
                                    alt="Album cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="col-span-6 md:col-start-3 md:col-end-7">
                                <h3 className="text-xl font-bold mb-5">{currentWork.title}</h3>
                                <p className="texxt-base">{currentWork.description}</p>
                            </div>
                        </div>

                        <Button
                            isIconOnly
                            className="data-[hover]:bg-foreground/10"
                            radius="full"
                            variant="light"
                            onPress={() => handleNext()}
                        >
                            <NextIcon />
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}