import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 100vh;
  background-color: #f9eaff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  background-color: #fff8a6;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 45%;
`;
