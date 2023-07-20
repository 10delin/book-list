import BOOKS from "../../utils/books.json";

import { AvaliableBooks } from "../../components/AvaliableBooks/AvaliableBooks";
import { ReadingBooks } from "../../components/ReadingBooks/ReadingBooks";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useMemo, useState } from "react";
import { BookFilterContainer } from "../../components/BookFilterContainer/BookFilterContainer";

export const Home = () => {
  const originalBooks = BOOKS.library;
  const [books, setBooks] = useState(originalBooks || []);
  const [newBooks, setNewBooks] = useLocalStorage("newBooks", []);

  const filteredBooks = useMemo(() => {
    if (newBooks.length === 0) return books;

    const newBooksTitles = newBooks.map((book) => book.book.title);
    return books.filter((book) => !newBooksTitles.includes(book.book.title));
  }, [books, newBooks]);

  return (
    <div>
      <div>
        <BookFilterContainer
          setBooks={setBooks}
          originalBooks={originalBooks}
        />
        <h1>Libros disponibles: {filteredBooks.length}</h1>
        {filteredBooks.map((book) => {
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
