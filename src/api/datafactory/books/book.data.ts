import { BookPayload } from '@api-models/books/book.model';
import { getRandomBookTitle, getRandomYear, getRandomPrice, getRandomNumber } from '@helpers/random.data.helper';

export function getRandomBookPayload(authorId?: number): BookPayload {
  return {
      title: getRandomBookTitle(),
      authors: authorId !== undefined ? [authorId] : ([] as number[]),
      year: getRandomYear(),
      price: getRandomPrice(),
      available: getRandomNumber()
  };
}

