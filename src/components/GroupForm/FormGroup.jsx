import React, { useState } from "react";
import AddButtonGroup from "../ButtonGroup/AddButtonGroup";
import InputGroupField from "../InputGroup/InputGroupField";
import styles from "./FormGroup.module.css";
import { setGroup, deleteGroup } from "../GroupSlice/GroupSlice";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { nanoid } from "nanoid";
import Card from "../Card/Card";

const FormGroup = () => {
  const [inputGroup, setInputGroup] = useState(" ");
  const dispatch = useAppDispatch();
  const { groups } = useAppSelector((state) => state.group);

  const addGroupHandler = () => {
    if (!inputGroup) return;
    dispatch(
      setGroup({
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
        <div>
          {groups.map((group, i) => (
            <Card
              key={i}
              name={group.name}
              id={group.id}
              onDelete={handleDeleteGroup}
            />
          ))}
        </div>
      </div>
      MainContainer
    </div>
  );
};

export default FormGroup;
