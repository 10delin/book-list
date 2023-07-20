import PropTypes from "prop-types";

export const ResetFilter = ({ setAvaliableBooks, originalBooks }) => {
  const handleReset = () => {
    setAvaliableBooks(originalBooks);
  };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

ResetFilter.propTypes = {
  setAvaliableBooks: PropTypes.func.isRequired,
  originalBooks: PropTypes.array.isRequired,
};
