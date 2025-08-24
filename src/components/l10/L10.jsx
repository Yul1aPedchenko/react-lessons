import { Component } from "react";
import initialTodos from "../../bd/l10/todo.json";
import { TodoList } from "./TodoList";
import { TodoEditor } from "./TodoEditor";
import { Filter } from "./Filter";
import { Info } from "./Info";

export class L10 extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    this.setState((prev) => ({
      todos: [newTodo, ...prev.todos],
    }));
  };
  completedTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    }));
  };
  deletTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  getInfo = () => {
    const { todos } = this.state;
    const total = todos.length;
    const completedTodos = todos.filter((todo) => todo.completed).length;
    return {
      total,
      completedTodos,
    };
  };
  changeFilter = (value) => {
  this.setState({ filter: value });
};

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  render() {
    const { todos, filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    return (
      <>
        <Info data={this.getInfo()} />
        <Filter value={this.state.filter} onChange={this.changeFilter}></Filter>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={visibleTodos}
          completedTodo={this.completedTodo}
          deleteTodo={this.deletTodo}
        />
      </>
    );
  }
}
