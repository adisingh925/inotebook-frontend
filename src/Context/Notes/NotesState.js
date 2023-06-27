import React, { useState } from "react";
import NotesContext from "./NotesContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "649ad3458cc32fb383ebc6de",
      user: "649ad2d0d0487ad7ac01e6a0",
      title: "aman ka note",
      description: "hello i am aman",
      tag: "personal",
      date: "2023-06-27T12:17:09.319Z",
      __v: 0,
    },
    {
      _id: "649ad34b8cc32fb383ebc6e0",
      user: "649ad2d0d0487ad7ac01e6a0",
      title: "aditya ka note",
      description: "hello i am aman",
      tag: "personal",
      date: "2023-06-27T12:17:15.611Z",
      __v: 0,
    },
    {
      _id: "649ad34b8cc32fb999ebc6t5",
      user: "649ad2d0d0487ad7ac01e6a0",
      title: "aditya ka note",
      description: "hello i am aman",
      tag: "personal",
      date: "2023-06-27T12:17:15.611Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes)

  return (
    <NotesContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NoteState;
