import { NoteCard } from "./NoteCard";

function NoteList(props) {
  const { todos, onDelete } = props;
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <NoteCard
            title={todo.title}
            index={index}
            createdAt={todo.createdAt}
            onDelete={onDelete}
            description={todo.description}
          ></NoteCard>
        );
      })}
    </>
  );
}

export default NoteList;
