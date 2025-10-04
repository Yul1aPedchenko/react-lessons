import initialTodos from "../../bd/l10/todo.json";
import { TodoList } from "./TodoList";
import { TodoEditor } from "./TodoEditor";
import { Filter } from "./Filter";
import { Info } from "./Info";
import { MainWrapper, Wrapper, SubWrapper } from "./Styles/L10";
import { useState } from "react";

export const L16 = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos((prevItems) => [...prevItems, newTodo]);
  };
  const completedTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    });
  };
  const deletTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id));
  };

  const getInfo = () => {
    const total = todos.length;
    const completedTodos = todos.filter((todo) => todo.completed).length;
    return {
      total,
      completedTodos,
    };
  };
  const changeFilter = (value) => {
    setFilter(value);
  };

  const getVisibleTodos = () => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <MainWrapper>
      <Info data={getInfo()} />
      <Wrapper>
        <SubWrapper>
          <Filter value={filter} onChange={changeFilter}></Filter>
          <TodoEditor onSubmit={addTodo} />
        </SubWrapper>
        <TodoList
          todos={getVisibleTodos()}
          completedTodo={completedTodo}
          deleteTodo={deletTodo}
        />
      </Wrapper>
    </MainWrapper>
  );
};
