import PropTypes from "prop-types";

export const SingleAvaliableBook = ({
  book,
  setReadingBooks,
  avaliableBooks,
}) => {
  const addBook = (e) => {
    const selectedBookTitle = e.target.alt;
    const book = avaliableBooks.find(
      (book) => book.book.title === selectedBookTitle
    );
    setReadingBooks((prevNewBooks) => [...prevNewBooks, book]);
  };

  return (
    <div>
      <p>{book.book.title}</p>
      <img
        onClick={addBook}
        style={{ cursor: "pointer" }}
        src={book.book.cover}
        alt={book.book.title}
        width={200}
      />
    </div>
  );
};

SingleAvaliableBook.propTypes = {
  book: PropTypes.object.isRequired,
  setReadingBooks: PropTypes.func.isRequired,
  avaliableBooks: PropTypes.array.isRequired,
};
