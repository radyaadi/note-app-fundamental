import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import ArchivePageWrapper from './pages/ArchivePage';
import AddPage from './pages/AddPage';
import NoteDetailWrapper from './pages/DetailPage';
import ErrorPage from './pages/ErrorPage';

function NoteApp() {
  return (
    <div className="app-container">
      <header className="contact-app__header">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/note/:id" element={<NoteDetailWrapper />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NoteApp;
