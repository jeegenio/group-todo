import React, { useMemo, useState } from "react";
import AddButtonGroup from "../ButtonGroup/AddButtonGroup";
import InputGroupField from "../InputGroup/InputGroupField";
import styles from "./FormGroup.module.css";
import {
  addGroup,
  addTodo,
  deleteGroup,
  editGroup,
  deleteTodo,
  updateTodo,
} from "../GroupSlice/GroupSlice";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { nanoid } from "nanoid";
import Card from "../Card/Card";
import AddTodo from "../AddTodo/AddTodo";
import TodoList from "../TodoList/TodoList";
import InputTodoField from "../InputTodoField/InputTodoField";
// import FormTodo from "../FormTodo/FormTodo";

const FormGroup = () => {
  const [inputGroup, setInputGroup] = useState(" ");
  const [inputTodo, setInputTodo] = useState(" ");

  const [groupId, setTodoId] = useState();
  const dispatch = useAppDispatch();
  const { groups } = useAppSelector((state) => state.group);
  const group = useMemo(
    () => groups.find((group) => group.id === groupId),
    [groups, groupId]
  );
  // console.log(group);
  const addGroupHandler = () => {
    if (!inputGroup) return;
    dispatch(
      addGroup({
        id: nanoid(),
        name: inputGroup,
        checked: false,
        todos: [],
      })
    );
    setInputGroup("");
  };
  const handleDeleteGroup = (id) => {
    dispatch(deleteGroup(id));
  };
  const handleEditGroup = (id, name) => {
    dispatch(editGroup({ id, name }));
  };
  const addTodoHandler = () => {
    if (!inputTodo) return;
    console.log("added");
    dispatch(
      addTodo({
        id: groupId,
        todo: {
          id: nanoid(),
          name: inputTodo,
          checked: false,
        },
      })
    );
    setInputTodo("");
  };

  const todoDeleteHandler = (id) => {
    const todo = { id };
    dispatch(deleteTodo({ id: groupId, todo }));
  };

  const handleUpdateTodo = (id, name) => {
    const todo = { id, name };
    dispatch(updateTodo({ id: groupId, todo }));
  };
  return (
    <div className={styles.form_container}>
      <div className={styles.form_second_container}>
        <div className={styles.form_input_container}>
          <InputGroupField
            inputGroup={inputGroup}
            setInputGroup={setInputGroup}
          />
          <AddButtonGroup addGroupHandler={addGroupHandler} />
        </div>
        <div style={{ paddingTop: 20 }}>
          {groups.map((group, i) => (
            <Card
              key={i}
              name={group.name}
              id={group.id}
              onDelete={handleDeleteGroup}
              onChange={handleEditGroup}
            />
          ))}
        </div>
      </div>
      <div className={styles.form_second_container}>
        <div className={styles.form_todo_container}>
          <h1>Select Group</h1>
          <TodoList groups={groups} setTodoId={setTodoId} />
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
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FormGroup;
