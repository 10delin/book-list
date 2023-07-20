import PropTypes from "prop-types";

export const SelectGenre = ({ originalBooks, setAvaliableBooks }) => {
  const uniqueGenres = [
    ...new Set(originalBooks.map((book) => book.book.genre)),
  ];

  const onGenreValue = (e) => {
    const genreValue = e.target.value;
    if (genreValue === "") {
      setAvaliableBooks(originalBooks);
      return;
    }
    const booksByGenre = originalBooks.filter(
      (book) => book.book.genre === genreValue
    );
    setAvaliableBooks(booksByGenre);
  };

  return (
    <div>
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
    </div>
  );
};

SelectGenre.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
