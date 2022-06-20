import React from "react";
import styles from "./AddGroup.module.css";
import Card from "../Card/Card";
import AddButtonGroup from "../ButtonGroup/AddButtonGroup";
import InputGroupField from "../InputGroup/InputGroupField";
import PropTypes from "prop-types";

const AddGroup = ({
  inputGroup,
  setInputGroup,
  addGroupHandler,
  groups,
  handleGroupCheck,
  handleDeleteGroup,
  handleEditGroup,
}) => {
  return (
    <div className={styles.form_second_container}>
      <div className={styles.form_input_container}>
        <InputGroupField
          inputGroup={inputGroup}
          setInputGroup={setInputGroup}
        />
        <AddButtonGroup addGroupHandler={addGroupHandler} />
      </div>
      <div style={{ paddingTop: 20 }}>
        {groups.map((group, i) => {
          const checkOption = group.todos.filter(
            (todo) => todo.checked === true
          );
          const isIndeterminate =
            checkOption.length !== 0 &&
            checkOption.length !== group.todos.length;

          let checked = false;

          if (group.todos.length === 0) {
            checked = group.checked;
          } else if (checkOption.length === group.todos.length) {
            checked = true;
          }
          return (
            <Card
              key={group.id}
              name={group.name}
              id={group.id}
              checked={checked}
              onChecked={handleGroupCheck}
              onDelete={handleDeleteGroup}
              onChange={handleEditGroup}
              indeterminate={isIndeterminate}
            />
          );
        })}
      </div>
    </div>
  );
};
AddGroup.propTypes = {
  inputGroup: PropTypes.string.isRequired,
  setInputGroup: PropTypes.func.isRequired,
  addGroupHandler: PropTypes.func.isRequired,
  groups: PropTypes.array.isRequired,
  handleGroupCheck: PropTypes.func.isRequired,
  handleDeleteGroup: PropTypes.func.isRequired,
  handleEditGroup: PropTypes.func.isRequired,
};

export default AddGroup;
