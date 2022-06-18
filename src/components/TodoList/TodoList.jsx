import React from "react";
// import AddTodo from "../AddTodo/AddTodo";
import styles from "./InputTodo.module.css";
const TodoList = ({ groups, setTodoId }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setTodoId(e.target.value);
  };

  return (
    <div className={styles.input_todo_container}>
      <div className={styles.input_todo_field}>
        <select name="todos" className={styles.select} onChange={handleChange}>
          {groups.map((group, i) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TodoList;
