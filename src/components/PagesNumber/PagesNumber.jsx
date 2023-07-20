import { useState } from "react";
import propTypes from "prop-types";

export const PagesNumber = ({ setBooks, originalBooks }) => {
  const [maxPages, setMaxPages] = useState("");

  const onFilterPages = (e) => {
    e.preventDefault();

    const filterPages = originalBooks.filter(
      (book) => book.book.pages <= maxPages
    );

    if (filterPages.length === 0) {
      alert("No hay libros con esas paginas");
      setBooks(originalBooks);
      setMaxPages("");
      return;
    }
    setBooks(filterPages);
  };

  return (
    <>
      <h1>Numero paginas</h1>
      <form onSubmit={onFilterPages}>
        <input
          type="text"
          placeholder="Numero de páginas"
          value={maxPages}
          onChange={(e) => setMaxPages(e.target.value)}
        />
      </form>
    </>
  );
};

PagesNumber.propTypes = {
  setBooks: propTypes.func.isRequired,
  originalBooks: propTypes.array.isRequired,
};
