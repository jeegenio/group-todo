import React from "react";
import styles from "./AddButtonGroup.module.css";
import PropTypes from "prop-types";
const AddButtonGroup = ({ addGroupHandler }) => {
  return (
    <div>
      <button className={styles.add_button_group} onClick={addGroupHandler}>
        ADD GROUP
      </button>
    </div>
  );
};
AddButtonGroup.propTypes = {
  addGroupHandler: PropTypes.func,
};
export default AddButtonGroup;
