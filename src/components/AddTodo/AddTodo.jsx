import React from "react";
import styles from "./AddTodo.module.css";
import PropTypes from "prop-types";

const AddTodo = ({ addTodoHandler }) => {
  return (
    <div>
      <button className={styles.add_button_todo} onClick={addTodoHandler}>
        ADD TODO
      </button>
    </div>
  );
};
AddTodo.propTypes = {
  addTodoHandler: PropTypes.func.isRequired,
};

export default AddTodo;
