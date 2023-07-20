import PropTypes from "prop-types";
import { normaliceText } from "../../utils/normaliceText";
import { useState } from "react";

export const SearchBooks = ({ originalBooks, setAvaliableBooks }) => {
  const [bookTitle, setBookTitle] = useState("");

  const onSearchTitle = (e) => {
    e.preventDefault();

    const searchTitle = originalBooks.filter((book) =>
      normaliceText(book.book.title).includes(normaliceText(bookTitle))
    );

    if (searchTitle.length === 0) {
      alert("No se encontró el libro");
      setBookTitle("");
      setAvaliableBooks(originalBooks);
      return;
    }
    setAvaliableBooks(searchTitle);
  };

  const removeFilter = () => {
    setBookTitle("");
    setAvaliableBooks(originalBooks);
  };

  return (
    <div>
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
    </div>
  );
};

SearchBooks.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
