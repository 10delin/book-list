import styled from "styled-components";

const StyledWrapper = styled.div`
  top: 0;
  left: 0;
  background-color: #c28d47;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  margin: 0;
  font-family: "Arial", sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
`;

export const Header = () => {
  return (
    <StyledWrapper>
      <StyledTitle>Editorial Ébano</StyledTitle>
    </StyledWrapper>
  );
};

export default Header;
