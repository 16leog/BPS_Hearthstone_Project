'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import left from '../../../../public/Arrow left.svg';
import right from '../../../../public/Arrow right.svg';
import { CardClass, SplitIntoSmallerLists } from '../../../../types';
import CarouselGrid from './CarouselGrid';
type CarouselProps = {
  cards: CardClass[];
};

export default function GridContainer({ cards }: CarouselProps) {
  console.log(cards);
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(1);
  const smallerLists = SplitIntoSmallerLists(cards, 10);
  const eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  const tail = smallerLists.getTail();
  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, [currentSlide]);

  function handleNextIndex() {
    if (endIndex >= tail!.index) {
      setStartIndex(0);
      setEndIndex(4);
      setCurrentSlide(1);
    } else {
      startIndex = startIndex + 5;
      endIndex = endIndex + 5;
      setStartIndex(startIndex);
      setEndIndex(endIndex);
    }
  }
  function handlePreviousIndex() {
    if (startIndex <= 0) {
      setStartIndex(tail!.index - 4);
      setEndIndex(tail!.index);
      setCurrentSlide(5);
    } else {
      startIndex = startIndex - 5;
      endIndex = endIndex - 5;
      setStartIndex(startIndex);
      setEndIndex(endIndex);
    }
  }

  function handleSlideRight() {
    if (currentSlide === 5) {
      handleNextIndex();
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  function handleSlideLeft() {
    if (currentSlide === 1) {
      handlePreviousIndex();
      setCurrentSlide(5);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function handleFirst() {
    setCurrentSlide(0);
  }
  function handleSecond() {
    setCurrentSlide(1);
  }
  function handleThird() {
    setCurrentSlide(2);
  }
  function handleFourth() {
    setCurrentSlide(3);
  }
  function handleFifth() {
    setCurrentSlide(4);
  }
  
  

  return (
    <>
      <div className="snap-x snap-mandatory grid grid-cols-8 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] overflow-x-scroll overflow-y-hidden no-scrollbar w-full mx-auto items-center ">
        {eight.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className="snap-start relative bottom-14 md:-left-[900px] xl:-left-[1600px] lg:-left-[1200px] 2xl:-left-[2000px] "
          >
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))}
        <div className="relative bottom-14" id="6">
          {/* <CarouselGrid cardList={last ? last : []}></CarouselGrid> */}
        </div>
        <button className="absolute left-0 " onClick={() => handleSlideLeft()}>
          <Image src={left} alt="left" className=" "></Image>
        </button>
        <button
          className="absolute right-0 "
          onClick={() => handleSlideRight()}
        >
          <Image src={right} alt="right"></Image>
        </button>
      </div>
      <div className="flex flex-row  justify-center items-centerrounded-full px-1 text-white h-16">
        <div className=" flex flex-row justify-between gap-10 rounded-full h-[58px] ">
          {tail?.index && tail.index > 1 ? (
            <>
              {[1, 2, 3, 4, 5].map((pageNumber) => (
                <button
                  key={pageNumber}
                  className={`font-outline-1 rounded-lg bg-gradient-to-b ${
                    startIndex + pageNumber === currentSlide
                      ? 'from-gold via-gold_2 via-80% to-gold_3'
                      : ''
                  } ${
                    startIndex + pageNumber > tail!.index ||
                    startIndex + pageNumber < 1
                      ? 'invisible'
                      : ''
                  } mr-1 w-12 text-xl drop-shadow-lg`}
                  onClick={() => setCurrentSlide(startIndex + pageNumber)}
                >
                  {startIndex + pageNumber}
                </button>
              ))}
              {/* ... button */}
              <button
                className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
                onClick={() => handleNextIndex()}
              >
                ...
              </button>
              {/* Last page button */}
              <button
                className={`font-outline-1 rounded-lg bg-gradient-to-b ${
                  tail!.index === currentSlide
                    ? 'from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } mr-1 w-12 text-xl drop-shadow-lg`}
              >
                {tail!.index}
              </button>
            </>
          ) : (
            <button className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg">
              1
            </button>
          )}
        </div>
      </div>
    </>
  );
}
