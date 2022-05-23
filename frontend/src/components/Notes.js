import Note from './Note'
import React, { useState } from 'react'


export default function Notes() {

  const [notes, setNotes] = useState([]);

  function getNotes() {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    };
    fetch('/home', requestOptions)
      .then(res => res.json())
      .then(data => {
        setNotes(data);
      })
      .catch(err => console.log(err))
    return
  }

  getNotes();

  return (
    <>
      {notes.length === 0 && <h2 style={{textAlign: "center"}}>There are no notes yet!</h2>}
      <div className='noteGrid'>
        {notes.map(note => (
          <Note
            key={note._id}
            note={note}
          />
        ))}
      </div>
    </>
  );
}
