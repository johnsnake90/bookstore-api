import { BOOK_COVER_PATH, BOOK_COVER_NAME } from "@const/application.const";
import fs from 'fs';
import path from 'path';

export function getFormDataWithBookCover(bookCoverPath?: string): FormData {

  if(!bookCoverPath) {
    bookCoverPath = BOOK_COVER_PATH;
  }
  const filePath = path.resolve(__dirname, bookCoverPath);
  const fileBuffer = fs.readFileSync(filePath);

    const formData = new FormData();
    formData.append('file', new Blob([new Uint8Array(fileBuffer)]), BOOK_COVER_NAME);

    return formData;
}


