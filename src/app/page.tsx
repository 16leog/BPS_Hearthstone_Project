'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import homepageLogo from 'public/homepage_logo 1_2023-07-21/homepage_logo 1.webp';
import { useEffect } from 'react';
import HomeGrid from './components/HomeGrid/HomeGrid';
import Searchbar from './components/Searchbar/Searchbar';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    fetch('http://localhost:3000/api/createTable', {
      next: { revalidate: 1 },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }, []);
  return (
    <main className="flex flex-col items-center justify-center 2xl:gap-10">
      <div className="m-4 sm:hidden">
        <Image src={homepageLogo} alt={'hearthstone'}></Image>
      </div>
      <div className="m-4 max-sm:hidden">
        <Image
          src={homepageLogo}
          alt={'hearthstone'}
          width={350}
          height={350}
        ></Image>
      </div>
      <Searchbar sampleTextProp="sampleTextProp" />
      <HomeGrid />
    </main>
  );
}
