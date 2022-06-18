import React from "react";

const CheckBox = ({ id, checked, onChange }) => {
  console.log(id);
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.id, e.target.checked);
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};

export default CheckBox;
