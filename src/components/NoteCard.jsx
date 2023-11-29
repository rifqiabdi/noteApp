import { DeleteButton } from "./DeleteButton";

import PropTypes from "prop-types";

function NoteCard({ title, createdAt, description, id, index, onDelete }) {
  return (
    <body className=" container mx-auto items-start ">
      <div className="bg-gray-200 rounded-xl p-5">
        <h2 className="text-xl font-bold mb2">{title}</h2>
        <div className="text-sm">{createdAt}</div>
        <div className="text-black leading-relaxed">{description}</div>
        <div className="my-3 mx-0">
          <DeleteButton index={index} id={id} onDelete={onDelete} />
        </div>
      </div>
    </body>
  );
}

NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export { NoteCard };
