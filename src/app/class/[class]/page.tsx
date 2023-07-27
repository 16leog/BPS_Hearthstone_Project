'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import GoldButton from '@/app/components/GoldButton/GoldButton';

import ClassTopPage from '@/app/components/ClassTopPage/ClassTopPage';
import ClassBottomPage from '@/app/components/ClassBottomPage/ClassBottomPage';

export const revalidate = 1;

export default function Page({ params }: { params: { class: string } }) {
  const { class: cardClass } = params;
  console.log(cardClass);
  return (
    <>
      {/* TOP PAGE */}
      <ClassTopPage cardClass={cardClass} />
      <ClassBottomPage cardClass={cardClass} />
    </>
  );
}
