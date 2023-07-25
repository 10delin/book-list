import { useState } from "react";

import BOOKS from "../../utils/books.json";

import { AvaliableBooksContainer } from "../../components/AvaliableBooksContainer/AvaliableBooksContainer";
import { ReadingBooksContainer } from "../../components/ReadingBooksContainer/ReadingBooksContainer";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { BookFilterContainer } from "../../components/BookFilterContainer/BookFilterContainer";
import { ResetApp } from "../../components/ResetApp/ResetApp";
import { styled } from "styled-components";

const StyleBooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

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
      <StyleBooksContainer>
        <AvaliableBooksContainer
          avaliableBooks={avaliableBooks}
          readingBooks={readingBooks}
          setReadingBooks={setReadingBooks}
        />
        <ReadingBooksContainer
          readingBooks={readingBooks}
          setReadingBooks={setReadingBooks}
        />
      </StyleBooksContainer>
    </div>
  );
};
