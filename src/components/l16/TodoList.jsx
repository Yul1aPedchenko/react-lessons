import { List, Item } from "./Styles/TodoList";

export const TodoList = ({ todos, completedTodo, deleteTodo }) => {
  return (
    <List>
      {todos.map(({ id, text, completed }) => (
        <Item key={id} completed={completed}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => completedTodo(id)}
          />
          <span>{text}</span>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </Item>
      ))}
    </List>
  );
};
