import React from "react";
import styles from "./GroupList.module.css";
import AddTodo from "../AddTodo/AddTodo";
import SelectGroup from "../TodoList/SelectGroup";
import InputTodoField from "../InputTodoField/InputTodoField";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const GroupList = ({
  groups,
  setTodoId,
  inputTodo,
  setInputTodo,
  addTodoHandler,
  group,
  todoDeleteHandler,
  handleUpdateTodo,
  handleCheckedTodo,
}) => {
  return (
    <div className={styles.form_second_container}>
      <div className={styles.form_todo_container}>
        <SelectGroup groups={groups} setTodoId={setTodoId} />
        <div style={{ display: "flex" }}>
          <InputTodoField inputTodo={inputTodo} setInputTodo={setInputTodo} />
          <AddTodo addTodoHandler={addTodoHandler} />
        </div>
      </div>
      <div style={{ paddingTop: 20 }}>
        {group?.todos.length === 0 && (
          <h4 style={{ textAlign: "center" }}>
            No existing todo for this group
          </h4>
        )}
        {group?.todos &&
          group?.todos.map((todo) => (
            <Card
              key={todo.id}
              id={todo.id}
              name={todo.name}
              checked={todo.checked}
              onDelete={todoDeleteHandler}
              onChange={handleUpdateTodo}
              onChecked={handleCheckedTodo}
            />
          ))}
      </div>
    </div>
  );
};
GroupList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodoId: PropTypes.func.isRequired,
  inputTodo: PropTypes.string.isRequired,
  setInputTodo: PropTypes.func.isRequired,
  addTodoHandler: PropTypes.func.isRequired,
  group: PropTypes.object,
  todoDeleteHandler: PropTypes.func.isRequired,
  handleUpdateTodo: PropTypes.func,
  handleCheckedTodo: PropTypes.func.isRequired,
};

export default GroupList;
