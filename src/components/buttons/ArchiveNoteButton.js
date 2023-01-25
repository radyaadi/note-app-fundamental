import React from 'react';

function ArchiveNoteButton({ id, onArchive }) {
  return (
    <button className="action" onClick={() => onArchive(id)}>
      P
    </button>
  );
}

export default ArchiveNoteButton;
