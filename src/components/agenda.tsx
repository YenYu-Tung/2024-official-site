'use client';

import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button, Card } from '@nextui-org/react';

const agendaDatas = [
  {
    title: '前置工作坊', date: '6/22（六）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  },
  {
    title: '前置工作坊', date: '6/23（日）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  },
  {
    title: '正式工作坊', date: '7/4（四）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  }, 
  {
    title: '正式工作坊', date: '7/5（五）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  }, 
  {
    title: '正式工作坊', date: '7/6（六）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  }, 
  {
    title: '正式工作坊', date: '7/7（日）', contents: ['聆聽人機互動先修概念', '學習設計思考概念', '了解基本Arduino和Processing技術', '討論工作坊作品著重面向']
  },
];

const Agenda = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);  
  const [activeButton, setActiveButton] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const cardWidth = 370; 
        const activeIndex = Math.round(scrollLeft / cardWidth); 
        setActiveButton(activeIndex);
      }
    };

    if (scrollContainerRef.current) { 
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) { 
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleButtonClick = (index: number) => {
    const cardWidth = 370;
    const scrollToPosition = index * cardWidth;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: scrollToPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-start w-[1040px] gap-[40px] text-[#222]">
      <span className="font-semibold text-3xl">詳細日程 Agenda</span>
      <div className="flex gap-4">
        {['前置 D1', '前置 D2', '正式 D1', '正式 D2', '正式 D3', '正式 D4'].map((label, index) => (
          <Button
            key={index}
            size="lg"
            radius="full"
            className={clsx(
              'text-base font-medium',
              activeButton === index ? 'bg-[#94AAC1] text-white' : 'bg-[#E9E9E9] text-[#222]'
            )}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="flex gap-6 overflow-x-auto w-[1040px] pr-[690px]" ref={scrollContainerRef}>
        {agendaDatas.map((agenda, index) => (
          <Card key={index} 
            className="w-[347px] h-[385px] px-7 py-6 flex-shrink-0 justify-between rounded-3xl" 
            // style={{
            //   backgroundImage: 'url(/card.svg)', 
            //   backgroundSize: 'cover', 
            //   backgroundPosition: 'center', 
            // }}
          > 
            <div className='w-[292px] h-[276px] flex flex-col bg-[#D9D9D9]/25 rounded-2xl px-7 py-5 text-[#222]'> 
              <span className="font-medium text-2xl">{agenda.title}</span>
              <span className="text-base">{agenda.date}</span>
              <ul className="list-disc pl-6">
                {agenda.contents.map((content, index) => (
                  <li key={index} className='mb-2'>{content}</li> 
                ))}
              </ul>
            </div>
            <Button radius="full" size="lg" className="bg-[#E9E9E9] text-[#222] text-xl font-semibold">
              詳細日程表
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Agenda;
