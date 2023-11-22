import React from "react";

const NoteItem = ({ data }) => {
  return (
    <body className=" container mx-auto items-start ">
      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-bold mb2">{data.title}</h2>
        <div className="text-sm">
          <time dateTime={data.datetime} className="text-gray-500">
            {new Date().toLocaleDateString()}
          </time>
        </div>
        <div className="text-black leading-relaxed">{data.description}</div>
      </div>
    </body>
  );
};

export default NoteItem;
