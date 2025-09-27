import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-bottom: 2px solid #e0e0e0;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #333;
`;

export const Link = styled.a`
  color: #0077ff;
  font-weight: bold;
  text-decoration: none;
  margin: 0 5px;

  &:hover {
    text-decoration: underline;
  }
`;
