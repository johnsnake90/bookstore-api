import { getRandomFirstName, getRandomLastName } from "../../helpers/random.data.helper"
import { AuthorPayload } from "../../models/authors/author.model"

export function getRandomAuthorPayload(): AuthorPayload {
  return {
    firstName: getRandomFirstName(),
    lastName: getRandomLastName()
  }
}