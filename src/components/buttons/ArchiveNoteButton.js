import React from 'react';
import { FiDownload, FiUpload } from 'react-icons/fi';

function ArchiveNoteButton({ id, onArchive, isArchived }) {
  return (
    <button
      className="action"
      title={isArchived ? 'Activate Note' : 'Archive Note'}
      onClick={() => onArchive(id)}
    >
      {isArchived ? <FiUpload /> : <FiDownload />}
    </button>
  );
}

export default ArchiveNoteButton;
