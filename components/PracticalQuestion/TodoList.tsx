"use client";
import React, { useEffect, useState } from "react";

// Define the type for a Todo item
interface Todo {
  id: string;
  title: string;
}

// Initial todo list
const initialTodoList: Todo[] = [
  {
    id: new Date().toISOString(),
    title: "my name is dev",
  },
];

const TodoList: React.FC = () => {
  const [text, setText] = useState<string>(""); // State for input text
  const [todoListArr, setTodoListArr] = useState<Todo[]>(initialTodoList);

useEffect(() => {
  const storedTodo = localStorage.getItem("todo");

  if (storedTodo) {
    try {
      const parsedTodo = JSON.parse(storedTodo);
      setTodoListArr(parsedTodo);
    } catch (error) {
      console.error("Error parsing stored todos:", error);
      // Optionally, you could clear corrupted data:
      // localStorage.removeItem("todo");
    }
  }
}, []);

  const submitHandlerForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: new Date().toISOString(),
      title: text,
    };

    setTodoListArr((prevArr) => [...prevArr, newTodo]);
    setText(""); // Clear input after submission
  };

  // Save todos to localStorage whenever todoListArr changes
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoListArr));
  }, [todoListArr]);

//   remove the todo.
const RemoveHandler = (id:string) => {
    const mytodo= todoListArr.filter((value)=>value.id !==id);
    setTodoListArr(mytodo);

};
  return (
    <div>
      <form onSubmit={submitHandlerForm} className="flex flex-row gap-10">
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          className="w-full px-5 py-2 bg-red-600"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          type="submit"
          className="w-40 px-5 py-2 rounded-md bg-green-600"
        >
          Save Data
        </button>
      </form>

      {todoListArr.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <button
            type="button"
            className="w-40 px-5 py-2 rounded-md bg-red-600"
            onClick={()=>RemoveHandler(todo.id)}

          >
            remove{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
