import { Component } from "react";

export class TodoList extends Component {
  render() {
    const { todos, completedTodo, deleteTodo } = this.props;

    return (
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => completedTodo(id)}
            />
            <span>{text}</span>
            <button onClick={() => deleteTodo(id)}>Delet</button>
          </li>
        ))}
      </ul>
    );
  }
}
