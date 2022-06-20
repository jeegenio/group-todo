import React, { useMemo, useState } from "react";
import styles from "./FormGroup.module.css";
import {
  addGroup,
  addTodo,
  deleteGroup,
  editGroup,
  deleteTodo,
  updateTodo,
  setCheckGroup,
  checkTodo,
} from "../GroupSlice/GroupSlice";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { nanoid } from "nanoid";
import GroupList from "../GroupList/GroupList";
import AddGroup from "../AddGroup/AddGroup";

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
  const addGroupHandler = () => {
    if (!inputGroup) return;
    const groupId = nanoid();
    dispatch(
      addGroup({
        id: groupId,
        name: inputGroup,
        checked: false,
        todos: [],
      })
    );
    setInputGroup("");
  };
  const handleGroupCheck = (id, checked) => {
    dispatch(setCheckGroup({ id: id, checked }));
  };
  const handleDeleteGroup = (id) => {
    dispatch(deleteGroup(id));
  };
  const handleEditGroup = (id, name) => {
    dispatch(editGroup({ id, name }));
  };
  const addTodoHandler = () => {
    if (!inputTodo) return;
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

  const handleCheckedTodo = (id, checked) => {
    const todo = {
      id: id,
      checked,
    };
    dispatch(checkTodo({ id: groupId, todo }));
  };
  return (
    <div className={styles.form_container}>
      <AddGroup
        inputGroup={inputGroup}
        setInputGroup={setInputGroup}
        addGroupHandler={addGroupHandler}
        groups={groups}
        handleGroupCheck={handleGroupCheck}
        handleDeleteGroup={handleDeleteGroup}
        handleEditGroup={handleEditGroup}
      />
      <GroupList
        groups={groups}
        setTodoId={setTodoId}
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        addTodoHandler={addTodoHandler}
        group={group}
        todoDeleteHandler={todoDeleteHandler}
        onChange={handleUpdateTodo}
        handleCheckedTodo={handleCheckedTodo}
      />
    </div>
  );
};

export default FormGroup;
