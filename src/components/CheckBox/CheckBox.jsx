import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
const CheckBox = ({ id, checked, onChange, indeterminate }) => {
  const checkRef = useRef(null);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.id, e.target.checked);
    }
  };

  useEffect(() => {
    if (checkRef.current) {
      checkRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
        ref={checkRef}
      />
    </div>
  );
};
CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  indeterminate: PropTypes.any,
};
export default CheckBox;
