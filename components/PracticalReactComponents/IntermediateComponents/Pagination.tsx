"use client";
import React, { useEffect, useState } from "react";
interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
}

const students: Student[] = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    grade: "A",
    email: "alice.johnson@example.com",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    grade: "B",
    email: "bob.smith@example.com",
  },
  {
    id: 3,
    name: "Cathy Lee",
    age: 19,
    grade: "A",
    email: "cathy.lee@example.com",
  },
  {
    id: 4,
    name: "David Brown",
    age: 21,
    grade: "C",
    email: "david.brown@example.com",
  },
  {
    id: 5,
    name: "Eva Green",
    age: 23,
    grade: "B",
    email: "eva.indigo@exa.com",
  },
  {
    id: 6,
    name: "Frank White",
    age: 20,
    grade: "A",
    email: "frank.white@example.com",
  },
  {
    id: 7,
    name: "Grace Adams",
    age: 22,
    grade: "B",
    email: "grace.adams@example.com",
  },
  {
    id: 8,
    name: "Harry Clark",
    age: 21,
    grade: "C",
    email: "harry.clark@example.com",
  },
  {
    id: 9,
    name: "Ivy Martin",
    age: 19,
    grade: "A",
    email: "ivy.martin@example.com",
  },
  {
    id: 10,
    name: "Jack Wilson",
    age: 23,
    grade: "B",
    email: "jack.wilson@example.com",
  },
];

const Pagination = () => {
  const [studentPagination, setStudentPagination] = useState<Student[] | null>(
    []
  );
  const [page, setPage] = useState(1);
  const totalStudent = students.length;
  const perPageStudents = 3;
  const perPageData = Math.ceil(totalStudent / perPageStudents);
  useEffect(() => {
    const startIndex = (page - 1) * perPageStudents;
    const endIndex = startIndex + perPageStudents;
    const studentFilterData = students.slice(startIndex, endIndex);
    setStudentPagination(studentFilterData);
  }, [page]);
  const paginationNextHandler = () => {
    if (page < perPageData) {
      setPage((prev) => prev + 1);
    }
  };
  const paginationPrevHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div className="p-2">
        <div className="grid grid-cols-1  gap-2">
          {studentPagination?.map((student) => (
            <div key={student.id} className="bg-gray-200 rounded-lg shadow-md p-4">
              <h2 className="text-md font-semibold text-gray-700">
                {student.name}
              </h2>
              <p className=" text-sm text-gray-500">Age: {student.age}</p>
              <p className=" text-sm text-gray-500">Grade: {student.grade}</p>
              <p className=" text-sm text-gray-500">Email: {student.email}</p>
            </div>
          ))}
        </div>
      </div>
      <span className="flex flex-row gap-10 justify-center items-center">
        <button
          type="button"
          className="px-5 py-2 rounded-md bg-indigo-600 text-white "
          onClick={paginationPrevHandler}
        >
          prev
        </button>
        <p>{page} </p>
        <button
          type="button"
          className="px-5 py-2 rounded-md bg-indigo-600 text-white "
          onClick={paginationNextHandler}
        >
          Next
        </button>
      </span>
    </div>
  );
};

export default Pagination;


// !Pagination  data source


export const paginationDataSource = `"use client";
import React, { useEffect, useState } from "react";
interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
}

const students: Student[] = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 20,
    grade: "A",
    email: "alice.johnson@example.com",
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 22,
    grade: "B",
    email: "bob.smith@example.com",
  },
  {
    id: 3,
    name: "Cathy Lee",
    age: 19,
    grade: "A",
    email: "cathy.lee@example.com",
  },
  {
    id: 4,
    name: "David Brown",
    age: 21,
    grade: "C",
    email: "david.brown@example.com",
  },
  {
    id: 5,
    name: "Eva Green",
    age: 23,
    grade: "B",
    email: "eva.indigo@exa.com",
  },
  {
    id: 6,
    name: "Frank White",
    age: 20,
    grade: "A",
    email: "frank.white@example.com",
  },
  {
    id: 7,
    name: "Grace Adams",
    age: 22,
    grade: "B",
    email: "grace.adams@example.com",
  },
  {
    id: 8,
    name: "Harry Clark",
    age: 21,
    grade: "C",
    email: "harry.clark@example.com",
  },
  {
    id: 9,
    name: "Ivy Martin",
    age: 19,
    grade: "A",
    email: "ivy.martin@example.com",
  },
  {
    id: 10,
    name: "Jack Wilson",
    age: 23,
    grade: "B",
    email: "jack.wilson@example.com",
  },
];

const Pagination = () => {
  const [studentPagination, setStudentPagination] = useState<Student[] | null>(
    []
  );
  const [page, setPage] = useState(1);
  const totalStudent = students.length;
  const perPageStudents = 3;
  const perPageData = Math.ceil(totalStudent / perPageStudents);
  useEffect(() => {
    const startIndex = (page - 1) * perPageStudents;
    const endIndex = startIndex + perPageStudents;
    const studentFilterData = students.slice(startIndex, endIndex);
    setStudentPagination(studentFilterData);
  }, [page]);
  const paginationNextHandler = () => {
    if (page < perPageData) {
      setPage((prev) => prev + 1);
    }
  };
  const paginationPrevHandler = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div>
      <div className="p-2">
        <div className="grid grid-cols-1  gap-2">
          {studentPagination?.map((student) => (
            <div key={student.id} className="bg-gray-200 rounded-lg shadow-md p-4">
              <h2 className="text-md font-semibold text-gray-700">
                {student.name}
              </h2>
              <p className=" text-sm text-gray-500">Age: {student.age}</p>
              <p className=" text-sm text-gray-500">Grade: {student.grade}</p>
              <p className=" text-sm text-gray-500">Email: {student.email}</p>
            </div>
          ))}
        </div>
      </div>
      <span className="flex flex-row gap-10 justify-center items-center">
        <button
          type="button"
          className="px-5 py-2 rounded-md bg-indigo-600 text-white "
          onClick={paginationPrevHandler}
        >
          prev
        </button>
        <p>{page} </p>
        <button
          type="button"
          className="px-5 py-2 rounded-md bg-indigo-600 text-white "
          onClick={paginationNextHandler}
        >
          Next
        </button>
      </span>
    </div>
  );
};

export default Pagination;`;