import React, { useState } from "react";
import styles from "./Card.module.css";
import CheckBox from "../CheckBox/CheckBox";
import PropTypes from "prop-types";

const Card = ({ name, id, onDelete, onChange, checked, onChecked }) => {
  const [groupNewName, setGroupNewName] = useState(name);
  const [edit, setEdit] = useState(false);

  const handleKey = (e) => {
    if (!groupNewName) return;
    if (e.key === "Enter") {
      if (onChange) {
        onChange(id, groupNewName);
      }
      setEdit(false);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };
  // const handleTodoToggle = (id, name) => {
  //   onToggle(id, name);
  // };
  return (
    <div className={styles.card}>
      <CheckBox checked={checked} onChange={onChecked} id={`${id}`} />
      {edit ? (
        <input
          type="text"
          value={groupNewName}
          onChange={(e) => setGroupNewName(e.target.value)}
          onKeyPress={handleKey}
        />
      ) : (
        <div>{name}</div>
      )}

      <div className={styles.button_group}>
        {edit ? (
          <button
            className={styles.btn_inside_group}
            onClick={() => setEdit(false)}
          >
            CANCEL
          </button>
        ) : (
          <button className={styles.btn_inside_group} onClick={handleEdit}>
            EDIT
          </button>
        )}
        <button className={styles.btn_inside_group} onClick={handleDelete}>
          DELETE
        </button>
        {/* <button className={styles.btn_inside_group} onClick={handleTodoToggle}>
          ADD TODO
        </button> */}
      </div>
    </div>
  );
};

export default Card;
