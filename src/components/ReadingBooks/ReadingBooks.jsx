import PropTypes from "prop-types";
import { SingleReadingBook } from "../SingleReadingBook/SingleReadingBook";

export const ReadingBooks = ({ newBooks, setNewBooks }) => {
  const bookPriority = newBooks.sort((a, b) => b.priority - a.priority);

  return bookPriority.map((book) => {
    return (
      <SingleReadingBook
        key={book.book.title}
        book={book}
        newBooks={newBooks}
        setNewBooks={setNewBooks}
      />
    );
  });
};

ReadingBooks.propTypes = {
  newBooks: PropTypes.array.isRequired,
  setNewBooks: PropTypes.func.isRequired,
};
