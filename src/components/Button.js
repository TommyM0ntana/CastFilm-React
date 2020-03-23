import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  background-color: transparent;
  text-transform: uppercase;
  border-radius: 0.1875rem;
  outline: none;
  font-size: 2.4rem;
  border: none;
  font-size: ${props => (props.primary ? "2.4rem" : "1rem")};
  margin: ${props => (props.primary ? "0px 240px" : "30px 30px 5px 5px")};
  padding: ${props => (props.primary ? "1.8rem" : "22px 30px")};
  color: var(--main-red);
  transform: scale(1);
  box-shadow: 1px -8px 20px rgba(0, 0, 0, 0.9);
  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    font-size: ${props => (props.primary ? "2.6rem" : "1rem")};
    color: #fff;
    transition: 0.9s ease;
    cursor: pointer;
    margin-top: 0px;
    margin: ${props => (props.primary ? "0px 210px" : "30px 30px 5px 5px")};
    padding: ${props => (props.primary ? "1.8rem" : "22px 40px")};
  }
`;

// display: inline-block;
//   background-color: transparent;
//   text-transform: uppercase;
//   padding: 1.8rem;
//   border-radius: 0.1875rem;
//   outline: none;
//   font-size: 2.4rem;
//   border: none;
//   margin-left: 240px;
//   margin-right: 240px;
//   color: var(--main-red);
//   transform: scale(1);
//   box-shadow: 1px -8px 20px rgba(0, 0, 0, 0.9);
//   transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
