import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from '../utils/local-data';
import ErrorPage from './ErrorPage';

function NoteDetailWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();

  function homeNavigate() {
    navigate('/');
  }

  return <DetailPage id={id} navigate={homeNavigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteClickHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);
    const { navigate } = this.props;
    navigate();
  }

  onArchiveNoteHandler(id) {
    archiveNote(id);
    const { navigate } = this.props;
    navigate();
  }

  onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    const { navigate } = this.props;
    navigate();
  }

  render() {
    return this.state.note === undefined ? (
      <ErrorPage />
    ) : (
      <section className="detail-page">
        {this.state.note.archived ? (
          <NoteDetail
            {...this.state.note}
            onDelete={this.onDeleteClickHandler}
            onArchive={this.onUnarchiveNoteHandler}
          />
        ) : (
          <NoteDetail
            {...this.state.note}
            onDelete={this.onDeleteClickHandler}
            onArchive={this.onArchiveNoteHandler}
          />
        )}
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default NoteDetailWrapper;
