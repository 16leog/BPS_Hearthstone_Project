import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function CarouselGrid({ cardList }: CarouselProps) {
  return (
    <div className="grid grid-cols-5 max-sm:grid-cols-1 w-[85vw] mt-8 justify-center items-center align-middle max-sm:mx-8 sm:mx-20 max-sm:mt-0">
      {cardList.map((card) => (
        <div key={card.cardid}>
          <Card
            id={card.cardid}
            pic={card.img}
            name={card.cardname}
            type={card.type}
            rarity={card.rarity}
            text={card.text}
            race={card.race}
            playerClass={card.playerclass}
            attack={card.attack}
            health={card.health}
            mechcanics={card.mechanics}
            cardSet={card.cardset}
            mana={card.mana}
          ></Card>
        </div>
      ))}
    </div>
  );
}
