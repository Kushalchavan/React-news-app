import { useState, useEffect } from "react";
import Card from "./Card";

const News = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("health");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      const responseData = await response.json();
      console.log(responseData);
      setData(responseData.articles);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    // Fetching data initially
    fetchData();
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <div className="w-full flex flex-col items-center gap-5">
        <div>
          <h1 className="font-semibold text-3xl uppercase tracking-wider">
            React News App
          </h1>
        </div>
        <div className="flex gap-6 mt-5">
          <button
            className="px-3 py-1 rounded-full outline outline-gray-300 outline-none hover:bg-gray-100 transition duration-150"
            onClick={() => handleCategoryChange("technology")}
          >
            Technology
          </button>
          <button
            className="px-3 py-1 rounded-full outline outline-gray-300 outline-none hover:bg-gray-100 transition duration-150"
            onClick={() => handleCategoryChange("entertainment")}
          >
            Entertainment
          </button>
          <button
            className="px-3 py-1 rounded-full outline outline-gray-300 outline-none hover:bg-gray-100 transition duration-150"
            onClick={() => handleCategoryChange("business")}
          >
            Business
          </button>
          <button
            className="px-3 py-1 rounded-full outline outline-gray-300 outline-none hover:bg-gray-100 transition duration-150 "
            onClick={() => handleCategoryChange("sports")}
          >
            Sports
          </button>
          <button
            className="px-3 py-1 rounded-full outline outline-gray-300 outline-none hover:bg-gray-100 transition duration-150 "
            onClick={() => handleCategoryChange("health")}
          >
            Health
          </button>
          <button
            className="px-3 py-1 rounded-full outline outline-gray-300 outline-none hover:bg-gray-100 transition duration-150 "
            onClick={() => handleCategoryChange("general")}
          >
            General
          </button>
          <button
            className="px-3 py-1 rounded-full outline outline-gray-300 outline-none hover:bg-gray-100 transition duration-150 "
            onClick={() => handleCategoryChange("science")}
          >
            Science
          </button>
        </div>
        <Card data={data} />
      </div>
    </>
  );
};

export default News;
