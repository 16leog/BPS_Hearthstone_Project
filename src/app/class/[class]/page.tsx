import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import GoldButton from '@/app/components/GoldButton/GoldButton';

import ClassTopPage from '@/app/components/ClassTopPage/ClassTopPage';
import ClassBottomPage from '@/app/components/ClassBottomPage/ClassBottomPage';
import { getCards } from '../../api/getClassCards';

export default async function Page({ params }: { params: { class: string } }) {
  const { class: cardClass } = params;
  const cards = await getCards(cardClass);
  console.log(cardClass);
  return (
    <>
      {/* TOP PAGE */}
      <div>
        <ClassTopPage cardClass={cardClass} />
      </div>
      <div>
        <ClassBottomPage cardClass={cardClass} cards={cards ? cards : []} />
      </div>
    </>
  );
}
