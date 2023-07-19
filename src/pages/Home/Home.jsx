import { useState } from "react";
import BOOKS from "../../utils/books.json";
import { normaliceText } from "../../utils/normaliceText";
import { AvaliableBooks } from "../../components/AvaliableBooks/AvaliableBooks";
import { ReadingBooks } from "../../components/ReadingBooks/ReadingBooks";

export const Home = () => {
  const [books, setBooks] = useState(BOOKS.library);
  const [newBooks, setNewBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [maxPages, setMaxPages] = useState("");
  // const [priority, setPriority] = useState(1);

  const uniqueGenres = [
    ...new Set(BOOKS.library.map((book) => book.book.genre)),
  ];

  const onSearchTitle = (e) => {
    e.preventDefault();

    const searchTitle = BOOKS.library.filter((book) =>
      normaliceText(book.book.title).includes(normaliceText(bookTitle))
    );

    if (searchTitle.length === 0) {
      alert("No se encontró el libro");
      setBookTitle("");
      setBooks(BOOKS.library);
      return;
    }
    setBooks(searchTitle);
  };

  const removeFilter = () => {
    setBookTitle("");
    setBooks(BOOKS.library);
  };

  const onGenreValue = (e) => {
    const genreValue = e.target.value;
    if (genreValue === "") {
      setBooks(BOOKS.library);
      return;
    }
    const booksByGenre = BOOKS.library.filter(
      (book) => book.book.genre === genreValue
    );
    setBooks(booksByGenre);
  };

  const onFilterPages = (e) => {
    e.preventDefault();

    const filterPages = BOOKS.library.filter(
      (book) => book.book.pages <= maxPages
    );

    if (filterPages.length === 0) {
      alert("No hay libros con esas paginas");
      setBooks(BOOKS.library);
      setMaxPages("");
      return;
    }
    setBooks(filterPages);
  };

  return (
    <div>
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
        <h1>Numero paginas</h1>
        <form onSubmit={onFilterPages}>
          <input
            type="text"
            placeholder="Numero de páginas"
            value={maxPages}
            onChange={(e) => setMaxPages(e.target.value)}
          />
        </form>

        <h1>Libros disponibles: {books.length}</h1>
        {books.map((book, index) => {
          return (
            <AvaliableBooks
              key={index}
              books={BOOKS}
              book={book}
              setBooks={setBooks}
              setNewBooks={setNewBooks}
            />
          );
        })}
      </div>
      <div>
        <h1>Libros de lectura: {newBooks.length}</h1>
        {newBooks.map((book, index) => {
          return <ReadingBooks key={index} book={book} />;
        })}
      </div>
    </div>
  );
};
