import { CardClass } from '../../../types';
import Filters2 from '../components/Filters/Filters2';

type props = {
  cardClass: string;
  cards: CardClass[];
};

export default async function Favorites({ cardClass, cards }: props) {
  const res = await fetch('http://localhost:3000/api/getData', {
    next: { revalidate: 0 },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
  return (
    <div className="flex max-sm:min-h-[90vh] min-h-screen bg-cover flex-col items-center bg-homepageBackground">
      <h1 className=" mb-5 font-aclonica z-10 mt-20 text-white sm:font-outline-4 sm:text-8xl text-shadow shadow-black text-5xl font-outline-1">
        FAVORITES
      </h1>
      <Filters2 cardClass={''} cards={res.data} />
    </div>
  );
}
