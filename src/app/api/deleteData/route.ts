import { NextResponse } from 'next/server';
import { deleteRecord, readRecords } from '../../../../lib/db';

import { CardClass } from '../../../../types';

export async function DELETE(request: Request) {
  const card: CardClass = await request.json();
  const queryText = 'DELETE FROM cardsLeo WHERE cardID = $1 RETURNING *';
  const crd = await deleteRecord(queryText, [card.cardid]);
  return NextResponse.json(crd, { status: 200 });
}