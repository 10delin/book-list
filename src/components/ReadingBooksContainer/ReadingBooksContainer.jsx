import PropTypes from "prop-types";
import styled from "styled-components";
import { SingleReadingBook } from "../SingleReadingBook/SingleReadingBook";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 20px 50px;
  position: fixed;
  bottom: 0px;
  top: 0px;
  right: 0px;
  background-color: #b4b4b4;
  overflow-x: auto;
  overflow-y: auto;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const StyledTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  font-family: "Roboto", sans-serif;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ffffff;
`;

export const ReadingBooksContainer = ({ readingBooks, setReadingBooks }) => {
  const bookPriority = [...readingBooks].sort(
    (a, b) => b.priority - a.priority
  );

  return (
    bookPriority.length > 0 && (
      <StyledWrapper>
        <StyledTitle>Libros de lectura: {readingBooks.length}</StyledTitle>
        <StyledContent>
          {bookPriority.map((book) => (
            <SingleReadingBook
              key={book.book.title}
              book={book}
              readingBooks={readingBooks}
              setReadingBooks={setReadingBooks}
            />
          ))}
        </StyledContent>
      </StyledWrapper>
    )
  );
};

ReadingBooksContainer.propTypes = {
  readingBooks: PropTypes.array.isRequired,
  setReadingBooks: PropTypes.func.isRequired,
};
