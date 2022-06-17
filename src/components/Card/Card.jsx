import React from "react";
import styles from "./Card.module.css";
import { FaTrash, FaEdit, FaTimes } from "react-icons/fa";
const Card = ({ name, id, onDelete }) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };
  return (
    <div className={styles.card}>
      {name}
      <div className={styles.button_group}>
        <FaTimes />
        <FaEdit />
        <FaTrash onClick={handleDelete} />
        <button
          style={{
            padding: 6,
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
          }}
        >
          ADD TODO
        </button>
      </div>
    </div>
  );
};

export default Card;
