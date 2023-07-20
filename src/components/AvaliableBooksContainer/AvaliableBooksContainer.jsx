import PropTypes from "prop-types";
import { SingleAvaliableBook } from "../SingleAvaliableBook/SingleAvaliableBook";
import { useMemo } from "react";

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
    <div>
      <h1>Libros disponibles: {filteredBooks.length}</h1>
      {alphabeticallySortedBooks.map((book) => (
        <SingleAvaliableBook
          key={book.book.title}
          book={book}
          avaliableBooks={avaliableBooks}
          setReadingBooks={setReadingBooks}
        />
      ))}
    </div>
  );
};

AvaliableBooksContainer.propTypes = {
  setReadingBooks: PropTypes.func.isRequired,
  readingBooks: PropTypes.array.isRequired,
  avaliableBooks: PropTypes.array.isRequired,
};
