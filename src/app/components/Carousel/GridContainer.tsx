'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import leftGlow from '../../../../public/Arrow left Glow.svg';
import left from '../../../../public/Arrow left.svg';
import rightGlow from '../../../../public/Arrow right Glow.svg';
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
    e?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [currentSlide]);

  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

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
    setCurrentSlide(1);
  }
  function handleSecond() {
    setCurrentSlide(2);
  }
  function handleThird() {
    setCurrentSlide(3);
  }
  function handleFourth() {
    setCurrentSlide(4);
  }
  function handleFifth() {
    setCurrentSlide(5);
  }

  function handleToTail() {
    if (tail) {
      while (endIndex < tail.index) {
        handleNextIndex();
      }
    }
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
        {/* Left button with hover effect */}
        <button
          className="absolute left-0"
          onClick={() => handleSlideLeft()}
          onMouseEnter={() => setIsLeftHovered(true)} // Add this
          onMouseLeave={() => setIsLeftHovered(false)} // Add this
        >
          <Image src={isLeftHovered ? leftGlow : left} alt="left"></Image>
        </button>

        {/* Right button with hover effect */}
        <button
          className="absolute right-0"
          onClick={() => handleSlideRight()}
          onMouseEnter={() => setIsRightHovered(true)} // Add this
          onMouseLeave={() => setIsRightHovered(false)} // Add this
        >
          <Image src={isRightHovered ? rightGlow : right} alt="right"></Image>
        </button>
      </div>
      <div className="flex flex-row  justify-center items-centerrounded-full px-1 text-white h-16">
        <div className=" flex flex-row justify-between gap-10 rounded-full h-[58px] ">
          {tail?.index && tail.index > 1 ? (
            <>
              {/* Example for the first button */}
              <button
                className={`${
                  startIndex + 1 === currentSlide + startIndex
                    ? 'font-outline-1 rounded-lg p-0.5 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-lg drop-shadow-lg'
                    : ''
                } ${startIndex < 0 ? 'hidden' : ''}`}
                onClick={() => handleFirst()}
              >
                <div
                  className={`${
                    startIndex + 1 === currentSlide + startIndex
                      ? 'bg-brown text-white text-xs text-center p-1 h-full rounded-lg flex flex-row justify-center gap-1 items-center'
                      : ''
                  } ${startIndex < 0 ? 'hidden' : ''}`}
                >
                  {startIndex + 1}
                </div>
              </button>

              {/* Example for the second button */}
              <button
                className={`${
                  startIndex + 2 === currentSlide + startIndex
                    ? 'font-outline-1 rounded-lg p-0.5 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-lg drop-shadow-lg'
                    : ''
                } ${startIndex + 2 > tail!.index ? 'hidden' : ''} ${
                  startIndex < -1 ? 'hidden' : ''
                }`}
                onClick={() => handleSecond()}
              >
               <div className={`${
                  startIndex + 2 === currentSlide + startIndex
                    ? 'bg-brown text-white text-xs text-center p-1 h-full rounded-lg flex flex-row justify-center gap-1 items-center'
                    : ''
                } ${startIndex + 2 > tail!.index ? 'hidden' : ''} ${
                  startIndex < -1 ? 'hidden' : ''
                }`}> {startIndex + 2}</div>
              </button>
              {/* Example for the third button */}
              <button
                className={`${
                  startIndex + 3 === currentSlide + startIndex
                    ? 'font-outline-1 rounded-lg p-0.5 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-lg drop-shadow-lg'
                    : ''
                } ${startIndex + 3 > tail!.index ? 'hidden' : ''} ${
                  startIndex < 0 ? 'hidden' : ''
                }`}
                onClick={() => handleThird()}
              >
               <div className={`${
                  startIndex + 3 === currentSlide + startIndex
                    ? 'bg-brown text-white text-xs text-center p-1 h-full rounded-lg flex flex-row justify-center gap-1 items-center'
                    : ''
                } ${startIndex + 3 > tail!.index ? 'hidden' : ''} ${
                  startIndex < 0 ? 'hidden' : ''
                }`}> {startIndex + 3}</div>
              </button>

              {/* Example for the fourth button */}
              <button
                className={`${
                  startIndex + 4 === currentSlide + startIndex
                    ? 'font-outline-1 rounded-lg p-0.5 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-lg drop-shadow-lg'
                    : ''
                } ${startIndex + 4 > tail!.index ? 'hidden' : ''} ${
                  startIndex < 0 ? 'hidden' : ''
                }`}
                onClick={() => handleFourth()}
              >
                <div className={`${
                  startIndex + 4 === currentSlide + startIndex
                    ? 'bg-brown text-white text-xs text-center p-1 h-full rounded-lg flex flex-row justify-center gap-1 items-center'
                    : ''
                } ${startIndex + 4 > tail!.index ? 'hidden' : ''} ${
                  startIndex < 0 ? 'hidden' : ''
                }`}>{startIndex + 4}</div>
              </button>

              {/* Example for the fifth button */}
              <button
                className={`${
                  startIndex + 5 === currentSlide + startIndex
                    ? 'font-outline-1 rounded-lg p-0.5 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-lg drop-shadow-lg'
                    : ''
                } ${startIndex + 5 > tail!.index ? 'hidden' : ''}`}
                onClick={() => handleFifth()}
              >
                <div className={`${
                  startIndex + 5 === currentSlide + startIndex
                    ? 'bg-brown text-white text-xs text-center p-1 h-full rounded-lg flex flex-row justify-center gap-1 items-center'
                    : ''
                } ${startIndex + 5 > tail!.index ? 'hidden' : ''}`}>{startIndex + 5}</div>
              </button>

              {/* Example for the next button (using ellipsis) */}
              <button className={``} onClick={() => handleNextIndex()}>
                ...
              </button>
              <button
                onClick={() => {
                  handleToTail();
                  setCurrentSlide(1);
                }}
                className=""
              >
                {(tail ? tail!.index : -1) < 1 ? 1 : tail ? tail!.index + 1 : 0}
              </button>
            </>
          ) : (
            <button className="rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg">
              1
            </button>
          )}
        </div>
      </div>
    </>
  );
}
