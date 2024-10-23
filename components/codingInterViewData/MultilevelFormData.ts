export const MultiLevelFromData = `
"use client";
import React, { useState } from "react";

const userInputFields = [
  {
    id: "name",
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Enter your name",
    required: true,
    button: "Next",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
    required: true,
    button: "Next",
  },
  {
    id: "age",
    label: "Age",
    type: "number",
    name: "age",
    placeholder: "Enter your age",
    required: true,
    button: "Next",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    required: true,
    button: "Submit",
  },
];

interface UserInterface {
  name: string;
  email: string;
  age: number;
  password: string;
}

const MultiLevelFormComponent = () => {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState<UserInterface>({
    name: "",
    email: "",
    age: 0,
    password: "",
  });
  const [isTrue, setIsTrue] = useState(false);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (index === userInputFields.length - 1) {
      console.log("User Data Submitted: ", user);
      setIsTrue(true);

      // Reset the form after submission
      setTimeout(() => {
        setIsTrue(false);
        setIndex(0); // Reset to first form field
        setUser({
          name: "",
          email: "",
          age: 0,
          password: "",
        });
      }, 2000); // Display submitted data for 2 seconds before resetting
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  const inputValueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "age" ? Number(value) : value, // convert age to number
    }));
  };

  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center ">
        <form
          onSubmit={formSubmitHandler}
          key={userInputFields[index].id}
          className="flex flex-col gap-5 items-center w-96 h-96 justify-center bg-gray-900 rounded-md mt-5 "
        >
          {index > 0 && (
            <button
              type="button"
              className="text-white underline"
              onClick={() => setIndex((prev) => prev - 1)}
            >
              Back
            </button>
          )}
          <label
            htmlFor={userInputFields[index].id}
            className="text-xl text-white"
          >
            {userInputFields[index].label}
            <input
              id={userInputFields[index].id}
              type={userInputFields[index].type}
              name={userInputFields[index].name}
              className="w-96 h-12 rounded-sm border border-white mt-2 text-black"
              placeholder={userInputFields[index].placeholder}
              required={userInputFields[index].required}
              onChange={inputValueChangeHandler}
              value={
                user[userInputFields[index].name as keyof UserInterface] || ""
              }
            />
          </label>
          <button
            type="submit"
            className="w-32 px-5 py-2 bg-gray-200 text-black rounded-sm"
          >
            {userInputFields[index].button}
          </button>
        </form>
      </div>

      {isTrue && (
        <div className="text-center mt-4">
          <h2 className="text-xl">User Data Submitted:</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Password: {user.password}</p>
        </div>
      )}
    </div>
  );
};

export default MultiLevelFormComponent;

`;