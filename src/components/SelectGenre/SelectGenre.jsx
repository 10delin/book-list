import PropTypes from "prop-types";

export const SelectGenre = ({ setBooks, originalBooks }) => {
  const uniqueGenres = [
    ...new Set(originalBooks.map((book) => book.book.genre)),
  ];

  const onGenreValue = (e) => {
    const genreValue = e.target.value;
    if (genreValue === "") {
      setBooks(originalBooks);
      return;
    }
    const booksByGenre = originalBooks.filter(
      (book) => book.book.genre === genreValue
    );
    setBooks(booksByGenre);
  };

  return (
    <>
      <h1>Genero</h1>
      <select onChange={onGenreValue}>
        <option value="">Todos</option>
        {uniqueGenres.map((genre, index) => {
          return (
            <option key={index} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>
    </>
  );
};

SelectGenre.propTypes = {
  setBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
