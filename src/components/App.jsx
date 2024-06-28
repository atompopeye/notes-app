import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const fetchedNotes = response.data;
        setNotes(fetchedNotes);
      })
      .catch(error => {
        console.error('Error fetching notes:', error);
      });
  };


    const addNote = newNote => {
    
      setNotes((prevNotes) => [...prevNotes, newNote]);
    
    };

   

  const deleteNote = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => {
      setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    })
    .catch(error => {
      console.error('Error deleting note:', error);
    });
         
  };

  const onAddNote = newNote => {
    addNote(newNote);
  };

  return (
    <div>
      <Header />
      <CreateArea onAddNote={onAddNote} onDeleteNote ={deleteNote}/>
      {notes.map((note) => <Note
            note={note}
            onDelete={deleteNote}
          />
      )}
      
    </div>
  );
};

export default App;
