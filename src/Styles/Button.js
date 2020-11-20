import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "black" : "black"};
  position: relative;
  font-size: 22px;
  font-weight: 700;

  padding: 0.25em 1em;
  min-width: 300px;
  min-height: 60px;
  border: none;
  border-radius: 1000px;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  background: #FCEEB5;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default Button;