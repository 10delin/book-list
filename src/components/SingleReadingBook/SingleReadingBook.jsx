import { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { priorityName } from "../../utils/priorityName";

export const SingleReadingBook = ({ book, newBooks, setNewBooks }) => {
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
    const newBooksCopy = [...newBooks];
    const index = newBooksCopy.findIndex(
      (bookCopy) => bookCopy.book.title === book.book.title
    );
    newBooksCopy[index].priority = priority;
    setNewBooks(newBooksCopy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priority]);

  return (
    <div>
      <h2>{book.book.title}</h2>
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
  newBooks: PropTypes.array.isRequired,
  setNewBooks: PropTypes.func.isRequired,
};
