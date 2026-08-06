import { BookPayload } from '@api-models/books/book.model';
import { getRandomBookTitle, getRandomYear, getRandomPrice, getRandomNumber } from '@helpers/random.data.helper';

type Override<T> = Partial<T>;

export function getRandomBookPayload(authorId?: number): BookPayload {
  return {
      title: getRandomBookTitle(),
      authors: authorId !== undefined ? [authorId] : ([] as number[]),
      year: getRandomYear(),
      price: getRandomPrice(),
      available: getRandomNumber()
  };
}

export function getRandomBookOverridePayload(overrides: Override<BookPayload>): BookPayload {
  return{
    ...getRandomBookPayload(),
    ...overrides,
  }
}