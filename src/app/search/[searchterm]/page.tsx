import Image from 'next/image';
import Link from 'next/link';
import { getAllCards } from '../../api/getAllCards';
import notFound from '../../../../public/no cards found_2023-08-09/no cards found@2x.webp';
import Filters from '@/app/components/Filters/Filters';

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
      <div className="flex flex-col items-center justify-center gap-10 bg-homepageBackground bg-cover min-h-screen">
        <h1 className=" text-6xl max-sm:text-center">0 Results for {key}</h1>
        <Image
          src={notFound}
          alt=""
          width={500}
          height={500}
          className="max-sm:w-3/5 max-sm:h-3/5"
        ></Image>
        <p className=" sm:text-2xl text-xl">Blasphemy! No cards found.</p>
        <Link href="/" className=" text-gold hover:underline max-sm:underline">
          Your quest isn’t over! Try a new search.
        </Link>
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
          <Filters cardClass={''} cards={cards}></Filters>
        </div>
      </div>
    );
  }
}