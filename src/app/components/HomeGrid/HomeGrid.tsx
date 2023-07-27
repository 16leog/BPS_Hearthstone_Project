'use client';
import Image from 'next/image';
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

export interface IHomeGrid {
  sampleTextProp: string;
}

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

export default function HomeGrid() {
  const router = useRouter();
  return (
    <div className="grid sm:grid-cols-5 grid-cols-3 sm:gap-20 gap-4 mx-7 align-middle justify-items-center items-center">
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
                height={164}
                width={164}
                alt=""
              ></Image>
              <p className="text-center sm:text-2xl">{displayName}</p>
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
