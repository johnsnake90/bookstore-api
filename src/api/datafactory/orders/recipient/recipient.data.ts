import { RecipientPayload } from "@api-models/orders/recipient.model";
import { getRandomCity, getRandomEmail, getRandomFirstName, getRandomLastName, getRandomStreet, getRandomZipCode } from "@helpers/random.data.helper";

export function getRandomRecipientPayload(): RecipientPayload {

  const randomFirstName = getRandomFirstName();
  const randomLastName = getRandomLastName();
  const randomCity = getRandomCity();
  const randomStreet = getRandomStreet();
  const randomZipCode = getRandomZipCode();
  const randomEmail = getRandomEmail();

  return {
    name: `${randomFirstName} ${randomLastName}`,
    phone: '500600700',
    street: randomStreet,
    city: randomCity,
    zipCode: randomZipCode,
    email: randomEmail
  }
}