import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function CarouselGrid({ cardList }: CarouselProps) {
  const saveCardLike = async (card: CardClass, save: boolean) => {
    console.log('Card to save', card);
    console.log('save', save);
    if (save) {
      const response = await fetch('http://localhost:3000/api/postData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId: card.cardId,
          cardName: card.cardName,
          cardSet: card.cardSet ? card.cardSet : null,
          type: card.type ? card.type : null,
          rarity: card.rarity ? card.rarity : null,
          attack: card.attack ? card.attack.toString() : null,
          health: card.health ? card.health.toString() : null,
          text: card.text ? card.text : null,
          race: card.race ? card.race : null,
          playerClass: card.playerClass ? card.playerClass : null,
          img: card.img ? card.img : null,
          mechanics: card.mechanics ? [card.mechanics.toString] : null,
        }),
      });
      console.log(response.status == 500);
    } else {
      const response = await fetch('http://localhost:3000/api/deleteData', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId: card.cardId,
          cardName: card.cardName,
          cardSet: card.cardSet ? card.cardSet : null,
          type: card.type ? card.type : null,
          rarity: card.rarity ? card.rarity : null,
          attack: card.attack ? card.attack.toString() : null,
          health: card.health ? card.health.toString() : null,
          text: card.text ? card.text : null,
          race: card.race ? card.race : null,
          playerClass: card.playerClass ? card.playerClass : null,
          img: card.img ? card.img : null,
          mechanics: card.mechanics ? [card.mechanics.toString] : null,
        }),
      });
      console.log(response.status == 500);
    }
  };
  return (
    <div className="grid grid-cols-5 w-screen ">
      {cardList.map((card, index) => (
        <div key={index} className=" ">
          <Card
            id={card.cardId}
            pic={card.img}
            name={card.cardName}
            type={card.type}
            rarity={card.rarity}
            text={card.text}
            race={card.race}
            playerClass={card.playerClass}
            attack={card.attack}
            health={card.health}
            mechcanics={card.mechanics}
            cardSet={card.cardSet}
          ></Card>
        </div>
      ))}
    </div>
  );
}
