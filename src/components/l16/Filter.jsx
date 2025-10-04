import { Input } from "./Styles/Filter";
import { useState } from "react";

export const Filter = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Відфільтруйте свої завдання"
    />
  );
};
