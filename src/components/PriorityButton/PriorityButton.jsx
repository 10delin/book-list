import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ option }) =>
    option === "sum" ? "#4CAF50" : option === "res" ? "#FF5722" : "#838383"};
  color: white;
  border: none;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: ${({ option }) =>
      option === "sum" ? "#38833a" : option === "res" ? "#c54119" : "#000"};
  }

  &:disabled {
    background-color: #bdbdbd;
    color: #a7a7a7;
    cursor: not-allowed;
  }
`;

export const PriorityButton = ({
  setPriority,
  dataCy,
  disabledPrio,
  label,
  option,
}) => {
  const changePriority = (option) => {
    if (option === "sum") {
      setPriority((prevPriority) => prevPriority + 1);
    }
    if (option === "res") {
      setPriority((prevPriority) => prevPriority - 1);
    }
  };

  return (
    <StyledButton
      data-cy={dataCy}
      disabled={disabledPrio}
      option={option} // Pasamos la prop 'option' al componente StyledButton
      onClick={() => changePriority(option)}
    >
      {label}
    </StyledButton>
  );
};

PriorityButton.propTypes = {
  setPriority: PropTypes.func.isRequired,
  dataCy: PropTypes.string.isRequired,
  disabledPrio: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};