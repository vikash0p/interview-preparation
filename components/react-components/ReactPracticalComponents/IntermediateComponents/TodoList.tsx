"use client";
import React, { useEffect, useState } from "react";

interface Todo {
  id: string;
  title: string;
}

const TodoList: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    try {
      const storedTodo = localStorage.getItem("todo");
      if (storedTodo) {
        setTodoList(JSON.parse(storedTodo));
      }
    } catch (error) {
      console.error("Error retrieving stored todos:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (!text.trim()) {
      alert("Please enter a task.");
      return;
    }

    const newTodo: Todo = {
      id: new Date().toISOString(),
      title: text.trim(),
    };

    setTodoList((prevList) => [...prevList, newTodo]);
    setText("");
  };

  const removeTodo = (id: string) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  return (
    <div className=" flex flex-col items-center justify-center  p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
        className="flex flex-col md:flex-row gap-4  w-[500px]"
      >
        <input
          type="text"
          value={text}
          placeholder="Enter a task"
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Add Task
        </button>
      </form>

      <div className="mt-8 w-full max-w-md space-y-4">
        {todoList.length === 0 ? (
          <p className="text-gray-600 text-center">
            No tasks available. Add a task to get started!
          </p>
        ) : (
          todoList.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-md"
            >
              <span className="text-gray-800">{todo.title}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;

// Todo list with data source

export const todoListDataSource = `
"use client";
import React, { useEffect, useState } from "react";

interface Todo {
  id: string;
  title: string;
}

const TodoList: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    try {
      const storedTodo = localStorage.getItem("todo");
      if (storedTodo) {
        setTodoList(JSON.parse(storedTodo));
      }
    } catch (error) {
      console.error("Error retrieving stored todos:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (!text.trim()) {
      alert("Please enter a task.");
      return;
    }

    const newTodo: Todo = {
      id: new Date().toISOString(),
      title: text.trim(),
    };

    setTodoList((prevList) => [...prevList, newTodo]);
    setText("");
  };

  const removeTodo = (id: string) => {
    setTodoList((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  return (
    <div className=" flex flex-col items-center justify-center  p-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
        className="flex flex-col md:flex-row gap-4  w-[500px]"
      >
        <input
          type="text"
          value={text}
          placeholder="Enter a task"
          onChange={(e) => setText(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Add Task
        </button>
      </form>

      <div className="mt-8 w-full max-w-md space-y-4">
        {todoList.length === 0 ? (
          <p className="text-gray-600 text-center">
            No tasks available. Add a task to get started!
          </p>
        ) : (
          todoList.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white shadow-md rounded-md"
            >
              <span className="text-gray-800">{todo.title}</span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;`;
