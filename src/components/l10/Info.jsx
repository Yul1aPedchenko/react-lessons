import { Component } from "react";

export class Info extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div>
            <p>Загальна кількість: {data.total}</p>
             <p>Виконані: {data.completedTodos}</p>
        </div>
      </>
    );
  }
}
