import { useMemo } from "react";

import PropTypes from "prop-types";
import styled from "styled-components";

import { SingleAvaliableBook } from "../SingleAvaliableBook/SingleAvaliableBook";

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
  font-weight: 500;
`;

export const AvaliableBooksContainer = ({
  avaliableBooks,
  readingBooks,
  setReadingBooks,
}) => {
  const filteredBooks = useMemo(() => {
    if (readingBooks.length === 0) return avaliableBooks;

    const newBooksTitles = [...readingBooks].map((book) => book.book.title);
    return avaliableBooks.filter(
      (book) => !newBooksTitles.includes(book.book.title)
    );
  }, [avaliableBooks, readingBooks]);

  const alphabeticallySortedBooks = useMemo(() => {
    return filteredBooks.sort((a, b) =>
      a.book.title.localeCompare(b.book.title)
    );
  }, [filteredBooks]);

  return (
    <StyledWrapper>
      <StyledTitle>Libros disponibles: {filteredBooks.length}</StyledTitle>
      <StyledContent>
        {alphabeticallySortedBooks.map((book) => (
          <SingleAvaliableBook
            key={book.book.title}
            book={book}
            avaliableBooks={avaliableBooks}
            setReadingBooks={setReadingBooks}
          />
        ))}
      </StyledContent>
    </StyledWrapper>
  );
};

AvaliableBooksContainer.propTypes = {
  setReadingBooks: PropTypes.func.isRequired,
  readingBooks: PropTypes.array.isRequired,
  avaliableBooks: PropTypes.array.isRequired,
};
