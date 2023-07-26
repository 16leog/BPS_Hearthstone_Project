'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import GoldButton from '@/app/components/GoldButton/GoldButton';

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

function getClassSummary(classId: string): {
  title: string;
  description: string;
} {
  switch (classId) {
    case 'mage':
      return {
        title: 'My magic will tear you apart!',
        description:
          'No other hero wields the arcane with as much skill and raw power as a Mage. Using their unrivaled array of spells, Mages can wipe entire boards of minions, deal devastating amounts of damage directly to their enemy, or summon creatures of pure energy to do their bidding.',
      };
    case 'druid':
      return {
        title: 'Nature will rise against you!',
        description:
          'Preserve the balance by taking on the many forms of the wild and unleashing nature’s wrath upon your enemies. Druids are flexible combatants with nearly limitless choice in how to handle their opponents. Employ buffs, compel beasts, harness healing powers, or sling damaging spells against anything that threatens the natural order.',
      };
    case 'hunter':
      return {
        title: 'Let the hunt begin!',
        description:
          'According to Hunters, a ruthless offense of tooth and claw is better than any defense. These lone survivalists tap into their feral nature to take down their prey with hidden traps, tamed beasts, and volleys of baleful arrows.',
      };
    case 'priest':
      return {
        title: 'Light smiles upon the just!',
        description:
          'The Light calls, but shadows whisper. Heroes of righteousness, Priests have unmatched healing potential and can bestow powerful holy enchantments on their minions. However, there is no light without dark. Priests can also tap into the shadows to manipulate the minds of their enemies and deal mortifying psychic damage.',
      };
    case 'rouge':
      return {
        title: 'Watch your back!',
        description:
          'Using unseen blade, blinding speed, and subtle poison, Rogues can dispatch their enemies before escaping without a trace. Unleash a devastating chain of minions, spells, and attacks all within a single turn.',
      };
    case 'paladin':
      return {
        title: 'The Light protects those who wield it.',
        description:
          'Fearsome holy knights, Paladins make use of emboldened minions, healing spells, and Divine Shields to stand stalwart against their enemies and hold out for victory.',
      };
    case 'shaman':
      return {
        title: 'Storm, earth and fire, heed my call!',
        description:
          'Masters of the primal elements, Shaman manipulate nature’s forces to call up healing rains, unleash torrents of lava, or conjure spiritual allies to aid them in battle. A Shaman’s arsenal reflects the balance of the natural forces they wield: versatile and powerful minions, spells, buffs and damage.',
      };
    case 'demonhunter':
      return {
        title: 'You are not prepared!',
        description:
          'Turn the destructive forces of chaos against your enemies as the Demon Hunter. Using quick and devastating attacks, enormous demonic allies, and chaotic fel magics, show your enemies the hatred of 10,000 years!',
      };
    case 'warlock':
      return {
        title: 'I am your nightmare!',
        description:
          'Power-hungry practitioners of the fel arts, Warlocks have no qualms unleashing debilitating curses, reckless demons, or violent waves of hellfire. They’ll sacrifice anything to take down those who stand in their way, including their own vitality.',
      };
    case 'warrior':
      return {
        title: 'Victory or death!',
        description:
          'Seasoned fighters of unparalleled prowess, Warriors have mastery over an arsenal of weaponry and armor, allowing them to be both deadly combatants and formidable defenders. Taking damage only serves to enrage the Warrior and his Minions, triggering powerful effects that further enhance their fearsome abilities.',
      };
    default:
      return { title: '', description: '' };
  }
}

export default function Page() {
  const [classId, setClassId] = useState('');
  const [emblemSrc, setEmblemSrc] = useState(null);
  const { title, description } = getClassSummary(classId);

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
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <Image
              className="rounded-full p-6 block sm:hidden"
              src={emblemSrc}
              height={164}
              width={164}
              alt=""
            ></Image>
            <Image
              className="rounded-full p-6 hidden sm:block"
              src={emblemSrc}
              height={266}
              width={266}
              alt=""
            ></Image>
            <p className="text-3xl text-white text-outline-black">
              {classId === 'demonhunter'
                ? 'Demon Hunter'
                : classId.charAt(0).toUpperCase() + classId.slice(1)}
            </p>
          </div>

          <div className="hidden sm:block p-6">
            <GoldButton />
          </div>
        </div>
        <div className="p-6 block sm:hidden">
          <GoldButton />
        </div>
        <div className="flex flex-col gap-5 mt-36">
          <h1 className=" text-accents text-outline-black text-6xl text-center text-shadow self-center shadow-black max-sm:text-3xl max-sm:font-outline-1 max-sm:w-3/4 ">
            {title}
          </h1>
          <p className=" font-sans text-2xl text-shadow self-center shadow-black text-white w-2/3 text-center max-sm:w-3/4 max-sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
