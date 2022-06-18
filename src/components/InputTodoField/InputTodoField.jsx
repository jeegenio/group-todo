import React from "react";
import styles from "./InputTodoField.module.css";
const InputTodoField = ({ inputTodo, setInputTodo }) => {
  const handleChange = (event) => {
    setInputTodo(event.target.value);
  };
  return (
    <div className={styles.input_todo_container}>
      <input
        className={styles.input_todo_field}
        type="text"
        value={inputTodo}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputTodoField;
