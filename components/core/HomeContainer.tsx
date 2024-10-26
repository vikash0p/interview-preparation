"use client";
import React, { useEffect, useState } from "react";

interface postsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const myoption = [5, 6, 7, 8];
const HomeContainer = ({ data }: { data: postsData[] }) => {
  const [isRow, setIsRow] = useState(5);
  const [currentData, setCurrentData] = useState<postsData[]>([]);
  const [page, setPage] = useState(1);

  const totalData = data.length;
  const perPageData = 10;
  const totalPages = Math.ceil(totalData / perPageData);

  useEffect(() => {
    const startIndex = (page - 1) * perPageData;
    const endIndex = startIndex + perPageData;
    const filteredData = data.slice(startIndex, endIndex);
    setCurrentData(filteredData);
  }, [page, data]);

  const rowHandlerFunction = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setIsRow(Number(value));
  };

  const PrevHandlerFunction = () => {
    if (page > 1) setPage(page - 1);
  };

  const NextHandlerFunction = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const pageNumberClickHandler = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <section>
      <select
        className="w-72 h-12 bg-green-600"
        id="row"
        name="row"
        value={isRow}
        onChange={rowHandlerFunction}
      >
        {myoption.map((row) => (
          <option value={row} key={row}>
            {row}
          </option>
        ))}
      </select>

      <div
        className={`grid gap-3 ${
          isRow === 5
            ? "grid-cols-5"
            : isRow === 6
            ? "grid-cols-6"
            : isRow === 7
            ? "grid-cols-7"
            : isRow === 8
            ? "grid-cols-8"
            : "grid-cols-1"
        }`}
      >
        {currentData.map((value) => (
          <div className="border-2 border-red-700 py-2" key={value.id}>
            <h5>{value.title}</h5>
            <h5>{value.body}</h5>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center py-10 gap-5">
        <button
          type="button"
          className="px-5 py-2 rounded-xl text-black bg-yellow-400"
          onClick={PrevHandlerFunction}
          disabled={page === 1}
        >
          Prev
        </button>
        <div className="flex flex-row gap-3">
          {Array.from({ length: totalPages })
            .slice(
              Math.max(0, page - 2), // start showing pages two before the current page
              Math.min(totalPages, page + 1) // end after the current page
            )
            .map((_, index) => {
              const pageNumber = Math.max(1, page - 1) + index;
              return (
                <button
                  key={pageNumber}
                  className={`px-4 py-2 rounded-full ${
                    page === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => pageNumberClickHandler(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
        </div>

        <button
          type="button"
          className="px-5 py-2 rounded-xl text-black bg-yellow-400"
          onClick={NextHandlerFunction}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default HomeContainer;
