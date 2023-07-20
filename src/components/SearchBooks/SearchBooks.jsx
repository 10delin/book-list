import PropTypes from "prop-types";
import { normaliceText } from "../../utils/normaliceText";
import { useState } from "react";

export const SearchBooks = ({ setBooks, originalBooks }) => {
  const [bookTitle, setBookTitle] = useState("");

  const onSearchTitle = (e) => {
    e.preventDefault();

    const searchTitle = originalBooks.filter((book) =>
      normaliceText(book.book.title).includes(normaliceText(bookTitle))
    );

    if (searchTitle.length === 0) {
      alert("No se encontró el libro");
      setBookTitle("");
      setBooks(originalBooks);
      return;
    }
    setBooks(searchTitle);
  };

  const removeFilter = () => {
    setBookTitle("");
    setBooks(originalBooks);
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
  setBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
