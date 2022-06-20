import React from "react";
import PropTypes from "prop-types";
import styles from "./InputTodo.module.css";
const SelectGroup = ({ groups, setTodoId }) => {
  const handleChange = (e) => {
    setTodoId(e.target.value);
  };

  return (
    <div className={styles.input_todo_container}>
      <div className={styles.input_todo_field}>
        <select name="todos" className={styles.select} onChange={handleChange}>
          <option value={null}>Select Group</option>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

SelectGroup.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
  setTodoId: PropTypes.func.isRequired,
};
export default SelectGroup;
