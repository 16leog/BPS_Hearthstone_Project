import { NextResponse } from 'next/server';
import { deleteRecord, readRecords } from '../../../../lib/db';

import { CardClass } from '../../../../types';

export async function DELETE(request: Request) {
  const card: CardClass = await request.json();
  console.log('Carta a eliminar', card);
  const query = `DELETE FROM cards WHERE cardId= $1 AND cardName= $2 AND type= $3 AND playerClass= $4`;
  const data = await readRecords(query, [
    card.cardId,
    card.cardName,
    card.cardSet,
    card.type,
    card.playerClass,
  ]);
  const result: CardClass = await data.rows[0];
  console.log(result);
  return NextResponse.json(result, { status: 201 });
}
