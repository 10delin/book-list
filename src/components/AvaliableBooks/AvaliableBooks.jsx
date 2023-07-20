import PropTypes from "prop-types";

export const AvaliableBooks = ({ book, setNewBooks, books }) => {
  const addBook = (e) => {
    const selectedBookTitle = e.target.textContent;
    const book = books.library.find(
      (book) => book.book.title === selectedBookTitle
    );
    setNewBooks((prevNewBooks) => [...prevNewBooks, book]);
  };

  return (
    <div>
      <p onClick={addBook} style={{ cursor: "pointer" }}>
        {book.book.title}
      </p>
    </div>
  );
};

AvaliableBooks.propTypes = {
  book: PropTypes.object.isRequired,
  setNewBooks: PropTypes.func.isRequired,
  setBooks: PropTypes.func.isRequired,
  books: PropTypes.object.isRequired,
};
