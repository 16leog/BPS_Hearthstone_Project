import React, { useContext } from 'react';
import Image from 'next/image';
import downArrow from '/public/Keyboard arrow down.svg';
import { classDataObj } from '../ClassTopPage/ClassTopPage';
import Filters from '../Filters/Filters';

type props = {
  cardClass: string;
};

export default function ClassBottomPage({ cardClass }: props) {
  return (
    <div
      className={`${classDataObj[cardClass].background} sm:bg-cover bg-center-custom bg-zoomed-in min-h-screen flex flex-col`}
    >
    <Filters/> 
    </div>
  );
}
