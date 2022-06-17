import React from "react";
import styles from "./AddButtonGroup.module.css";

const AddButtonGroup = ({ addGroupHandler }) => {
  return (
    <div>
      <button className={styles.add_button_group} onClick={addGroupHandler}>
        ADD GROUP
      </button>
    </div>
  );
};

export default AddButtonGroup;
