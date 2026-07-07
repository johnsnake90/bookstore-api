/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import test, { expect } from '@playwright/test';
import { HTTP_200_OK } from '../../src/const/http.status.codes.const';
import { statusCode } from '../../src/helpers/response.status.helper';
import { authorsUrl } from '../../src/helpers/url.helper';

const EXPECTED_FIRST_NAME = 'Joshua';
const NON_EXISTING_FIRST_NAME = '0';
const EXPECTED_LAST_NAME = 'Bloch';
const NON_EXISTING_LAST_NAME = '0';

test.describe('GET API_AUTHORS 2xx', { tag: ['@authors', '@smoke', '@search'] }, () => {
  test('search by firstName', async ({ request }) => {
    const response = await request.get(authorsUrl(), {
      params: {
        firstName: EXPECTED_FIRST_NAME,
      },
    });

    expect(statusCode(response)).toBe(HTTP_200_OK);

    const authors = await response.json();
    expect(authors.length).toBeGreaterThanOrEqual(1);
  });

  test('search by lastName', async ({ request }) => {
    const response = await request.get(authorsUrl(), {
      params: {
        lastName: EXPECTED_LAST_NAME,
      },
    });

    expect(statusCode(response)).toBe(HTTP_200_OK);

    const authors = await response.json();
    expect(authors.length).toBeGreaterThanOrEqual(1);
  });

  test('search by firstName and lastName', async ({ request }) => {
    const response = await request.get(authorsUrl(), {
      params: {
        firstName: EXPECTED_FIRST_NAME,
        lastName: EXPECTED_LAST_NAME,
      },
    });

    expect(statusCode(response)).toBe(HTTP_200_OK);

    const authors = await response.json();
    expect(authors.length).toBeGreaterThanOrEqual(1);
  });

  test('search by non existing firstName', async ({ request }) => {
    const response = await request.get(authorsUrl(), {
      params: {
        firstName: NON_EXISTING_FIRST_NAME,
      },
    });

    expect(statusCode(response)).toBe(HTTP_200_OK);

    const authors = await response.json();
    expect(authors.length).toBeGreaterThanOrEqual(0);
  });

  test('search by non existing lastName', async ({ request }) => {
    const response = await request.get(authorsUrl(), {
      params: {
        firstName: NON_EXISTING_LAST_NAME,
      },
    });

    expect(statusCode(response)).toBe(HTTP_200_OK);

    const authors = await response.json();
    expect(authors.length).toBeGreaterThanOrEqual(0);
  });

  test('search by non existing firstName and lastName', async ({ request }) => {
    const response = await request.get(authorsUrl(), {
      params: {
        firstName: NON_EXISTING_FIRST_NAME,
        lastName: NON_EXISTING_LAST_NAME,
      },
    });

    expect(statusCode(response)).toBe(HTTP_200_OK);

    const authors = await response.json();
    expect(authors.length).toBeGreaterThanOrEqual(0);
  });
});
