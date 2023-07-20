import BOOKS from "../../utils/books.json";

import { AvaliableBooks } from "../../components/AvaliableBooks/AvaliableBooks";
import { ReadingBooks } from "../../components/ReadingBooks/ReadingBooks";
import { SearchBooks } from "../../components/SearchBooks/SearchBooks";
import { SelectGenre } from "../../components/SelectGenre/SelectGenre";
import { PagesNumber } from "../../components/PagesNumber/PagesNumber";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

export const Home = () => {
  const [books, setBooks] = useState(BOOKS.library);
  const [newBooks, setNewBooks] = useLocalStorage("newBooks", []);

  useEffect(() => {
    if (newBooks.length === 0) return;
    const newBooksTitles = newBooks.map((book) => book.book.title);
    const booksToSave = books.filter(
      (book) => !newBooksTitles.includes(book.book.title)
    );
    setBooks(booksToSave);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newBooks]);

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
              newBooks={newBooks}
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
