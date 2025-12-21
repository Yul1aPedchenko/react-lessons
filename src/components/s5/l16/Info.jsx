import { Wrapper, Total } from "./Styles/Info";

export const Info = ({ data }) => {
  return (
    <Wrapper>
      <Total>Загальна кількість: {data.total}</Total>
      <Total>Виконані: {data.completedTodos}</Total>
    </Wrapper>
  );
};
