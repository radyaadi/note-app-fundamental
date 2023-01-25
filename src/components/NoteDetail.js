import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/dateFormatter';
import DeleteNoteButton from './buttons/DeleteNoteButton';
import ArchiveNoteButton from './buttons/ArchiveNoteButton';

function NoteDetail({ id, title, body, createdAt, onDelete, onArchive }) {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{body}</div>
      <div className="detail-page__action">
        <DeleteNoteButton id={id} onDelete={onDelete} />
        <ArchiveNoteButton id={id} onArchive={onArchive} />
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
