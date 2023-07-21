import { useState } from "react";
import propTypes from "prop-types";

export const PagesNumber = ({ originalBooks, setAvaliableBooks }) => {
  const [maxPages, setMaxPages] = useState("");

  const onFilterPages = (e) => {
    e.preventDefault();

    const filterPages = [...originalBooks].filter(
      (book) => book.book.pages <= maxPages
    );

    if (filterPages.length === 0) {
      alert("No hay libros con esas paginas");
      setAvaliableBooks(originalBooks);
      setMaxPages("");
      return;
    }
    setAvaliableBooks(filterPages);
  };

  return (
    <div>
      <h1>Numero paginas</h1>
      <form onSubmit={onFilterPages}>
        <input
          type="text"
          placeholder="Numero de páginas"
          value={maxPages}
          onChange={(e) => setMaxPages(e.target.value)}
          data-cy="input-pages"
        />
        <input data-cy="button-pages" type="submit" value="Buscar" />
      </form>
    </div>
  );
};

PagesNumber.propTypes = {
  setAvaliableBooks: propTypes.func.isRequired,
  originalBooks: propTypes.array.isRequired,
};
