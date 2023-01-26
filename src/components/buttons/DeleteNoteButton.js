import React from 'react';
import { FiTrash } from 'react-icons/fi';

function DeleteNoteButton({ id, onDelete }) {
  return (
    <button className="action" title="Delete Note" onClick={() => onDelete(id)}>
      <FiTrash />
    </button>
  );
}

export default DeleteNoteButton;
