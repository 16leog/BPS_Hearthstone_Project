'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import demonhunterEmblem from 'public/demonhunter emblem_2023-07-21/demonhunter emblem@3x.webp';
import druidEmblem from 'public/druid emblem_2023-07-21/druid emblem@3x.webp';
import hunterEmblem from 'public/hunter emblem_2023-07-21/hunter emblem@3x.webp';
import mageEmblem from 'public/mage emblem_2023-07-21/mage emblem@3x.webp';
import paladinEmblem from 'public/paladin emblem_2023-07-21/paladin emblem@3x.webp';
import priestEmblem from 'public/priest emblem_2023-07-21/priest emblem@3x.webp';
import rogueEmblem from 'public/rogue emblem_2023-07-21/rogue emblem@3x.webp';
import shamanEmblem from 'public/shaman emblem_2023-07-21/shaman emblem@3x.webp';
import warlockEmblem from 'public/warlock emblem_2023-07-21/warlock emblem@3x.webp';
import warriorEmblem from 'public/warrior emblem_2023-07-21/warrior emblem@3x.webp';
import { useEffect, useState } from 'react';

export interface IHomeGrid {
  sampleTextProp: string;
}

const classEmblems = {
  mage: mageEmblem,
  druid: druidEmblem,
  hunter: hunterEmblem,
  priest: priestEmblem,
  rogue: rogueEmblem,
  paladin: paladinEmblem,
  shaman: shamanEmblem,
  demonhunter: demonhunterEmblem,
  warlock: warlockEmblem,
  warrior: warriorEmblem,
};


export default function HomeGrid() {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

useEffect(() => {
  setWindowWidth(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const imageSize = windowWidth >= 1280 ? 150 : 80; // 1280 is the breakpoint for 'xl' in Tailwind by default

  return (
    <div className="grid sm:grid-cols-5 grid-cols-3 sm:gap-8 gap-3 w-4/6 justify-items-center">
      {Object.entries(classEmblems).map(([className, emblemImage]) => {
        // Handling special case of 'Demonhunter'
        const displayName =
          className === 'demonhunter'
            ? 'Demon Hunter'
            : capitalizeFirstLetter(className);

        return (
          <div
            key={className}
            className="max-sm:w-3/4 rounded-full hover:text-white text-goldFont"
          >
            <button onClick={() => router.push(`/class/${className}`)}>
              <Image
                className="hover:shadow-aura active:shadow-aura rounded-full"
                src={emblemImage}
                height={120}
                width={120}
                alt=""
              ></Image>
              <p className="text-center sm:text-md">{displayName}</p>
            </button>
          </div>
        );
      })}
    </div>
  );
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
