import React from "react";
import styles from "./InputGroupField.module.css";
import PropTypes from "prop-types";

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

InputGroupField.propTypes = {
  inputGroup: PropTypes.string.isRequired,
  setInputGroup: PropTypes.func.isRequired,
};

export default InputGroupField;
