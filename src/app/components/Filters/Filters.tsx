'use client';
import React, { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';
import downArrow from '/public/Keyboard arrow down(1).svg';
import FilterScroll from '../FilterScroll/FilterScroll';
import filter from 'public/filter-6551 1(1).svg';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';

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

export default function Filters({ cardClass, cards }: FilterProps) {
  const [filteredCards, userFilteredCards] = useState(cards);
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

  function userAttackFilter(atk: string) {
    if (atk === 'Any Attack') {
      userFilteredCards(cards);
    } else if (atk === 'Attack: 0') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 0));
    } else if (atk === 'Attack: 1') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 1));
    } else if (atk === 'Attack: 2') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 2));
    } else if (atk === 'Attack: 3') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 3));
    } else if (atk === 'Attack: 4') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 4));
    } else if (atk === 'Attack: 5') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 5));
    } else if (atk === 'Attack: 6') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 6));
    } else if (atk === 'Attack: 7') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 7));
    } else if (atk === 'Attack: 8') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 8));
    } else if (atk === 'Attack: 9') {
      userFilteredCards(filteredCards.filter((card) => card.attack === 9));
    } else if (atk === 'Attack: 10+') {
      userFilteredCards(filteredCards.filter((card) => card.attack >= 10));
    }
    toggleAttack();
  }
  function userHealthFilter(hlth: string) {
    if (hlth === 'Any Health') {
      userFilteredCards(cards);
    } else if (hlth === 'Health: 0') {
      userFilteredCards(filteredCards.filter((card) => card.health === 0));
    } else if (hlth === 'Health: 1') {
      userFilteredCards(filteredCards.filter((card) => card.health === 1));
    } else if (hlth === 'Health: 2') {
      userFilteredCards(filteredCards.filter((card) => card.health === 2));
    } else if (hlth === 'Health: 3') {
      userFilteredCards(filteredCards.filter((card) => card.health === 3));
    } else if (hlth === 'Health: 4') {
      userFilteredCards(filteredCards.filter((card) => card.health === 4));
    } else if (hlth === 'Health: 5') {
      userFilteredCards(filteredCards.filter((card) => card.health === 5));
    } else if (hlth === 'Health: 6') {
      userFilteredCards(filteredCards.filter((card) => card.health === 6));
    } else if (hlth === 'Health: 7') {
      userFilteredCards(filteredCards.filter((card) => card.health === 7));
    } else if (hlth === 'Health: 8') {
      userFilteredCards(filteredCards.filter((card) => card.health === 8));
    } else if (hlth === 'Health: 9') {
      userFilteredCards(filteredCards.filter((card) => card.health === 9));
    } else if (hlth === 'Health: 10+') {
      userFilteredCards(filteredCards.filter((card) => card.health >= 10));
    }
    toggleHealth();
  }
  function userTypeFilter(type: string) {
    if (type === 'Any Type') {
      userFilteredCards(cards);
    } else if (type === 'Hero') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Hero'));
    } else if (type === 'Minion') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Minion'));
    } else if (type === 'Spell') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Spell'));
    } else if (type === 'Weapon') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Weapon'));
    } else if (type === 'Location') {
      userFilteredCards(
        filteredCards.filter((card) => card.type === 'Location')
      );
    }
    toggleCardType();
  }

  function userMinionFilter(race: string) {
    if (race === 'All') {
      userFilteredCards(cards);
    } else if (race === 'Beast') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Beast'));
    } else if (race === 'Demon') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Demon'));
    } else if (race === 'Dragon') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Dragon'));
    } else if (race === 'Elemental') {
      userFilteredCards(
        filteredCards.filter((card) => card.race === 'Elemental')
      );
    } else if (race === 'Mech') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Mech'));
    } else if (race === 'Murloc') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Murloc'));
    } else if (race === 'Naga') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Naga'));
    } else if (race === 'Pirate') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Pirate'));
    } else if (race === 'Quilboar') {
      userFilteredCards(
        filteredCards.filter((card) => card.race === 'Quilboar')
      );
    } else if (race === 'Totem') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Totem'));
    } else if (race === 'Undead') {
      userFilteredCards(filteredCards.filter((card) => card.race >= 'Undead'));
    }
    toggleMinionType();
  }
  function useRarityFilter(rarity: string) {
    if (rarity === 'Any Rarity') {
      userFilteredCards(cards);
    } else if (rarity === 'Common') {
      userFilteredCards(
        filteredCards.filter((card) => card.rarity === 'Common')
      );
    } else if (rarity === 'Free') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Free'));
    } else if (rarity === 'Rare') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Rare'));
    } else if (rarity === 'Epic') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Epic'));
    } else if (rarity === 'Legendary') {
      userFilteredCards(
        filteredCards.filter((card) => card.rarity === 'Legendary')
      );
    }
    toggleRarity();
  }
  function useKeywordFilter(mechanics: string) {
    if (mechanics === 'Any Keyword') {
      userFilteredCards(cards);
    } else if (mechanics === 'Adapt') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Adapt';
          }
        })
      );
    } else if (mechanics === 'Battlecry') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Battlecry';
          }
        })
      );
    } else if (mechanics === 'Charge') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Charge';
          }
        })
      );
    } else if (mechanics === 'Colosal +X') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Colosal +X';
          }
        })
      );
    } else if (mechanics === 'Combo') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Combo';
          }
        })
      );
    } else if (mechanics === 'Corpse') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Corpse';
          }
        })
      );
    } else if (mechanics === 'Corrupt') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Corrupt';
          }
        })
      );
    } else if (mechanics === 'Counter') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Counter';
          }
        })
      );
    } else if (mechanics === 'Deathrattle') {
      userFilteredCards(
        filteredCards.filter((card) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Deathrattle';
          }
        })
      );
    }
    toggleKeywords();
  }

  return (
    <div className=" max-w-full">
      <h1 className=" text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1"></h1>
      <div className="flex flex-col justify-center items-center mt-36 ">
        <button className=" bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end sm:hidden">
          <p className=" bg-navbarColor hover:bg-accents_2 w-[250px] h-[58px] text-white hover:text-gold_2 text-md text-center p-3 rounded-full flex flex-row justify-center items-center">
            Manage filters
          </p>
        </button>
      </div>
      <div className="  max-sm:hidden flex flex-row w-full justify-around items-start max-lg:flex-col max-lg:gap-5"></div>
      {/* Mana bar */}
      <div className="flex flex-row items-center gap-8 mx-20 max-lg:flex-col max-lg:gap-5 max-sm:hidden justify-center">
        <p className="text-cyan-400 text-2xl font-outline-1">Mana</p>
        <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white h-16">
          <div className=" flex flex-row justify-between bg-brown  rounded-full h-[58px] ">
            <button
              className=" font-outline-1 mr-1 w-12 text-xl drop-shadow-lg "
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 0)
                );
              }}
            >
              0
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 1)
                );
              }}
            >
              1
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 2)
                );
              }}
            >
              2
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 3)
                );
              }}
            >
              3
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 4)
                );
              }}
            >
              4
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 5)
                );
              }}
            >
              5
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 6)
                );
              }}
            >
              6
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 7)
                );
              }}
            >
              7
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 8)
                );
              }}
            >
              8
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! === 9)
                );
              }}
            >
              9
            </button>
            <button
              className="font-outline-1 mr-1 w-12 text-xl drop-shadow-lg"
              onClick={() => {
                userFilteredCards(
                  filteredCards.filter((card) => card.mana! >= 10)
                );
              }}
            >
              10+
            </button>
          </div>
        </div>

        {/*Sortby Row */}
        <div className="flex flex-row gap-5 items-start ">
          <p className=" font-montserrat font-thin text-white text-xl mx-auto">
            sort by:
          </p>
          <div className=" flex flex-col items-center gap-4 ">
            <div className="flex flex-col items-center">
              <FilterButton
                text={manafilter}
                width={'64'}
                innerwidth={'250'}
                color={'brown'}
                image2={downArrow}
                funct={toggleMana}
              ></FilterButton>
            </div>
            {manaToggle && (
              <FilterScroll list={mana} funct={userManaFilter}></FilterScroll>
            )}
          </div>
          <div className="">
            <FilterButton
              text={'Filter'}
              width={'52'}
              innerwidth={'200'}
              color="brown"
              image={filter}
              funct={toggleFilter}
            ></FilterButton>
          </div>
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
              color={'brown'}
              image2={downArrow}
              funct={toggleAttack}
            ></FilterButton>
            {attackToggle && (
              <FilterScroll list={atk} funct={userAttackFilter}></FilterScroll>
            )}
          </div>
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
      <div className="mt-20"></div>
      <GridContainer cards={filteredCards}></GridContainer>
    </div>
  );
}
