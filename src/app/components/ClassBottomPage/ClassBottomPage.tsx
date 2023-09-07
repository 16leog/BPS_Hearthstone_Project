'use client';
import { CardClass } from '../../../../types';
import { classDataObj } from '../ClassTopPage/ClassTopPage';
import Filters from '../Filters/Filters';

type props = {
  cardClass: string;
  cards: CardClass[];
};

export default function ClassBottomPage({ cardClass, cards }: props) {
  return (
    <div
      className={`${classDataObj[cardClass].background} sm:bg-cover bg-center-custom bg-zoomed-in  flex flex-col md:min-h-[110vh] xl:min-h-[130vh]`}
    >
      <div className="items-center justify-center">
        <Filters cardClass={cardClass} cards={cards ? cards : []} />
      </div>
    </div>
  );
}
