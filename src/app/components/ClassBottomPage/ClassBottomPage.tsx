'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import downArrow from '/public/Keyboard arrow down.svg';
import { classDataObj } from '../ClassTopPage/ClassTopPage';
import Filters from '../Filters/Filters';
import Card from '../Card/Card';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';

type props = {
  cardClass: string;
  cards: CardClass[]
};



export default function ClassBottomPage({ cardClass, cards }: props) {
  
  return (
    <div
      className={`${classDataObj[cardClass].background} sm:bg-cover bg-center-custom bg-zoomed-in min-h-screen flex flex-col`}
    >
      <Filters cards={cards ? cards: []} />
      <GridContainer cards={cards}></GridContainer>
    </div>
  );
}
