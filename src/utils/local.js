let array_todos = [
  {
    title: "Tugas Pemrograman Web",
    description: "Membuat aplikasi todo dengan react js",
    createdAt: "05/11/2023",
  },
  {
    title: "Tugas MSIB",
    description: "Mengerjakan Logbook harian",
    createdAt: "05/11/2023",
  },
  {
    title: "Tugas MSIB",
    description: "Membuat project IP Server sebagai tugas akhir backend",
    createdAt: "05/11/2023",
  },
];

function getTodos() {
  return array_todos;
}

function deleteTodos(deleted_index) {
  array_todos = array_todos.filter((todo, key) => key !== deleted_index);
}

function addTodo(todo) {
  array_todos = [...array_todos, todo];
}

export { getTodos, deleteTodos, addTodo };
