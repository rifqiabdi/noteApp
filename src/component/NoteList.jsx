import React from "react";
import NoteItem from "./NoteCard";

const NoteList = ({ data }) => {
  return (
    <>
      {data.map((data) => (
        <NoteItem data={data} />
      ))}
    </>
  );
};

export default NoteList;
