import React from "react";
import styles from "./InputGroupField.module.css";

const InputGroupField = ({ inputGroup, setInputGroup }) => {
  const handleChange = (event) => {
    event.preventDefault();
    setInputGroup(event.target.value);
  };
  return (
    <div className={styles.input_group_container}>
      <input
        className={styles.input_group_field}
        type="text"
        value={inputGroup}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputGroupField;
