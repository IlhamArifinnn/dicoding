import React, { useState } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils";

const App = () => {
  const [notes, setNotes] = useState(getInitialData());

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  return (
    <>
      <Header />
      <div className="note-app__body">
        <NoteInput onAddNote={addNote} />
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={notes.filter((note) => !note.archived)}
          onDelete={deleteNote}
          onArchive={toggleArchiveNote}
        />
        <h2>Arsip</h2>
        <NoteList
          notes={notes.filter((note) => note.archived)}
          onDelete={deleteNote}
          onArchive={toggleArchiveNote}
        />
      </div>
    </>
  );
};

export default App;
