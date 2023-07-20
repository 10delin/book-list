import { useState } from "react";

import BOOKS from "../../utils/books.json";

import { AvaliableBooksContainer } from "../../components/AvaliableBooksContainer/AvaliableBooksContainer";
import { ReadingBooksContainer } from "../../components/ReadingBooksContainer/ReadingBooksContainer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { BookFilterContainer } from "../../components/BookFilterContainer/BookFilterContainer";
import { ResetApp } from "../../components/ResetApp/ResetApp";

export const Home = () => {
  const originalBooks = BOOKS.library;
  const [avaliableBooks, setAvaliableBooks] = useState(originalBooks || []);
  const [readingBooks, setReadingBooks] = useLocalStorage("newBooks", []);

  return (
    <div>
      <ResetApp />
      <BookFilterContainer
        originalBooks={originalBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
      <AvaliableBooksContainer
        avaliableBooks={avaliableBooks}
        readingBooks={readingBooks}
        setReadingBooks={setReadingBooks}
      />
      <ReadingBooksContainer
        readingBooks={readingBooks}
        setReadingBooks={setReadingBooks}
      />
    </div>
  );
};
