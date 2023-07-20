import PropTypes from "prop-types";
import { SingleReadingBook } from "../SingleReadingBook/SingleReadingBook";

export const ReadingBooksContainer = ({ readingBooks, setReadingBooks }) => {
  const bookPriority = [...readingBooks].sort(
    (a, b) => b.priority - a.priority
  );

  return (
    <div>
      <h1>Libros de lectura: {readingBooks.length}</h1>
      {bookPriority.map((book) => (
        <SingleReadingBook
          key={book.book.title}
          book={book}
          readingBooks={readingBooks}
          setReadingBooks={setReadingBooks}
        />
      ))}
    </div>
  );
};

ReadingBooksContainer.propTypes = {
  readingBooks: PropTypes.array.isRequired,
  setReadingBooks: PropTypes.func.isRequired,
};
