import PropTypes from "prop-types";
import { normaliceText } from "../../utils/normaliceText";
import { useState } from "react";

export const SearchBooks = ({ books, setBooks }) => {
  const [bookTitle, setBookTitle] = useState("");

  const onSearchTitle = (e) => {
    e.preventDefault();

    const searchTitle = books.library.filter((book) =>
      normaliceText(book.book.title).includes(normaliceText(bookTitle))
    );

    if (searchTitle.length === 0) {
      alert("No se encontró el libro");
      setBookTitle("");
      setBooks(books.library);
      return;
    }
    setBooks(searchTitle);
  };

  const removeFilter = () => {
    setBookTitle("");
    setBooks(books.library);
  };

  return (
    <>
      <h1>Buscar libro</h1>
      <form onSubmit={onSearchTitle}>
        <input
          type="text"
          placeholder="Escribe el nombre del libro"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />
        {bookTitle ? (
          <input type="button" onClick={removeFilter} value="❌"></input>
        ) : null}
        <input type="submit" value="Buscar"></input>
      </form>
    </>
  );
};

SearchBooks.propTypes = {
  books: PropTypes.object.isRequired,
  setBooks: PropTypes.func.isRequired,
};
