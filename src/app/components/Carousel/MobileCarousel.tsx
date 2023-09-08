import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import leftGlow from '../../../../public/Arrow left Glow.svg';
import left from '../../../../public/Arrow left.svg';
import rightGlow from '../../../../public/Arrow right Glow.svg';
import right from '../../../../public/Arrow right.svg';
import { CardClass, SplitIntoSmallerLists } from '../../../../types';
import CarouselGrid from './CarouselGrid';
type CarouselProps = {
  cards: CardClass[];
};

export default function MobileCarousel({ cards }: CarouselProps) {
  let [startMobileIndex, setMobileStartIndex] = useState(0);
  let [endMobileIndex, setMobileEndIndex] = useState(4);
  const [mobileSlide, setMobileSlide] = useState(1);
  const smallerListsMobile = SplitIntoSmallerLists(cards, 1);
  const eightMobile = smallerListsMobile.getItemsBetweenIndexes(
    startMobileIndex,
    endMobileIndex
  );
  const mobileRef = useRef<HTMLDivElement>(null);
  const tailMobile = smallerListsMobile.getTail();
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);
  useEffect(() => {
    let f = document.getElementById(mobileSlide.toString());
    console.log(mobileSlide);
    f?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, [mobileSlide]);

  const scrollToItem = (index: number) => {
    const item = document.getElementById(index.toString());
    console.log(item);
    if (item && mobileRef.current) {
      mobileRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // Mobile
  function handleMobileNextIndex() {
    if (endMobileIndex >= tailMobile!.index) {
      setMobileStartIndex(0);
      setMobileEndIndex(4);
      setMobileSlide(1);
    } else {
      startMobileIndex = startMobileIndex + 5;
      endMobileIndex = endMobileIndex + 5;
      setMobileStartIndex(startMobileIndex);
      setMobileEndIndex(endMobileIndex);
    }
  }
  function handleMobilePreviousIndex() {
    if (startMobileIndex <= 0) {
      setMobileStartIndex(tailMobile!.index - 4);
      setMobileEndIndex(tailMobile!.index);
      setMobileSlide(5);
    } else {
      startMobileIndex = startMobileIndex - 5;
      endMobileIndex = endMobileIndex - 5;
      setMobileStartIndex(startMobileIndex);
      setMobileEndIndex(endMobileIndex);
    }
  }

  function handleMobileSlideRight() {
    if (mobileSlide === 5) {
      handleMobileNextIndex();
      setMobileSlide(1);
    } else {
      setMobileSlide(mobileSlide + 1);
      scrollToItem(mobileSlide);
    }
  }
  function handleMobileSlideLeft() {
    if (mobileSlide === 1) {
      handleMobilePreviousIndex();
      setMobileSlide(5);
    } else {
      setMobileSlide(mobileSlide - 1);
    }
  }
  function handleMobileFirst() {
    setMobileSlide(1);
  }
  function handleMobileSecond() {
    setMobileSlide(2);
  }
  function handleMobileThird() {
    setMobileSlide(3);
  }
  function handleMobileFourth() {
    setMobileSlide(4);
  }
  function handleMobileFifth() {
    setMobileSlide(5);
  }

  return (
    <>
      <div
        ref={mobileRef}
        className="sm:hidden snap-x snap-mandatory grid grid-cols-8 no-scrollbar overflow-x-scroll gap-[400px] w-full items-center"
      >
        {eightMobile.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className=" bottom-14 snap-start"
          >
            <CarouselGrid cardList={list}></CarouselGrid>
          </div>
        ))}

        {/* Left button with hover effect */}
        <button
          className="absolute left-0"
          onClick={() => handleMobileSlideLeft()}
          onMouseEnter={() => setIsLeftHovered(true)} // Add this
          onMouseLeave={() => setIsLeftHovered(false)} // Add this
        >
          <Image src={isLeftHovered ? leftGlow : left} alt="left" height={50} width={50}></Image>
        </button>

        {/* Right button with hover effect */}
        <button
          className="absolute right-0"
          onClick={() => handleMobileSlideRight()}
          onMouseEnter={() => setIsRightHovered(true)} // Add this
          onMouseLeave={() => setIsRightHovered(false)} // Add this
        >
          <Image src={isRightHovered ? rightGlow : right} alt="right" height={50} width={50}></Image>
        </button>
      </div>
      <div className="sm:hidden flex flex-row  justify-center items-center rounded-full px-1 text-white h-16">
        <div className=" flex flex-row justify-between gap-10 max-sm:gap-0 rounded-full h-[58px] ">
          <button
            className={`${
              startMobileIndex < 0 ? 'invisible' : ''
            } rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg`}
            onClick={() => handleMobileFirst()}
          >
            {startMobileIndex + 1}
          </button>
          <button
            className={`${
              startMobileIndex + 2 > (tailMobile ? tailMobile!.index : 0)
                ? 'invisible'
                : ''
            } ${
              startMobileIndex < -1 ? 'invisible' : ''
            } rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg`}
            onClick={() => handleMobileSecond()}
          >
            {startMobileIndex + 2}
          </button>
          <button
            className={`${
              startMobileIndex + 3 > (tailMobile ? tailMobile!.index : 0)
                ? 'invisible'
                : ''
            } ${
              startMobileIndex + 2 > (tailMobile ? tailMobile!.index : 0)
                ? 'invisible'
                : ''
            } rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg`}
            onClick={() => handleMobileThird()}
          >
            {startMobileIndex + 3}
          </button>
          <button
            className={`${
              startMobileIndex + 4 > (tailMobile ? tailMobile!.index : 0)
                ? 'invisible'
                : ''
            } ${
              startMobileIndex + 2 > (tailMobile ? tailMobile!.index : 0)
                ? 'invisible'
                : ''
            } rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg`}
            onClick={() => handleMobileFourth()}
          >
            {startMobileIndex + 4}
          </button>
          <button
            className={`${
              startMobileIndex + 5 > (tailMobile ? tailMobile!.index : 0)
                ? 'invisible'
                : ''
            } rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg`}
            onClick={() => handleMobileFifth()}
          >
            {startMobileIndex + 5}
          </button>
          <button
            className="rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg"
            onClick={() => handleMobileNextIndex()}
          >
            ...
          </button>

          <button className="sm:hidden rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 drop-shadow-lg">
            {(tailMobile ? tailMobile!.index : -1) < 1
              ? 1
              : tailMobile
              ? tailMobile!.index + 1
              : 0}
          </button>
        </div>
      </div>
    </>
  );
}
