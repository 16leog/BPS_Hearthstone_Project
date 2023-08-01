'use client'
import React from 'react';
import Filters from '../components/Filters/Filters';
import GridContainer from '../components/Carousel/GridContainer';

export default function Favorites() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-homepageBackground">
      <h1 className=" font-aclonica  text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1">Favorites</h1>
      <Filters  cards={[]}/>
      <GridContainer cards={[]}></GridContainer>
    </div>
  );
}
