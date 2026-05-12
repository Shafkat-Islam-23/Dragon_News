import React, { use } from "react";
import { NavLink } from "react-router";

const categories_promise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categoriesdata = use(categories_promise);
  console.log(categoriesdata);
  return (
    <div className="grid grid-cols-1 gap-2 w-4/5">
      <h2 className="font-bold">All Categories</h2>
      {categoriesdata.map((category) => (
        <NavLink
          key={category.id}
          className={
            "hover:bg-gray-100 gap-0 py-3 flex justify-center  font-semibold text-gray-500 "
          }
          to={`/category/${category.id}`}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
