import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgba(255, 255, 255, 0.12);
  padding: 12px 20px;
  border-radius: 16px;
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const SearchInput = styled.input`
  padding: 10px 16px;
  border-radius: 12px;
  border: none;
  outline: none;
  font-size: 16px;
  min-width: 250px;
  background-color: rgba(255, 255, 255, 0.15);
  color: #6040feff;

  &::placeholder {
    color: #7b61ff;
  }
`;

export const SearchButton = styled.button`
  background: linear-gradient(135deg, #7b61ff, #00ff95);
  color: #fff;
  border: none;
  padding: 10px 22px;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;
