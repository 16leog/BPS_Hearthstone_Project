import React, { useContext } from 'react';
import Image from 'next/image';
import downArrow from '/public/Keyboard arrow down.svg';
import { classDataObj } from '../ClassTopPage/ClassTopPage';

type props = {
  cardClass: string;
};

export default function ClassBottomPage({ cardClass }: props) {
  
  return (
    <div
      className={`${classDataObj[cardClass].background} sm:bg-cover bg-center-custom bg-zoomed-in min-h-screen`}
    >
      <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1"></h1>
      <button className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden">
        <p className="bg-navbar w-[250px] h-[58px] text-white text-md text-center p-3 rounded-full flex flex-row justify-center items-center">
          Manage Filters <Image src={downArrow} alt="" className=""></Image>
        </p>
      </button>
      <div className=" max-sm:hidden flex flex-row w-full justify-around items-start max-lg:flex-col max-lg:gap-5"></div>
    </div>
  );
}
