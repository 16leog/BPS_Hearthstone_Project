import React from 'react';
import Image from 'next/image';
import downArrow from '/public/Keyboard arrow down.svg';
export default function GoldButton() {
  return (
    <div>
      <button className="  bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-52 flex flex-col justify-center items-center justify-self-end">
        <div className="  bg-accents_2 w-[200px]  h-[52px] text-brown text-center p-3 rounded-full flex flex-row justify-center  ">
          <p className="px-9 text-shadow">Classes</p>
          <Image src={downArrow} alt="" className="flex flex-row "></Image>
        </div>
      </button>
    </div>
  );
}
