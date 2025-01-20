import React, { useState } from "react";

const NoteInput = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote({
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,
    });
    setTitle("");
    setBody("");
  };

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Judul catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      ></textarea>
      <button type="submit">Add note</button>
    </form>
  );
};

export default NoteInput;
