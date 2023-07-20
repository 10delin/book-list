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
      <p>{book.book.title}</p>
      <img
        style={{ cursor: "pointer" }}
        src={book.book.cover}
        alt={book.book.title}
        width={200}
      />
      <button disabled={priority === 2} onClick={() => changePriority("sum")}>
        ⬆
      </button>
      <span>{priorityName(book?.priority ?? priority)}</span>
      <button disabled={priority === 0} onClick={() => changePriority("res")}>
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
