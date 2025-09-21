import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(90deg, #7c3aed, #9333ea, #3aed46ff);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 10s ease infinite;

  h2 {
  font-size: 36px;
    color: #fff;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Question = styled.li`
  border-radius: 8px;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  list-style: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 40%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }
  h3 {
    color: #fff;
    font-size: 1.1rem;
  }
`;

export const Answer = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  border-left: 2px solid #9333ea;
  color: #ddd;
  font-size: 0.9rem;
  line-height: 1.4;
  transition: all 0.3s ease;

  p {
    margin: 5px 0;

    a {
      color: #7c3aed;
      text-decoration: underline;

      &:hover {
        color: #9333ea;
      }
    }
  }
`;
