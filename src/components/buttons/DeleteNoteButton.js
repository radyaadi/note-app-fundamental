import React from 'react';
import { FiTrash } from 'react-icons/fi';

function DeleteNoteButton({ id, onDelete }) {
  return (
    <button className="action" onClick={() => onDelete(id)}>
      <FiTrash />
    </button>
  );
}

export default DeleteNoteButton;
