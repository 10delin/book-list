import BOOKS from "../../utils/books.json";

import { AvaliableBooks } from "../../components/AvaliableBooks/AvaliableBooks";
import { ReadingBooks } from "../../components/ReadingBooks/ReadingBooks";
import { SearchBooks } from "../../components/SearchBooks/SearchBooks";
import { SelectGenre } from "../../components/SelectGenre/SelectGenre";
import { PagesNumber } from "../../components/PagesNumber/PagesNumber";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Home = () => {
  const [books, setBooks] = useLocalStorage("books", BOOKS.library);
  const [newBooks, setNewBooks] = useLocalStorage("newBooks", []);

  return (
    <div>
      <div>
        <SearchBooks books={BOOKS} setBooks={setBooks} />
        <SelectGenre books={BOOKS} setBooks={setBooks} />
        <PagesNumber books={BOOKS} setBooks={setBooks} />

        <h1>Libros disponibles: {books.length}</h1>
        {books.map((book) => {
          return (
            <AvaliableBooks
              key={book.book.title}
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
        <ReadingBooks newBooks={newBooks} setNewBooks={setNewBooks} />
      </div>
    </div>
  );
};
