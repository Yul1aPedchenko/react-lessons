import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ completed }) => (completed ? "#c8e6c9" : "#fff")};
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
  transition: background-color 0.3s;

  input {
    margin-right: 10px;
    cursor: pointer;
  }

  span {
    flex: 1;
    font-size: 16px;
    text-decoration: ${({ completed }) =>
      completed ? "line-through" : "none"};
    color: ${({ completed }) => (completed ? "#666" : "#000")};
  }

  button {
    margin-left: 10px;
    padding: 6px 10px;
    border: none;
    background-color: #ef5350;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    transition: 0.2s;

    &:hover {
      background-color: #d32f2f;
    }
  }
`;
