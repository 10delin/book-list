import PropTypes from "prop-types";
import styled from "styled-components";

import { PagesNumber } from "../PagesNumber/PagesNumber";
import { SearchBooks } from "../SearchBooks/SearchBooks";
import { SelectGenre } from "../SelectGenre/SelectGenre";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 0 20px 0;
`;

export const BookFilterContainer = ({ originalBooks, setAvaliableBooks }) => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
};

BookFilterContainer.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
