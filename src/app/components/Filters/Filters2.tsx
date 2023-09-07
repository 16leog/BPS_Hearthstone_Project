'use client';
import { Montserrat } from 'next/font/google';
import filter from 'public/filter-6551 1(1).svg';
import { useEffect, useState } from 'react';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';
import MobileCarousel from '../Carousel/MobileCarousel';
import FilterButton from '../FilterButton/FilterButton';
import FilterScroll from '../FilterScroll/FilterScroll';
import downArrow from '/public/Keyboard arrow down(1).svg';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-montserrat',
});
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

type FilterProps = {
  cardClass: string;
  cards: CardClass[];
};

export default function Filters2({ cardClass, cards }: FilterProps) {
  const [originalCards, setOriginalCards] = useState(cards);
  const [filteredCards, userFilteredCards] = useState(originalCards);
  const [filterToggle, userFilterToggle] = useState(false);
  const [manaToggle, userManaToggle] = useState(false);
  const [attackToggle, userAttackToggle] = useState(false);
  const [healthToggle, userHealthToggle] = useState(false);
  const [cardTypeToggle, userCardTypeToggle] = useState(false);
  const [minionTypeToggle, userMinionTypeToggle] = useState(false);
  const [rarityToggle, userRarityToggle] = useState(false);
  const [keywordsToggle, userKeywordsToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [manafilter, userManafilter] = useState(mana[0]);

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  function clearAllFilters() {
    userFilteredCards(cards);
    setActiveFilters([]);
  }

  function clearFilter(index: number) {
    const newFilters = [...activeFilters];
    newFilters.splice(index, 1);
    setActiveFilters(newFilters);

    // Since we're clearing the filter, revert to original cards
    userFilteredCards(cards);
  }

  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({});

  useEffect(() => {
    // only execute all the code below in client side
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //Toggle functions
  function handleToggle() {
    setToggle(!toggle);
    userManaToggle(false);
    userAttackToggle(false);
    userHealthToggle(false);
    userCardTypeToggle(false);
    userMinionTypeToggle(false);
    userRarityToggle(false);
    userKeywordsToggle(false);
  }

  function toggleFilter() {
    userFilterToggle(!filterToggle);
    // Do not change the state for userFilterToggle here
  }

  function toggleMana() {
    userManaToggle(!manaToggle);
    userAttackToggle(false);
    userHealthToggle(false);
    userCardTypeToggle(false);
    userMinionTypeToggle(false);
    userRarityToggle(false);
    userKeywordsToggle(false);
  }

  function toggleAttack() {
    userAttackToggle(!attackToggle);
    userManaToggle(false);
    userHealthToggle(false);
    userCardTypeToggle(false);
    userMinionTypeToggle(false);
    userRarityToggle(false);
    userKeywordsToggle(false);
  }

  function toggleHealth() {
    userHealthToggle(!healthToggle);
    userManaToggle(false);
    userAttackToggle(false);
    userCardTypeToggle(false);
    userMinionTypeToggle(false);
    userRarityToggle(false);
    userKeywordsToggle(false);
  }

  function toggleCardType() {
    userCardTypeToggle(!cardTypeToggle);
    userManaToggle(false);
    userAttackToggle(false);
    userHealthToggle(false);
    userMinionTypeToggle(false);
    userRarityToggle(false);
    userKeywordsToggle(false);
  }

  function toggleMinionType() {
    userMinionTypeToggle(!minionTypeToggle);
    userManaToggle(false);
    userAttackToggle(false);
    userHealthToggle(false);
    userCardTypeToggle(false);
    userRarityToggle(false);
    userKeywordsToggle(false);
  }

  function toggleRarity() {
    userRarityToggle(!rarityToggle);
    userManaToggle(false);
    userAttackToggle(false);
    userHealthToggle(false);
    userCardTypeToggle(false);
    userMinionTypeToggle(false);
    userKeywordsToggle(false);
  }

  function toggleKeywords() {
    userKeywordsToggle(!keywordsToggle);
    userManaToggle(false);
    userAttackToggle(false);
    userHealthToggle(false);
    userCardTypeToggle(false);
    userMinionTypeToggle(false);
    userRarityToggle(false);
  }
  function userManaFilter(selectedMana: string | number) {
    if (selectedMana === 'Any Mana') {
      userFilteredCards(originalCards);
    } else if (selectedMana === '10+') {
      userFilteredCards(
        originalCards.filter((card) => parseInt(card.mana) >= 10)
      );
    } else {
      userFilteredCards(
        originalCards.filter((card) => parseInt(card.mana) === selectedMana)
      );
    }
    setActiveFilters(['Mana: ' + selectedMana]);
  }

  function userAttackFilter(atk: string) {
    // Instead of filtering from 'filteredCards', always filter from the 'originalCards'
    if (atk === 'Any Attack') {
      // Reset to the original data
      userFilteredCards(originalCards);
    } else {
      let attackValue = parseInt(atk.split(' ')[1]);
      if (isNaN(attackValue)) {
        // Handles the 'Attack: 10+' case
        userFilteredCards(
          originalCards.filter((card) => parseInt(card.attack) >= 10)
        );
      } else {
        userFilteredCards(
          originalCards.filter((card) => parseInt(card.attack) === attackValue)
        );
      }
    }

    // Set the active filter (for displaying the chip)
    setActiveFilters([atk]);
    toggleAttack();
  }
  function userHealthFilter(hlth: string) {
    if (hlth === 'Any Health') {
      userFilteredCards(originalCards);
      return;
    }

    let healthValue = parseInt(hlth.split(' ')[1]);

    if (isNaN(healthValue)) {
      userFilteredCards(
        originalCards.filter((card) => parseInt(card.health) >= 10)
      );
    } else {
      userFilteredCards(
        originalCards.filter((card) => parseInt(card.health) === healthValue)
      );
    }
    setActiveFilters([hlth]);
    toggleHealth();
  }

  function userTypeFilter(type: string) {
    if (type === 'Any Type') {
      userFilteredCards(originalCards);
    } else {
      userFilteredCards(originalCards.filter((card) => card.type === type));
    }
    setActiveFilters([type]);
    toggleCardType();
  }

  function userMinionFilter(race: string) {
    if (race === 'All') {
      userFilteredCards(originalCards);
    } else {
      userFilteredCards(originalCards.filter((card) => card.race === race));
    }
    setActiveFilters([race]);
    toggleMinionType();
  }
  function useRarityFilter(rarity: string) {
    if (rarity === 'Any Rarity') {
      userFilteredCards(originalCards);
    } else {
      userFilteredCards(originalCards.filter((card) => card.rarity === rarity));
    }
    setActiveFilters([rarity]);
    toggleRarity();
  }

  function useKeywordFilter(mechanics: string) {
    if (mechanics === 'Any Keyword') {
      userFilteredCards(originalCards);
    } else {
      userFilteredCards(
        originalCards.filter(
          (card) =>
            card.mechanics &&
            card.mechanics.some(
              (mech: { name: string }) => mech && mech.name === mechanics
            )
        )
      );
    }
    setActiveFilters([mechanics]);
    toggleKeywords();
  }

  return (
    <div className=" max-w-full">
      <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1"></h1>
      <div className="flex flex-col justify-center items-center mt-20 max-sm:mt-3">
        <button
          onClick={handleToggle}
          className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden"
        >
          <p className=" bg-brown hover:bg-accents_2 w-[250px] h-[58px] text-white hover:text-gold_2 text-md text-center p-3 rounded-full flex flex-row justify-center items-center">
            Manage filters
          </p>
        </button>
        {toggle && (
          <div className="sm:hidden animate-open-menu absolute bg-brown bg-cover bg-opacity-80 w-full h-full text-4xl flex flex-col items-center top-0 left-0 z-30">
            <button
              className=" place-self-end p-4 text-white"
              onClick={handleToggle}
            >
              &#10005;
            </button>
            <div className="flex flex-col items-start text-sm gap-2 absolute">
              <div className=" flex my-4 font-thin text-white text-xl mx-auto">
                <a className={montserrat.className}>Sort By:</a>
              </div>
              <div className=" flex flex-col items-center gap-4 text-sm">
                <FilterButton
                  text={manafilter}
                  width={'64'}
                  innerwidth={'250'}
                  color={'brown'}
                  image2={downArrow}
                  funct={toggleMana}
                ></FilterButton>
                {manaToggle && (
                  <FilterScroll
                    list={mana}
                    funct={userManaFilter}
                  ></FilterScroll>
                )}
              </div>
              <FilterButton
                text={'Filter'}
                width={'52'}
                innerwidth={'200'}
                color="brown"
                image={filter}
                funct={toggleFilter}
              ></FilterButton>
              {filterToggle && (
                <div className="grid max-sm:flex max-sm:flex-col  max-sm:gap-1 max-sm:p-0   lg:grid-cols-6 grid-cols-3">
                  <div className="flex flex-col ">
                    <FilterButton
                      text={'Attack'}
                      width={'52'}
                      innerwidth={'200'}
                      color={'brown'}
                      image2={downArrow}
                      funct={toggleAttack}
                    ></FilterButton>
                    {attackToggle && (
                      <FilterScroll
                        list={atk}
                        funct={userAttackFilter}
                      ></FilterScroll>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <FilterButton
                      text={'Health'}
                      width={'52'}
                      innerwidth={'200'}
                      color={'brown'}
                      image2={downArrow}
                      funct={toggleHealth}
                    ></FilterButton>
                    {healthToggle && (
                      <FilterScroll
                        list={health}
                        funct={userHealthFilter}
                      ></FilterScroll>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <FilterButton
                      text={'Card Type'}
                      width={'52'}
                      innerwidth={'200'}
                      color={'brown'}
                      image2={downArrow}
                      funct={toggleCardType}
                    ></FilterButton>
                    {cardTypeToggle && (
                      <FilterScroll
                        list={cardType}
                        funct={userTypeFilter}
                      ></FilterScroll>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <FilterButton
                      text={'Minion Type'}
                      width={'52'}
                      innerwidth={'200'}
                      color={'brown'}
                      image2={downArrow}
                      funct={toggleMinionType}
                    ></FilterButton>
                    {minionTypeToggle && (
                      <FilterScroll
                        list={minionType}
                        funct={userMinionFilter}
                      ></FilterScroll>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <FilterButton
                      text={'Rarity'}
                      width={'52'}
                      innerwidth={'200'}
                      color={'brown'}
                      image2={downArrow}
                      funct={toggleRarity}
                    ></FilterButton>
                    {rarityToggle && (
                      <FilterScroll
                        list={rarity}
                        funct={useRarityFilter}
                      ></FilterScroll>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <FilterButton
                      text={'Keywords'}
                      width={'52'}
                      innerwidth={'200'}
                      color={'brown'}
                      image2={downArrow}
                      funct={toggleKeywords}
                    ></FilterButton>
                    {keywordsToggle && (
                      <FilterScroll
                        list={keywords}
                        funct={useKeywordFilter}
                      ></FilterScroll>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="  max-sm:hidden flex flex-row w-full justify-around items-start  max-lg:gap-5"></div>
      {/* Mana bar */}
      <div className="flex flex-row items-center gap-1 mx-20 max-lg:flex-col max-lg:gap-5 max-sm:hidden justify-center">
        <p className="text-cyan-400 text-xl font-outline-1">Mana</p>
        <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white h-16">
          <div className=" flex flex-row justify-between bg-brown  rounded-full h-[58px] ">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((manaValue) => (
              <button
                key={manaValue}
                className="font-outline-1 mx-2 w-6 text-l drop-shadow-lg"
                onClick={() => userManaFilter(manaValue)}
              >
                {manaValue}
              </button>
            ))}
            <button
              className="font-outline-1 ml-2 mr-3 w-6 text-l drop-shadow-lg"
              onClick={() => userManaFilter('10+')}
            >
              10+
            </button>
          </div>
        </div>

        {/*Sortby Row */}
        <div className="flex flex-row gap-1 items-start ">
          <div className=" flex my-4 font-thin text-white text-l ">
            <a className={montserrat.className}>Sort By:</a>
          </div>
          <div className=" flex flex-col items-center  ">
            <FilterButton
              text={manafilter}
              width={'64'}
              innerwidth={'250'}
              color={'brown'}
              image2={downArrow}
              funct={toggleMana}
            ></FilterButton>

            {manaToggle && (
              <FilterScroll list={mana} funct={userManaFilter}></FilterScroll>
            )}
          </div>
          <div className="flex flex-col items-center ">
            <FilterButton
              text={'Filter'}
              width={'52'}
              innerwidth={'200'}
              color="brown hover:bg-accents_2 hover:text-black"
              image={filter}
              funct={toggleFilter}
            ></FilterButton>
          </div>
        </div>
      </div>
      {/* Filters row */}
      {filterToggle && (
        <div className="flex justify-around  py-5  grid-cols-3  max-sm:hidden">
          <div className="flex flex-col ">
            <FilterButton
              text={'Attack'}
              width={'52'}
              innerwidth={'200'}
              color={'brown hover:bg-accents_2 hover:text-black'}
              image2={downArrow}
              funct={toggleAttack}
            ></FilterButton>
            {attackToggle && (
              <FilterScroll list={atk} funct={userAttackFilter}></FilterScroll>
            )}
          </div>
          <div className="flex flex-col ">
            <FilterButton
              text={'Health'}
              width={'52'}
              innerwidth={'200'}
              color={'brown hover:bg-accents_2 hover:text-black'}
              image2={downArrow}
              funct={toggleHealth}
            ></FilterButton>
            {healthToggle && (
              <FilterScroll
                list={health}
                funct={userHealthFilter}
              ></FilterScroll>
            )}
          </div>
          <div className="flex flex-col ">
            <FilterButton
              text={'Card Type'}
              width={'52'}
              innerwidth={'200'}
              color={'brown hover:bg-accents_2 hover:text-black'}
              image2={downArrow}
              funct={toggleCardType}
            ></FilterButton>
            {cardTypeToggle && (
              <FilterScroll
                list={cardType}
                funct={userTypeFilter}
              ></FilterScroll>
            )}
          </div>
          <div className="flex flex-col ">
            <FilterButton
              text={'Minion Type'}
              width={'52'}
              innerwidth={'200'}
              color={'brown hover:bg-accents_2 hover:text-black'}
              image2={downArrow}
              funct={toggleMinionType}
            ></FilterButton>
            {minionTypeToggle && (
              <FilterScroll
                list={minionType}
                funct={userMinionFilter}
              ></FilterScroll>
            )}
          </div>
          <div className="flex flex-col ">
            <FilterButton
              text={'Rarity'}
              width={'52'}
              innerwidth={'200'}
              color={'brown hover:bg-accents_2 hover:text-black'}
              image2={downArrow}
              funct={toggleRarity}
            ></FilterButton>
            {rarityToggle && (
              <FilterScroll
                list={rarity}
                funct={useRarityFilter}
              ></FilterScroll>
            )}
          </div>
          <div className="flex flex-col ">
            <FilterButton
              text={'Keywords'}
              width={'52'}
              innerwidth={'200'}
              color={'brown hover:bg-accents_2 hover:text-black'}
              image2={downArrow}
              funct={toggleKeywords}
            ></FilterButton>
            {keywordsToggle && (
              <FilterScroll
                list={keywords}
                funct={useKeywordFilter}
              ></FilterScroll>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center">
        {activeFilters.map((filter, index) => (
          <div
            key={index}
            className="bg-chip flex rounded-full w-24 h-8 mx-12 text-xs text-center items-center justify-center"
          >
            <button onClick={() => clearFilter(index)}>
              <p className="justify-center text-center items-center">
                {filter} x
              </p>
            </button>
          </div>
        ))}
        {activeFilters.length > 0 && (
          <div>
            <p
              className="underline cursor-pointer text-xs text-white"
              onClick={() => clearFilter(-1)}
            >
              <a className={montserrat.className}>CLEAR ALL</a>
            </p>
          </div>
        )}
      </div>

      {filteredCards.length === 0 ? (
        <div></div> // This div will be displayed if filteredCards is empty
      ) : windowSize.width! > 640 ? (
        <GridContainer cards={filteredCards}></GridContainer>
      ) : (
        <MobileCarousel cards={filteredCards}></MobileCarousel>
      )}
    </div>
  );
}
