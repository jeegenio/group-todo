import React from "react";
import styles from "./AddTodo.module.css";
const AddTodo = ({ addTodoHandler }) => {
  return (
    <div>
      <button className={styles.add_button_todo} onClick={addTodoHandler}>
        ADD TODO
      </button>
    </div>
  );
};
AddTodo.propTypes = {};

export default AddTodo;
