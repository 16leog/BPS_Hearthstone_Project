'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { PlaceClass } from '../../../../types';
import Maps from './maps';
import ShopCard from '../GoogleMaps/shopCard';
import ShopDetail from '../GoogleMaps/shopDetail';

type props = {
  places: PlaceClass[];
};
export default function ScrollMaps({ places }: props) {
  const [showDetail, setShowDetail] = useState(false);
  const [place, setPlace] = useState<PlaceClass>();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  const goToDetail = (card: PlaceClass) => {
    setCenter({
      lat: card.geometry.location.lat,
      lng: card.geometry.location.lng,
    });
    console.log('Go To Detail', card);
    setPlace(card);
    setShowDetail(!showDetail);
  };

  const goToList = () => {
    if (showDetail) {
      setShowDetail(!showDetail);
    } else {
      console.log('Close the sideMenuShops');
    }
  };

  console.log('SCROLLMAPS PLACES:', place);
  return (
    <>
      <div className="w-full absolute top-50 z-10 md:flex flex-col overflow-y-scroll text-shadow-lg bg-cover bg-blue-950 bg-homepageBackground shadow-black  py-3 text-white md:w-1/4 h-screen">
        <div className="flex items-center mt-12 md:justify-center">
          <Image
            className="md:hidden mx-9"
            src={''}
            alt={'left'}
            onClick={goToList}
          />
          <h1 className="text-5xl flex z-20 md:text-7xl text-white drop-shadow-lg">
            SHOPS
          </h1>
        </div>
        {showDetail ? (
          <div className="mt-12 mx-9">
            <ShopDetail
              place={place as PlaceClass}
              clickBack={() => {
                setShowDetail(!showDetail);
              }}
            />
          </div>
        ) : (
          <div className="mt-12 mx-9">
            {/* ISERT A LOOP TO POPULATE THE SIDE MENU */}
            {places.map((place, index) => (
              <div key={index}>
                <ShopCard
                  name={place.name}
                  address={place.vicinity}
                  open={place.opening_hours.open_now ? 'Open' : 'Closed'}
                  schedule={place.opening_hours.weekday_text[0].replace(
                    'Monday:',
                    ''
                  )}
                  phone={place.phone}
                  clickCard={() => goToDetail(place)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Maps places={places} center={center}></Maps>
    </>
  );
}