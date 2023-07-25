'use client';
import Image from 'next/image';
import mageEmblem from 'public/mage emblem_2023-07-21/mage emblem@3x.webp';

export default function Page() {
  return (
    <>
      <div className="bg-mageBackgroundMobile sm:bg-mageBackground sm:bg-cover bg-center-custom bg-zoomed-in  min-h-screen">
        <div className='flex flex-row '>
          <Image
            className=" flex flex-row rounded-full p-6"
            src={mageEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className='flex flex-row items-center text-3xl text-white text-outline-black'>Mage</p>
        </div>
      </div>
    </>
  );
}
