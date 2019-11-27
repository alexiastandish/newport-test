import styled from "styled-components";
import { colors } from "../../../styles/_variables";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  padding: 20px 30px;
  box-sizing: border-box;
  justify-items: flex-start;
  align-items: flex-start;
  textarea {
    border-radius: 3px;
    ${props =>
      props.error
        ? `border: 1px solid ${colors.red}`
        : `border: 1px solid ${colors.gray}`};

    padding: 10px 20px;
    letter-spacing: 0.25px;
    width: 100%;
    font-family: Work Sans;
    &:hover {
      cursor: pointer;
    }
    &::placeholder {
      color: ${colors.gray};
    }
    &:focus {
      outline: none;
    }
    font-size: 18px;
    font-weight: 400;
    transition: border 200ms ease;
  }

  button {
    margin-top: 20px;
  }
`;

export { StyledForm };
