import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  text-align: center;
  animation: fadeIn 0.3s ease;
`;

export const Title = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: #333;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 24px;
`;

export const Button = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 19px;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s ease;
  height: 38px;

  &:hover {
    background: #0056b3;
  }
`;
