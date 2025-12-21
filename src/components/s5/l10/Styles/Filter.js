import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 2px solid #b388ff;
  outline: none;
  font-size: 16px;
  transition: 0.2s;

  &:focus {
    border-color: #7c4dff;
    box-shadow: 0 0 6px rgba(124, 77, 255, 0.4);
  }
`;

export const FormBtn = styled.button`
  margin-top: 10px;
  padding: 10px 40px;
  background-color: #7c4dff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    background-color: #651fff;
  }
`;
