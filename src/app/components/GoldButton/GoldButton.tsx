import React, { useState } from 'react';
import Image from 'next/image';
import downArrow from '/public/Keyboard arrow down.svg';
import mageEmblem from 'public/mage emblem_2023-07-21/mage emblem@3x.webp';
import druidEmblem from 'public/druid emblem_2023-07-21/druid emblem@3x.webp';
import hunterEmblem from 'public/hunter emblem_2023-07-21/hunter emblem@3x.webp';
import priestEmblem from 'public/priest emblem_2023-07-21/priest emblem@3x.webp';
import rougeEmblem from 'public/rouge emblem_2023-07-21/rouge emblem@3x.webp';
import paladinEmblem from 'public/paladin emblem_2023-07-21/paladin emblem@3x.webp';
import shamanEmblem from 'public/shaman emblem_2023-07-21/shaman emblem@3x.webp';
import demonhunterEmblem from 'public/demonhunter emblem_2023-07-21/demonhunter emblem@3x.webp';
import warlockEmblem from 'public/warlock emblem_2023-07-21/warlock emblem@3x.webp';
import warriorEmblem from 'public/warrior emblem_2023-07-21/warrior emblem@3x.webp';
import { useRouter } from 'next/navigation';
const classEmblems = {
  mage: mageEmblem,
  druid: druidEmblem,
  hunter: hunterEmblem,
  priest: priestEmblem,
  rouge: rougeEmblem,
  paladin: paladinEmblem,
  shaman: shamanEmblem,
  demonhunter: demonhunterEmblem,
  warlock: warlockEmblem,
  warrior: warriorEmblem,
};

const classNames = [
  'mage',
  'druid',
  'hunter',
  'priest',
  'rouge',
  'paladin',
  'shaman',
  'demonhunter',
  'warlock',
  'warrior',
];

export default function GoldButton() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    toggle ? setToggle(false) : setToggle(true);
  }
  return (
    <div>
      <button
        onClick={handleToggle}
        className="  bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-52 flex flex-col justify-center items-center justify-self-end"
      >
        <div className="  bg-accents_2 w-[200px]  h-[52px] text-brown text-center p-3 rounded-full flex flex-row justify-center  ">
          <p className="px-9 text-shadow">Classes</p>
          <Image src={downArrow} alt="" className="flex flex-row "></Image>
        </div>
      </button>
      {toggle && (
        <div
          className={` absolute mt-2 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 h-auto p-1 z-50 w-52  rounded-xl lg:absolute left flex flex-col items-center`}
        >
          <div className="flex flex-col   bg-brown w-full z-50 max-h-96 rounded-xl text-shadow-lg shadow-black ">
            {Object.entries(classEmblems).map(([className, emblem]) => (
              <button
                key={className}
                className=" hover:text-accents text-white text-left px-2 py-1 flex flex-row justify-between"
                onClick={() =>
                  router.push(
                    `/class/${className.replace('DemonHunter', 'Demon Hunter')}`
                  )
                }
              >
                {className === 'demonhunter'
                  ? 'Demon Hunter'
                  : capitalizeFirstLetter(className)}
                <Image src={emblem} alt="" width={30} height={30}></Image>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
