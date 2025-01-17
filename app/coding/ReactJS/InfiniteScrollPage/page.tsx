"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

// Define the Student type
interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
}

// Dummy student data
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
    email: "eva.green@example.com",
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

const InfiniteScroll = () => {
  const [visibleStudents, setVisibleStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Memoize loadMoreStudents with useCallback to prevent recreation
  const loadMoreStudents = useCallback(() => {
    if (isLoading || visibleStudents.length >= students.length) return;

    setIsLoading(true);
    setTimeout(() => {
      const nextBatch = students.slice(
        visibleStudents.length,
        visibleStudents.length + 4
      );
      setVisibleStudents((prev) => [...prev, ...nextBatch]);
      setIsLoading(false);
    }, 1000);
  }, [isLoading, visibleStudents.length]); // Dependency array ensures the function is updated when needed

  // Intersection observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        loadMoreStudents();
      }
    });

    const currentObserverRef = observerRef.current;
    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [isLoading, loadMoreStudents]); // Include loadMoreStudents as a dependency

  // Load initial students
  useEffect(() => {
    loadMoreStudents();
  }, [loadMoreStudents]); // Run once on mount to load the first batch of students

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Student List (Infinite Scroll)
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {visibleStudents.map((student) => (
          <div
            key={student.id}
            className="p-4 border border-gray-300 rounded shadow-sm"
          >
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p>Age: {student.age}</p>
            <p>Grade: {student.grade}</p>
            <p>Email: {student.email}</p>
          </div>
        ))}
      </div>

      {/* Observer div */}
      <div ref={observerRef} className="h-10"></div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="text-center py-4">
          <p>Loading more students...</p>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
