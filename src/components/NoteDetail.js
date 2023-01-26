import React from 'react';
import PropTypes from 'prop-types';
import NoteDetailBody from './NoteDetailBody';
import DeleteNoteButton from './buttons/DeleteNoteButton';
import ArchiveNoteButton from './buttons/ArchiveNoteButton';

function NoteDetail({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <>
      <NoteDetailBody title={title} body={body} createdAt={createdAt} />
      <div className="detail-page__action">
        <DeleteNoteButton id={id} onDelete={onDelete} />
        <ArchiveNoteButton
          id={id}
          onArchive={onArchive}
          isArchived={archived}
        />
      </div>
    </>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
