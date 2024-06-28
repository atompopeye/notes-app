import React from "react";

const Note = ({ note, onDelete }) => {
  const handleDelete = () => {
    onDelete(note.id);
  };
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default Note;
