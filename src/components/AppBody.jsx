import { useEffect, useState } from "react";
import useStore from "../store/useStore";
import FlagCard from "./FlagCard";

const AppBody = () => {
  const { data, showData, loadMore, searchData, resetShowData, filterData } =
    useStore();
  const hasMoreData = showData.length < data.length;

  const [inputChange, setInputChange] = useState("");

  useEffect(() => {
    loadMore();
  }, []);

  const handleInputChange = (e) => {
    setInputChange(e.target.value);
    searchData(e.target.value);
    if (e.target.value === "") {
      resetShowData();
      loadMore();
    }
  };

  const handleSelectChange = (e) => {
    filterData(e.target.value);
    if (e.target.value === "All") {
      resetShowData();
      loadMore();
    }
  };

  return (
    <div className="">
      <div className="my-10 flex  justify-between gap-5 flex-wrap w-full">
        <div className="flex  bg-lightGrayBg text-darkBlueText dark:text-white dark:bg-darkBlue p-3 gap-3 rounded-md drop-shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            value={inputChange}
            onChange={handleInputChange}
            placeholder="Search for a country..."
            className="outline-none bg-transparent "
          />
        </div>
        <select
          name="country"
          className="bg-lightGrayBg text-darkBlueText dark:text-white dark:bg-darkBlue  outline-none p-3  rounded-md drop-shadow-lg"
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10">
        {showData.map((el) => (
          <FlagCard key={el.name} country={el} />
        ))}
      </div>
      {hasMoreData && (
        <button
          onClick={loadMore}
          className="bg-lightGrayBg text-darkBlueText dark:text-white dark:bg-darkBlue px-7 py-2 rounded-lg shadow-xl mb-4"
        >
          Load More ...
        </button>
      )}
    </div>
  );
};
export default AppBody;
