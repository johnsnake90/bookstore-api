import { faker } from '@faker-js/faker';

export function getRandomFirstName(): string {
  return faker.person.firstName().replaceAll("'", '');
}

export function getRandomLastName(): string {
  return faker.person.lastName().replaceAll("'", '');
}

export function getRandomBookTitle(): string {
  return faker.lorem.words(3);
}

export function getRandomYear(): number {
  return faker.date.between({ from: '1990-01-01', to: '2026-01-01' }).getFullYear();
}

export function getRandomPrice(): number {
  return faker.number.float({ min: 9.99, max: 59.99, fractionDigits: 2 });
}

export function getRandomNumber(): number {
  return faker.number.int({ min: 1, max: 500 });
}

export function getRandomCity(): string {
  return faker.location.city().replaceAll("'", '');
}

export function getRandomStreet(): string {
  return faker.location.street().replaceAll("'", '');
}

export function getRandomZipCode(): string {
  return faker.location.zipCode('##-###');
}

export function getRandomEmail(): string {
  const firstName = getRandomFirstName();
  const lastName = getRandomLastName();
  return faker.internet.email({ firstName, lastName }).toLowerCase()
}