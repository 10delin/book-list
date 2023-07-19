import React from "react";
import PropTypes from "prop-types";

export const ReadingBooks = ({ book }) => {
  return (
    <React.Fragment>
      <h2>{book.book.title}</h2>
      {/* <button
            onClick={() => setPriority((prevPriority) => prevPriority + 1)}
          >
            ⬆
          </button>
          <label>Prioridad {priority}</label>
          <button
            onClick={() => setPriority((prevPriority) => prevPriority - 1)}
          >
            ⬇
          </button> */}
    </React.Fragment>
  );
};

ReadingBooks.propTypes = {
  book: PropTypes.object.isRequired,
  setPriority: PropTypes.func.isRequired,
  priority: PropTypes.number.isRequired,
};
