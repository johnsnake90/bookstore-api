import test, { expect } from '@playwright/test';
import { authorsUrl } from '../../src/helpers/url.helper';
import { postRequest } from '../../src/requests/post.request';
import { parseResponse } from '../../src/helpers/parse.response.helper';
import { AuthorResponse } from '../../src/models/authors/author.model';
import { getRandomAuthorPayload } from '../../src/datafactory/authors/author.data';
import { statusCode } from '../../src/helpers/response.status.helper';
import { HTTP_201_CREATED } from '../../src/const/http.status.codes.const';

test.describe('POST API_AUTHORS 2xx', { tag: ['@authors', '@smoke'] }, () => {
  test('create new author', async ({}) => {

    const authorPayload = getRandomAuthorPayload();

    const response = await postRequest(authorsUrl(), authorPayload);
    expect(statusCode(response)).toBe(HTTP_201_CREATED);

    const responseBody = await parseResponse<AuthorResponse>(response);
    expect(responseBody.firstName).toBe(authorPayload.firstName);
    expect(responseBody.lastName).toBe(authorPayload.lastName);
  });
});
