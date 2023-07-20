import PropTypes from "prop-types";

import { PagesNumber } from "../PagesNumber/PagesNumber";
import { SearchBooks } from "../SearchBooks/SearchBooks";
import { SelectGenre } from "../SelectGenre/SelectGenre";

export const BookFilterContainer = ({ setBooks, originalBooks }) => {
  return (
    <div>
      <SearchBooks setBooks={setBooks} originalBooks={originalBooks} />
      <SelectGenre setBooks={setBooks} originalBooks={originalBooks} />
      <PagesNumber setBooks={setBooks} originalBooks={originalBooks} />
    </div>
  );
};

BookFilterContainer.propTypes = {
  setBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
