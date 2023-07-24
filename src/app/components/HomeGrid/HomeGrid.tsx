import Image from 'next/image';
import mageEmblem from 'public/mage emblem_2023-07-21/mage emblem@3x.webp';
import druidEmblem from 'public/druid emblem_2023-07-21/druid emblem@3x.webp';
import hunterEmblem from 'public/hunter emblem_2023-07-21/hunter emblem@3x.webp';
import priestEmblem from 'public/priest emblem_2023-07-21/priest emblem@3x.webp';
import rougeEmblem from 'public/rouge emblem_2023-07-21/rouge emblem@3x.webp';
import paladinEmblem from 'public/paladin emblem_2023-07-21/paladin emblem@3x.webp';
import shamanEmblem from 'public/shaman emblem_2023-07-21/shaman emblem@3x.webp';
import demonhunterEmblem from 'public/demon hunter emblem_2023-07-21/demon hunter emblem@3x.webp';
import warlockEmblem from 'public/warlock emblem_2023-07-21/warlock emblem@3x.webp';
import warriorEmblem from 'public/warrior emblem_2023-07-21/warrior emblem@3x.webp';

export interface IHomeGrid {
  sampleTextProp: string;
}

export default function HomeGrid() {
  return (
    <div className="grid sm:grid-cols-5 grid-cols-3 sm:gap-20 gap-4 mx-7 align-middle justify-items-center items-center">
      <div className=" max-sm:w-3/4 rounded-full hover:text-white hover:text-shadow-outline text-goldFont">
        <button className="">
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={mageEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className="text-center sm:text-2xl ">Mage</p>
        </button>
      </div>

      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={druidEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Druid</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={hunterEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Hunter</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={priestEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Priest</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={rougeEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Rouge</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={paladinEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Paladin</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={shamanEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Shaman</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={demonhunterEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl text-l ">Demon Hunter</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={warlockEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Warlock</p>
        </button>
      </div>
      <div className=" max-sm:w-3/4 text-goldFont hover:text-white ">
        <button>
          <Image
            className=" hover:shadow-aura  active:shadow-aura rounded-full"
            src={warriorEmblem}
            height={164}
            width={164}
            alt=""
          ></Image>
          <p className=" text-center sm:text-2xl ">Warrior</p>
        </button>
      </div>
    </div>
  );
}
