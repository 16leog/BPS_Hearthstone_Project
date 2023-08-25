import Filters2 from '@/app/components/Filters/Filters2';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import exit from 'public/exitSearch.svg';
import notFound from '../../../../public/no cards found_2023-08-09/no cards found@2x.webp';
import { getAllCards } from '../../api/getAllCards';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '600',
  variable: '--font-montserrat',
});

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const key = searchParams.q as string;
  console.log(key);
  const cards = await getAllCards(key);
  if (cards === undefined) {
    return (
      <div className="bg-homepageBackground bg-cover min-h-screen">
        <div className="p-7">
          <Link href="/">
            <div className="flex text-goldFont items-center text-xl cursor-pointer">
              <p className="mr-2">CANCEL SEARCH</p>
              <Image src={exit} alt="Cancel Search" />
            </div>
          </Link>
          <h1 className=" text-2xl  text-white">
            <a className={montserrat.className}>0 Results for {key}</a>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <Image
            src={notFound}
            alt=""
            width={500}
            height={500}
            className="max-sm:w-3/5 max-sm:h-3/5"
          ></Image>
          <p className=" sm:text-3xl text-2xl text-white drop-shadow-2xl">
            <a className={montserrat.className}>Blasphemy! No cards found.</a>
          </p>
          <div className={montserrat.className}>
            <Link
              href="/"
              className=" text-goldFont hover:underline max-sm:underline"
            >
              Your quest isn’t over! Try a new search.
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" bg-homepageBackground bg-cover min-h-screen">
        <div>
          <p className=" text-center text-white sm:text-left">
            Results for {key}
            <Link className="rounded bg-gold" href="/">
              x
            </Link>
          </p>
          <Filters2 cardClass={''} cards={cards}></Filters2>
        </div>
      </div>
    );
  }
}
