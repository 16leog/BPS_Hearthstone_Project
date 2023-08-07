import React from 'react';
import Filters from '../components/Filters/Filters';
import GridContainer from '../components/Carousel/GridContainer';

export default async function Favorites() {
  const res = await fetch('http://localhost:3000/api/getData', {
    next: { revalidate: 1 },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
  return (
    <div className="flex min-h-screen flex-col items-center bg-homepageBackground">
      <h1 className=" font-aclonica  text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1">
        Favorites
      </h1>
      <Filters cards={res.data} />
      <GridContainer cards={res.data}></GridContainer>
    </div>
  );
}
