import React from "react";
import PropTypes from "prop-types";

function DeleteButton({ index, id, onDelete }) {
  return (
    <button
      className=" p-3  text-center bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
      onClick={() => onDelete(id)}
    >
      Hapus
    </button>
  );
}

DeleteButton.protoTypes = {
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { DeleteButton };
