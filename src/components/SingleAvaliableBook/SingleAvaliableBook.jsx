import PropTypes from "prop-types";

export const SingleAvaliableBook = ({
  book,
  setReadingBooks,
  avaliableBooks,
}) => {
  const addBook = (e) => {
    const selectedBookTitle = e.target.textContent;
    const book = avaliableBooks.find(
      (book) => book.book.title === selectedBookTitle
    );
    setReadingBooks((prevNewBooks) => [...prevNewBooks, book]);
  };

  return (
    <div>
      <p onClick={addBook} style={{ cursor: "pointer" }}>
        {book.book.title}
      </p>
    </div>
  );
};

SingleAvaliableBook.propTypes = {
  book: PropTypes.object.isRequired,
  setReadingBooks: PropTypes.func.isRequired,
  avaliableBooks: PropTypes.array.isRequired,
};
