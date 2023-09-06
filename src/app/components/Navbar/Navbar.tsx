'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import homepageLogo2 from 'public/homepage_logo 2_2023-07-21/homepage_logo 2.webp';
import { useEffect, useState } from 'react';

export interface INavbar {
  sampleTextProp: string;
}

export default function Navbar() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      console.log('center', center);
    });
  }, []);
  return (
    <>
      <nav className=" bg-navbarColor bg-opacity-80 z-20 flex flex-row w-full h-20 max-sm:justify-between items-center justify-center shadow-2xl sticky top-0">
        <div className="p-4 relative max-sm:left-8 right-1/4">
          <button onClick={() => router.push('/')}>
            <Image src={homepageLogo2} alt={''} width={140} height={70}></Image>
          </button>
        </div>
        <div className=" flex flex_row w-1/4 justify-between gap-20 text-white max-sm:hidden">
          <button
            className=" font-montserrat hover:text-goldFont"
            onClick={() => router.push('/')}
          >
            HOME
          </button>
          <button
            className=" font-aclonica hover:text-goldFont"
            onClick={() => router.push('/favorites')}
          >
            FAVORITES
          </button>
          <Link
            href={{
              pathname: `/shops/`,
              query: { lat: center.lat, lng: center.lng },
            }}
            className=" font-aclonica hover:text-accents"
          >
            SHOPS
          </Link>
        </div>
        <button
          className="relative right-8 sm:hidden w-10 h-10"
          onClick={() => setToggle(toggle ? false : true)}
        >
          <div className=" h-0.5 w-6 rounded-none bg-goldFont before:absolute before:h-0.5 before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-goldFont before:content-[''] after:absolute after:h-0.5 after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-goldFont after:content-['']"></div>
        </button>
      </nav>
      {toggle && (
        <div className="sm:hidden animate-open-menu  absolute top-20 bg-navbarColor w-full h-full text-4xl flex flex-col items-center justify-center gap-24 origin-top left-0 z-30">
          <button
            className=" font-montserrat hover:text-goldFont text-white underline underline-offset-8 "
            onClick={() => router.push('/')}
          >
            HOME
          </button>
          <button
            className=" font-montserrat hover:text-goldFont text-white underline underline-offset-8"
            onClick={() => router.push('/favorites')}
          >
            FAVORITES
          </button>
          <Link
            href={{
              pathname: `/shops/`,
              query: { lat: center.lat, lng: center.lng },
            }}
            className=" font-montserrat active:text-accents text-white underline underline-offset-8"
          >
            SHOPS
          </Link>
        </div>
      )}
    </>
  );
}
