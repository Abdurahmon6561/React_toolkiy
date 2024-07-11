import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.category);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      console.log(categories); // Log the categories data
    }
  }, [status, categories]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.id || index}
              className="bg-white rounded-lg shadow-md p-4 flex items-center"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <span className="text-lg font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      )}
      {status === "failed" && (
        <p className="text-red-500">Failed to fetch categories</p>
      )}
    </div>
  );
};

export default Categories;
