import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { priorityName } from "../../utils/priorityName";

export const SingleReadingBook = ({ book, readingBooks, setReadingBooks }) => {
  const [priority, setPriority] = useState(book?.priority ?? 1);

  const changePriority = (option) => {
    if (option === "sum") {
      setPriority((prevPriority) => prevPriority + 1);
    }
    if (option === "res") {
      setPriority((prevPriority) => prevPriority - 1);
    }
  };

  const removeBook = () => {
    const newBooksCopy = [...readingBooks];
    const index = newBooksCopy.findIndex(
      (bookCopy) => bookCopy.book.title === book.book.title
    );
    newBooksCopy.splice(index, 1);
    setReadingBooks(newBooksCopy);
  };

  useEffect(() => {
    const newBooksCopy = [...readingBooks];
    const index = newBooksCopy.findIndex(
      (bookCopy) => bookCopy.book.title === book.book.title
    );
    newBooksCopy[index].priority = priority;
    setReadingBooks(newBooksCopy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priority]);

  return (
    <div>
      <button data-cy="remove-reading-book" onClick={removeBook}>
        ❌
      </button>
      <p>{book.book.title}</p>
      <img src={book.book.cover} alt={book.book.title} width={200} />
      <button
        data-cy="up-priority"
        disabled={priority === 2}
        onClick={() => changePriority("sum")}
      >
        ⬆
      </button>
      <span>{priorityName(book?.priority ?? priority)}</span>
      <button
        data-cy="down-priority"
        disabled={priority === 0}
        onClick={() => changePriority("res")}
      >
        ⬇
      </button>
    </div>
  );
};

SingleReadingBook.propTypes = {
  book: PropTypes.object.isRequired,
  readingBooks: PropTypes.array.isRequired,
  setReadingBooks: PropTypes.func.isRequired,
};
