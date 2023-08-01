import { deserialize } from 'ts-jackson';
import { CardClass } from '../../../types';
export async function getCards(className: string) {
  const key = process.env.API_KEY;

  // Check for 'demonhunter' and convert to 'demon hunter'
  if (className === 'demonhunter') {
    className = 'demon hunter';
  }
  
  try {
    const response = await fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${className}`,
      {
        headers: {
          'X-RapidAPI-Key': key ? key : '',
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      }
    );

    const data = await response.json();
    let cards: CardClass[] = await data.map((card: any) => {
      return deserialize(card, CardClass);
    });
    return cards;
  } catch (error) {
    console.error(error);
  }
}