import { Component } from "react";
import { Wrapper, Total } from "./Styles/Info";

export class Info extends Component {
  render() {
    const { data } = this.props;
    return (
      <Wrapper>
        <Total>Загальна кількість: {data.total}</Total>
        <Total>Виконані: {data.completedTodos}</Total>
      </Wrapper>
    );
  }
}
