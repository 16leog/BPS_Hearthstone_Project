'use client';
import Image from 'next/image';
import homepageLogo from 'public/homepage_logo 1_2023-07-21/homepage_logo 1@3x.webp';
import Searchbar from './components/Searchbar/Searchbar';
import HomeGrid from './components/HomeGrid/HomeGrid';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
    <main className="flex min-h-screen flex-col items-center bg-cover bg-homepageBackground">
      <div className="m-8">
        <Image
          src={homepageLogo}
          alt={'hearthstone'}
          width={540}
          height={250}
        ></Image>
      </div>
      <Searchbar sampleTextProp="sampleTextProp" />
      <HomeGrid />
    </main>
  );
}
