import PropTypes from "prop-types";

export const SelectGenre = ({ books, setBooks }) => {
  const uniqueGenres = [
    ...new Set(books.library.map((book) => book.book.genre)),
  ];

  const onGenreValue = (e) => {
    const genreValue = e.target.value;
    if (genreValue === "") {
      setBooks(books.library);
      return;
    }
    const booksByGenre = books.library.filter(
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
  books: PropTypes.object.isRequired,
  setBooks: PropTypes.func.isRequired,
};
