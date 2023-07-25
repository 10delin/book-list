import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 0 0 20px 0;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #2472e7;
  color: #ffffff;
  text-align: center;
  padding: 7px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
  &:hover {
    background-color: #0a3474;
    color: #ffffff;
  }
`;

export const ResetFilter = ({ setAvaliableBooks, originalBooks }) => {
  const handleReset = () => {
    setAvaliableBooks(originalBooks);
  };

  return (
    <StyledWrapper>
      <StyledButton onClick={handleReset}>Reiniciar Filtro</StyledButton>
    </StyledWrapper>
  );
};

ResetFilter.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
