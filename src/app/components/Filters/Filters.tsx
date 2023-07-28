import React, { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';
import downArrow from '/public/Keyboard arrow down.svg';
import FilterScroll from '../FilterScroll/FilterScroll';
import filter from 'public/filter-6551 1.svg';

const mana = ['Mana: low to high', 'Mana: high to low'];
const atk = [
  'Any Attack',
  'Attack: 0',
  'Attack: 1',
  'Attack: 2',
  'Attack: 3',
  'Attack: 4',
  'Attack: 5',
  'Attack: 6',
  'Attack: 7',
  'Attack: 8',
  'Attack: 9',
  'Attack: 10+',
];
const health = [
  'Any Health',
  'Health: 0',
  'Health: 1',
  'Health: 2',
  'Health: 3',
  'Health: 4',
  'Health: 5',
  'Health: 6',
  'Health: 7',
  'Health: 8',
  'Health: 9',
  'Health: 10+',
];

const cardType = ['Any Type', 'Hero', 'Minion', 'Spell', 'Weapon', 'Location'];

const minionType = [
  'Any Type',
  'All',
  'Beast',
  'Demon',
  'Dragon',
  'Elemental',
  'Mech',
  'Murloc',
  'Naga',
  'Pirate',
  'Quilboar',
  'Totem',
  'Undead',
];

const rarity = ['Any Rarity', 'Common', 'Free', 'Rare', 'Epic', 'Legendary'];

const keywords = [
  'Any Keyword',
  'Adapt',
  'Battlecry',
  'Charge',
  'Colosal +X',
  'Combo',
  'Corpse',
  'Corrupt',
  'Counter',
  'Deathrattle',
];
export default function Filters() {
  const [filterToggle, userFilterToggle] = useState(false);
  const [manaToggle, userManaToggle] = useState(false);
  const [attackToggle, userAttackToggle] = useState(false);
  const [healthToggle, userHealthToggle] = useState(false);
  const [cardTypeToggle, userCardTypeToggle] = useState(false);
  const [minionTypeToggle, userMinionTypeToggle] = useState(false);
  const [rarityToggle, userRarityToggle] = useState(false);
  const [keywordsToggle, userKeywordsToggle] = useState(false);
  const [manafilter, userManafilter] = useState(mana[0]);

  //Toggle functions
  function toggleFilter() {
    filterToggle ? userFilterToggle(false) : userFilterToggle(true);
  }
  function toggleMana() {
    userManaToggle(manaToggle ? false : true);
  }
  function toggleAttack() {
    userAttackToggle(attackToggle ? false : true);
  }
  function toggleHealth() {
    userHealthToggle(healthToggle ? false : true);
  }
  function toggleCardType() {
    userCardTypeToggle(cardTypeToggle ? false : true);
  }
  function toggleMinionType() {
    userMinionTypeToggle(minionTypeToggle ? false : true);
  }
  function toggleRarity() {
    userRarityToggle(rarityToggle ? false : true);
  }
  function toggleKeywords() {
    userKeywordsToggle(keywordsToggle ? false : true);
  }
  function userManaFilter() {
    if (manafilter === mana[0]) {
      toggleMana();
      userManafilter(mana[1]);
      toggleMana();
    } else if (manafilter === mana[1]) {
      userManafilter(mana[0]);
    }
  }
  return (
    <div>
      <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1"></h1>
      <div className="flex flex-col justify-center items-center mt-36 ">
        <button className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden">
          <p className=" bg-navbarColor hover:bg-accents_2 w-[250px] h-[58px] text-white hover:text-gold_2 text-md text-center p-3 rounded-full flex flex-row justify-center items-center">
            Manage filters
          </p>
        </button>
      </div>
      <div className=" bg-white max-sm:hidden flex flex-row w-full justify-around items-start max-lg:flex-col max-lg:gap-5"></div>
      {/* Mana bar */}
      <div className="flex flex-row items-center gap-8 ml-20 max-sm:hidden ">
        <p className="text-cyan-400 text-2xl font-outline-1">Mana</p>
        <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white h-16">
          <div className=" flex flex-row justify-between bg-button_bg rounded-full h-[58px] ">
            <button className=" font-outline-1 mr-1 w-12 text-xl drop-shadow-lg ">
              0
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              1
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              2
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              3
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              4
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              5
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              6
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              7
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              8
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              9
            </button>
            <button className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg">
              10+
            </button>
          </div>
        </div>

        {/*Sortby Row */}
        <div className="flex flex-row gap-5 items-start">
          <p className=" font-montserrat font-thin text-white text-xl ml-10">
            sort by:
          </p>
          <div className=" flex flex-col items-center gap-4 ">
            <div className="flex flex-col items-center">
              <FilterButton
                text={manafilter}
                width={'64'}
                innerwidth={'250'}
                color={'button_bg'}
                image2={downArrow}
                funct={toggleMana}
              ></FilterButton>
            </div>
            {manaToggle && (
              <div className="flex flex-col items-center">
                <FilterScroll list={mana} funct={userManaFilter}></FilterScroll>
              </div>
            )}
          </div>
          <FilterButton
            text={'Filter'}
            width={'52'}
            innerwidth={'200'}
            color="button_bg"
            image={filter}
            funct={toggleFilter}
          ></FilterButton>
        </div>
      </div>
      {/* Filters row */}
      {filterToggle && (
        <div className="grid gap-10 py-5  lg:grid-cols-6 grid-cols-3 max-sm:hidden">
          <div className="flex flex-col gap-2">
            <FilterButton
              text={'Attack'}
              width={'52'}
              innerwidth={'200'}
              color={'button_bg'}
              image2={downArrow}
              funct={toggleAttack}
            ></FilterButton>
            {attackToggle && (
              <FilterScroll list={atk} funct={toggleAttack}></FilterScroll>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <FilterButton
              text={'Health'}
              width={'52'}
              innerwidth={'200'}
              color={'button_bg'}
              image2={downArrow}
              funct={toggleHealth}
            ></FilterButton>
            {healthToggle && (
              <FilterScroll list={health} funct={toggleHealth}></FilterScroll>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <FilterButton
              text={'Card Type'}
              width={'52'}
              innerwidth={'200'}
              color={'button_bg'}
              image2={downArrow}
              funct={toggleCardType}
            ></FilterButton>
            {cardTypeToggle && (
              <FilterScroll
                list={cardType}
                funct={toggleCardType}
              ></FilterScroll>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <FilterButton
              text={'Minion Type'}
              width={'52'}
              innerwidth={'200'}
              color={'button_bg'}
              image2={downArrow}
              funct={toggleMinionType}
            ></FilterButton>
            {minionTypeToggle && (
              <FilterScroll
                list={minionType}
                funct={toggleMinionType}
              ></FilterScroll>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <FilterButton
              text={'Rarity'}
              width={'52'}
              innerwidth={'200'}
              color={'button_bg'}
              image2={downArrow}
              funct={toggleRarity}
            ></FilterButton>
            {rarityToggle && (
              <FilterScroll list={rarity} funct={toggleRarity}></FilterScroll>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <FilterButton
              text={'Keywords'}
              width={'52'}
              innerwidth={'200'}
              color={'button_bg'}
              image2={downArrow}
              funct={toggleKeywords}
            ></FilterButton>
            {keywordsToggle && (
              <FilterScroll
                list={keywords}
                funct={toggleKeywords}
              ></FilterScroll>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
