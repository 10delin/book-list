import PropTypes from "prop-types";

import { PagesNumber } from "../PagesNumber/PagesNumber";
import { SearchBooks } from "../SearchBooks/SearchBooks";
import { SelectGenre } from "../SelectGenre/SelectGenre";

export const BookFilterContainer = ({ originalBooks, setAvaliableBooks }) => {
  return (
    <div>
      <SearchBooks
        originalBooks={originalBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
      <SelectGenre
        originalBooks={originalBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
      <PagesNumber
        originalBooks={originalBooks}
        setAvaliableBooks={setAvaliableBooks}
      />
    </div>
  );
};

BookFilterContainer.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
