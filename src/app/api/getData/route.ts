import { NextResponse } from 'next/server';
import { readRecords } from '../../../../lib/db';

export async function GET() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS cardsLeo (
      cardId VARCHAR(255) PRIMARY KEY,
      cardName VARCHAR(255) NOT NULL,
      cardSet VARCHAR(255),
      type VARCHAR(255),
      rarity VARCHAR(255),
      attack VARCHAR(255),
      health VARCHAR(255),
      text VARCHAR(255),
      race  VARCHAR(255),
      playerClass VARCHAR(255),
      img VARCHAR(255),
      mechanics VARCHAR(255)[],
      mana VARCHAR(255)
    )
  `;

  const queryText = `
  
  SELECT * FROM cardsLeo
`;
  const d = await readRecords(createTableQuery);
  const data = await readRecords(queryText);
  return NextResponse.json({ data });
}
