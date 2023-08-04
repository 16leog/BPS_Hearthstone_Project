import { readRecords } from '../../../../lib/db';
import { NextResponse } from 'next/server';
import { CardClass } from '../../../../types';

export async function POST(request: Request) {
  const card: CardClass = await request.json();
  console.log('Lo que recibe', card);
  const query = `INSERT INTO cards(cardId, cardName, cardSet, type, rarity, attack, health, text, race, playerClass, img, mechanics)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`;
  const data = await readRecords(query, [
    card.cardId,
    card.cardName,
    card.cardSet,
    card.type,
    card.rarity,
    card.attack,
    card.health,
    card.text,
    card.race,
    card.playerClass,
    card.img,
    card.mechanics,
  ]);
  const result: CardClass = await data.rows[0];
  console.log(result);
  return NextResponse.json(result, { status: 201 });
}
