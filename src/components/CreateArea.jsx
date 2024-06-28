import React, { useState } from "react";
import axios from "axios";

  const CreateArea = ({onAddNote}) => {
    const [note, setNote] = useState({
      title: '',
      body: ''
    });
    
  const handleChange = event => {
    const { name, value } = event.target;
    setNote(prevNote => ({      
        ...prevNote,
        [name]: value      
    }));
  };

  const deleteNote = id => {
    axios.delete(`https://your-rest-api.com/notes/${id}`)
      .then(() => {
        onDeleteNote(id);
      })
      .catch(error => {
        console.error('Error deleting note:', error);
      });
  };

  const submitNote = event => {
    event.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/posts", note)
      .then(response => {
        onAddNote(response.data);
        setNote({
          title: '',
          body: ''
        });
      })
      .catch(error => {
        console.error('error creating note:', error);
      });
    };


    
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title of the Note"
        />
        <textarea
          name="body"
          onChange={handleChange}
          value={note.body}
          placeholder="Description"
        
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
