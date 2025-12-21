import { Input, FormBtn } from "./Styles/Filter";
import { useState } from "react";

export const TodoEditor = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    // this.setState({
    //   textValue: e.target.value,
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    onSubmit(text);
    setText("");
    // this.setState({
    //   textValue: "",
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Нове завдання"
      />
      <FormBtn type="submit">Add</FormBtn>
    </form>
  );
};
