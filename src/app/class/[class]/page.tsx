'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const revalidate = 1;

// Utility function to map classId to the appropriate class names
function getBackgroundClass(classId: string): string {
  switch (classId) {
    case 'mage':
      return 'bg-mageBackgroundMobile sm:bg-mageBackground';
    case 'hunter':
      return 'bg-hunterBackgroundMobile sm:bg-hunterBackground';
    case 'druid':
      return 'bg-druidBackgroundMobile sm:bg-druidBackground';
    case 'priest':
      return 'bg-priestBackgroundMobile sm:bg-priestBackground';
    case 'rouge':
      return 'bg-rougeBackgroundMobile sm:bg-rougeBackground';
    case 'paladin':
      return 'bg-paladinBackgroundMobile sm:bg-paladinBackground';
    case 'shaman':
      return 'bg-shamanBackgroundMobile sm:bg-shamanBackground';
    case 'demonhunter':
      return 'bg-demonhunterBackgroundMobile sm:bg-demonhunterBackground';
    case 'warlock':
      return 'bg-warlockBackgroundMobile sm:bg-warlockBackground';
    case 'warrior':
      return 'bg-warriorBackgroundMobile sm:bg-warriorBackground';
    default:
      return '';
  }
}

export default function Page() {
  const [classId, setClassId] = useState('');
  const [emblemSrc, setEmblemSrc] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname; // Get current url path
      const id = path.split('/')[2]; // Assuming the id is the 3rd part of the URL
      setClassId(id);

      // Dynamic import for image
      import(`public/${id} emblem_2023-07-21/${id} emblem@3x.webp`)
        .then((image) => {
          setEmblemSrc(image.default);
        })
        .catch((error) => console.error('Error loading image:', error));
    }
  }, []);

  if (!emblemSrc) {
    return <div>Loading...</div>; // Return a loading indicator if the image hasn't loaded yet
  }

  console.log(classId);
  return (
    <>
      <div
        className={`${getBackgroundClass(
          classId
        )} sm:bg-cover bg-center-custom bg-zoomed-in  min-h-screen`}
      >
        <div className="flex flex-row ">
          <Image
            className=" flex flex-row rounded-full p-6"
            src={emblemSrc}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className="flex flex-row items-center text-3xl text-white text-outline-black">
            {classId.charAt(0).toUpperCase() + classId.slice(1)}
          </p>
        </div>
      </div>
    </>
  );
}
